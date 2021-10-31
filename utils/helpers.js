module.exports = {
    format_name: name => {
        name = name.trim()
        return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
    }
}

module.exports = {
    validatePasswordConstraints: password => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return password.match(regex) ? true : false;
    }
}