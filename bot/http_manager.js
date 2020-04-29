const request = require('request')

module.exports.get = async function get(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, res, body) => {

            if (err) {
                reject(err)
            } else {
                resolve(body)
            }

        })
    })
}

