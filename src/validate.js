
const validateEmail = (value, message = 'Vui lòng nhập đúng định dạng email') => {
    let errorMessage = '';
    if (! /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(value)) {
        errorMessage = message;
    }
    return errorMessage
}

export  validateEmail