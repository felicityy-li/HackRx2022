const signin = async (request, response) => {
    response.send("caregiver signin");
}

const signup = async (request, response) => {
    response.send("caregiver signup");
}

const createPatient = async (request, response) => {
    response.send("create new patient");
}

const updatePatient = async (request, response) => {
    response.send("update existing patient");
}

const updateCaregiver = async (request, response) => {
    response.send("update existing caregiver");
}

const getAllPatientsForCaregiver = async (request, response) => {
    response.send("update existing caregiver");
}

const getPatientForCaregiver = async (request, response) => {
    response.send("update existing caregiver");
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

