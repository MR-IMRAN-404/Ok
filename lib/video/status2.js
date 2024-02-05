exports.name = '/video/status2';
exports.index = async(req, res, next) => {
const resp = require('./data/status2.json');
const length = resp.length
return res.json({ 
  author: 'API//SHAON',
  url: resp[Math.floor(Math.random() * length)],
 })
}