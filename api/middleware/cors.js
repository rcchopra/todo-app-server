module.exports = function (req, res, next) {
    res.set('Access-Control-Allow-Origin', 'https://todo-app-rc.netlify.app');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Allow preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    return next();
};