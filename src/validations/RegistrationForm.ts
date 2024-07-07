import validator from "validator";
import ERROR_MESSAGES from "../constants/Messages";

export const validateRegistrationForm = (registrationData: RegisterFormValues): RegistrationFormErrors => {
    const errors: RegistrationFormErrors = {};

    if (validator.isEmpty(registrationData.name)) {
        errors.name = ERROR_MESSAGES.NAME_REQUIRED;
    }

    if (validator.isEmpty(registrationData.email)) {
        errors.email = ERROR_MESSAGES.EMAIL_REQUIRED;
    }
    else if (!validator.isEmail(registrationData.email)) {
        errors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }
    
    if (validator.isEmpty(registrationData.password)) {
        errors.password = ERROR_MESSAGES.PASSWORD_REQUIRED;
    }

    return errors;
};
