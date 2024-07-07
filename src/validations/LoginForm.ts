import validator from "validator";
import ERROR_MESSAGES from "../constants/Messages";



export const validateLoginForm = (loginData: LoginFormValues): LoginFormErrors => {
    const errors: LoginFormErrors = {};

    if (validator.isEmpty(loginData.email)) {
        errors.email = ERROR_MESSAGES.EMAIL_REQUIRED;
    }
    else if (!validator.isEmail(loginData.email)) {
        errors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }

    if (validator.isEmpty(loginData.password)) {
        errors.password = ERROR_MESSAGES.PASSWORD_REQUIRED;
    }

    return errors;
};
