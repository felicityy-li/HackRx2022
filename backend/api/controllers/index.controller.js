const dbConnection = require('../../db/index.db');
const { v4: uuidv4 } = require('uuid');

const signin = async (request, response) => {
    let [rows] = await (await dbConnection).execute(`SELECT * FROM Caregiver WHERE email = '${request.body.email}' AND password = '${request.body.password}';`);
    console.log(request.body);

    if (rows.length != 0) {
        return response.status(200).send({
            message: 'valid credentials',
            data: {
                email: request.body.email
            }
        });
    }

    return response.status(400).send({
        message: "invalid credentials",
        data: request.body
    });
}

/**
 * Works as create caregiver
 * @param {*} request 
 * @param {*} response 
 */
const signup = async (request, response) => {

    try {
        let [rows] = await (await dbConnection).query(`INSERT INTO caregiver (email, firstname, lastname, phonenumber, password) VALUES (?, ?, ?, ?, ?);`, [
            request.body.email,
            request.body.firstname,
            request.body.lastname,
            request.body.phonenumber,
            request.body.password]);

        if (rows.length != 0) {
            return response.status(200).send({
                message: 'caregiver created',
                data: {
                    email: request.body.email,
                    firstname: request.body.firstname,
                    lastname: request.body.lastname,
                    phonenumber: request.body.phonenumber
                }
            });
        }

        return response.status(400).send({
            message: "caregiver not created",
            data: {
                email: request.body.email,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                phonenumber: request.body.phonenumber
            }
        });
    } catch (error) {
        return response.status(400).send({
            message: error.message,
            data: {
                email: request.body.email,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                phonenumber: request.body.phonenumber
            }
        });
    }
}

const createPatient = async (request, response) => {

    let patientId = uuidv4();
    let dateAdded = new Date().toISOString().slice(0, 10);

    try {
        let [rows] = await (await dbConnection).query(`INSERT INTO patient (id, firstname, lastname, healthcardnumber, address, dateadded) VALUES (?, ?, ?, ?, ?, ?); INSERT INTO caregiver_patient (patientid, caregiverid) VALUES (?, ?);`, [
            patientId,
            request.body.firstname,
            request.body.lastname,
            request.body.healthcardnumber,
            request.body.address,
            dateAdded,
            patientId,
            request.body.caregiverid
        ]);

        if (rows.length != 0) {
            return response.status(200).send({
                message: "patient added",
                data: {
                    patientid: patientId,
                    email: request.body.email,
                    firstname: request.body.firstname,
                    lastname: request.body.lastname,
                    caregiverid: request.body.caregiverid
                }
            });
        }

        return response.status(400).send({
            message: "patient not created",
            data: {
                email: request.body.email,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                phonenumber: request.body.phonenumber
            }
        });
    } catch (error) {
        return response.status(400).send({
            message: error.message,
            data: {
                email: request.body.email,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                phonenumber: request.body.phonenumber
            }
        });
    }
}

const updatePatient = async (request, response) => {
    response.send("update existing patient");
}

const updateCaregiver = async (request, response) => {
    response.send("update existing caregiver");
}

const getAllPatientsForCaregiver = async (request, response) => {

    try {
        let [rows] = await (await dbConnection).execute(`SELECT * FROM caregiver_patient INNER JOIN patient ON caregiver_patient.patientid = patient.id WHERE caregiver_patient.caregiverid = '${request.body.caregiverid}' ;`);

        return response.status(200).send({
            message: "successful",
            data: rows
        });
    } catch (error) {
        return response.status(400).send({
            message: error.message,
            data: {
                email: request.body.caregiverid
            }
        });
    }
}

const getPatientForCaregiver = async (request, response) => {
    try {
        let [rows] = await (await dbConnection).execute(`SELECT * FROM patient WHERE patient.id = '${request.body.id}';`);

        return response.status(200).send({
            message: "successful",
            data: rows
        });
    } catch (error) {
        return response.status(400).send({
            message: error.message,
            data: {
                email: request.body.caregiverid
            }
        });
    }
}

module.exports = {
    signin,
    signup,
    createPatient,
    updatePatient,
    updateCaregiver,
    getAllPatientsForCaregiver,
    getPatientForCaregiver
}

