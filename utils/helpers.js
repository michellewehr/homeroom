module.exports = {
    format_name: name => {
        name = name.trim()
        return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
    }
};
