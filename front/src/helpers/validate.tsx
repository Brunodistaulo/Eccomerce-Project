import { loginProp, loginPropError, registerProp, registerPropError } from "@/types/types";

export function validateLogin(values: loginProp) {
    let errors: loginPropError = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    } else if (!values.password) {
        errors.password = "Password is required";
    }
    return errors
}

export function validateRegister(values: registerProp) {
    let errors: registerPropError = {};
    
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    } else if (!values.name) {
        errors.name = "Name is required";
    } else if (!values.password) {
        errors.password = "Password is required";
    } else if (!values.address) {
        errors.address = "Address is required";
    } else if (!values.phone) {
        errors.phone = "Phone is required";

    }
    return errors
}