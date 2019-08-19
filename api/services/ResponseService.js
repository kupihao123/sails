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
        if(Array.isArray(data)==true) 
            {console.log(now + url + " " + "[Response] Status: "+ status +" Data: "+ Object.keys(data[0]))}
        else if (data) 
            console.log(now + url + " " + "[Response] Status: "+ status +" Data: "+ Object.keys(data))
        else 
            {console.log(now + url + " " + "[Response] Status: "+ status +" Data: ")}
        return res.status(status).json(response);
    }
};