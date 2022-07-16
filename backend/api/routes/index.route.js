const express = require("express");
const router = express.Router();
const {
    signin,
    signup,
    getPatientForCaregiver,
    getAllPatientsForCaregiver,
    updateCaregiver,
    updatePatient,
    createPatient, } = require("../controllers/index.route");

/**
 * caregiver signup
 */
router.route('/signup').post(signup);

/**
 * caregiver signin
 */
router.route('/signin').post(signin);

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
router.route('/patient').post(createPatient);

/**
 * Update a patient profile
 */
router.route('/patient').put(updatePatient);


module.exports = router;