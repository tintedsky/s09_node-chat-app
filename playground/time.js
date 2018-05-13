// Jan 1st 1970 00:00:00 am
var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// console.log(months[date.getMonth()]);

var date = moment();
console.log(date.subtract(147, 'days').format('dddd DDD MMM DD, Y h:mm a'));
