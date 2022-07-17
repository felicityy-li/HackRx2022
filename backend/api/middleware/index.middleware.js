const Joi = require("joi");

const validateSignIn = (request, response, next) => {
    let requestBody = request.body;
    console.log(requestBody);

    const signInSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const {value, error} = signInSchema.validate(
        requestBody
    );

    const valid = error == null;

    if (valid) {
        next();
    } else {
        // found some errors
        console.log(error);
        console.log(value);

        let message = error ? error.message : "invalid credentials";
        return response.status(400).json({
            message: message,
            data: requestBody
        });
    }
}


const validateSignUp = (request, response, next) => {
    let requestBody = request.body;

    const signUpSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        phonenumber: Joi.string().required(),
    });

    let { error, value } = signUpSchema.validate(
        requestBody
    );

    // no errors found
    if (!error) {
        next();
    } else {
        // found some errors
        let message = error ? error.message : "invalid parameters";
        return response.status(400).send({
            message: message,
            data: requestBody
        });
    }
}


const validateCreatePatient = (request, response, next) => {
    let requestBody = request.body;

    const signUpSchema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        healthcardnumber: Joi.string().required(),
        caregiverid: Joi.string().email().required(),
        dateofbirth: Joi.date().less('now').required(),
        address: Joi.string().required()
    });

    let { error, value } = signUpSchema.validate(
        requestBody
    );

    // no errors found
    if (!error) {
        next();
    } else {
        // found some errors
        let message = error ? error.message : "invalid parameters";
        return response.status(400).send({
            message: message,
            data: requestBody
        });
    }
}



module.exports = {
    validateSignIn,
    validateSignUp,
    validateCreatePatient
}
