var dateFormat = require('dateformat');
module.exports = {
    json: function (status, res, message, data, meta) {
        var response = {
            response: {
                message: message
            }
        };
        if (typeof data !== 'undefined') {
            response.response.data = data;
        }
        if (typeof meta !== 'undefined') {
            response.response.meta = meta;
        }
        now = (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"));
        console.log(now + url + "/" + "[Respose] Status: "+ status +" Data: "+ Object.keys(data))
        return res.status(status).json(response);
    }
};