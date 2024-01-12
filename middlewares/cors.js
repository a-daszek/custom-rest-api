function enableCors(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*"); //* generic type of access
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
}

module.exports = enableCors;