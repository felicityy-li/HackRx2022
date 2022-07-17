/**
 * logic for developing notification
 * 
 * check the patients who have been recently added
 * from their date of birth calculate their age
 * 
 * check from our in-house vaccine store and confirm if they are eligible for that vaccine
 * if yes then we text their caregiver about that information
 * 
 * if not then we do not text their caregiver
 */
const { AuthRegistrationsCredentialListMappingInstance } = require('twilio/lib/rest/api/v2010/account/sip/domain/authTypes/authRegistrationsMapping/authRegistrationsCredentialListMapping');
const dbConnection = require('../../db/index.db');
const vaccineDB = require('../../db/vaccine.db');


const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = require('twilio')(accountSID, authToken);

const processAndSendAlerts = async (request, response) => {

    // get current date
    let today = new Date().toISOString().slice(0, 10)

    // find the patient who have been added today
    let [rows] = await (await dbConnection).execute(`SELECT *, Patient.firstname as patient_firstname, Patient.lastname as patient_lastname FROM Patient 
    INNER JOIN caregiver_patient ON caregiver_patient.patientid = Patient.id 
    INNER JOIN caregiver ON caregiver.email = caregiver_patient.caregiverid WHERE Patient.dateadded = '${today}';`);

    // loop through the patients - get their age and compare against the vaccine dataset that we have and they receive notification based on that
    let messageProcessStatus = [];

    rows.map(async (member) => {

        let vaccineQualification = await checkMemberQualificationForVaccine(member);
        let message = buildAlertMessage(member, vaccineQualification);

        let msgData = await twilioClient.messages.create({
            body: message,
            from: +19592156984,
            to: member.phonenumber
        });

        messageProcessStatus.push(msgData);
        return;
    });

    response.send("alert sent");
}


const checkMemberQualificationForVaccine = async (member) => {
    const vaccineQualification = [];
    let memberAgeInMilliseconds = new Date() - new Date(member.dateofbirth);
    const memberAge = Math.floor(memberAgeInMilliseconds / 1000 / 60 / 60 / 24 / 365);

    vaccineDB.map((vaccine) => {
        if (memberAge >= vaccine.above_age) {
            vaccineQualification.push(vaccine.name)
        }
    });

    return vaccineQualification;
};


const buildAlertMessage = (member, vaccinationQualification) => {

    console.log(member);
    console.log(vaccinationQualification);

    let vaccineQualificationMessage = "";
    let counter = 1;

    vaccinationQualification.map((vaccine) => {
        vaccineQualificationMessage = vaccineQualificationMessage + `(${counter}) ` + vaccine;
        counter++;
    }); 

    let message = `Hello ${member.firstname} ${member.lastname},
    Our records show that ${member.patient_firstname} ${member.patient_lastname} is due for following vaccines: ${vaccineQualificationMessage}
    Please contact ABC pharmacy to get them vaccinated.`;

    return message;
};

module.exports = {
    processAndSendAlerts
}