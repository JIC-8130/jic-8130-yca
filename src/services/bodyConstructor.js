/**
 * Takes a POJSO and turns it into a correctly formatted body for a
 * application/x-www-form-urlencoded POST request.
 * @param {Object} values The values to be converted into an HTTP request body.
 * @returns The correctly formatted body.
 */
function createBody(values) {
    let formBody = [];
    for (let property in values) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(values[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
}

module.exports = {
    createBody: createBody
}