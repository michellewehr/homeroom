formatName = name => {
    name = name.trim()
    return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
};


validatePasswordConstraints = password => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
};

module.exports = {
    validatePassword: validatePasswordConstraints,
    nameFormatting: formatName
};