var owner = "Shaon Ahmed"
var caption = "☆《SEX VIDEO》☆"
exports.name = '/video/sex2';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/sex2.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();
        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            shaon: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}