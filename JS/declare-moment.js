var moment = require('moment');
//create timestamp
var time = moment().valueOf();
//format time
moment(time).format('YYYY-MM-DD HH:mm:ss');
