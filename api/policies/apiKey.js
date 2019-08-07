module.exports = function (req, res, next) {
    
    apikey = req.headers.apikey == "CoTaoMayMoiVaoDuoc"
    if(apikey){
        next();
    } else {
      return ResponseService.json(403, res, sails.__("ReqApikey"));
    }
  }