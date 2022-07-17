const express = require("express");
const router = express.Router();
const {
    signin,
    signup,
    getPatientForCaregiver,
    getAllPatientsForCaregiver,
    updateCaregiver,
    updatePatient,
    createPatient } = require("../controllers/index.controller");


const {
    processAndSendAlerts
} = require("../controllers/notification.controller");

const {
    validateSignIn,
    validateSignUp,
    validateCreatePatient
} = require('../middleware/index.middleware');

/**
 * caregiver signup
 */
router.route('/signup').post(validateSignUp, signup);

/**
 * caregiver signin
 */
router.route('/signin').post(validateSignIn, signin);

/**
 * Update caregiver's own profile
 */
router.route('/caregiver').put(updateCaregiver);

/**
 * get all patients for a given caregiver
 */
router.route('/caregiver/patient/all').get(getAllPatientsForCaregiver);

/**
 * Get patient by id
 */
router.route('/caregiver/patient').get(getPatientForCaregiver);

/**
 * Create a patient profile
 */
router.route('/patient').post(validateCreatePatient, createPatient);

/**
 * Update a patient profile
 */
router.route('/patient').put(updatePatient);

/**
 * sends alerts to the caregivers based on their patients qualification
 */
router.route('/alert').post(processAndSendAlerts);

module.exports = router;