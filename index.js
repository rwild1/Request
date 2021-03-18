/* Create an Application which displays the Employee List to the user */
const request = require('request');

const url = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees';

request(url, {json:true}, (err, res, body) => {
    if (err) {
        console.error(err);
    } else if (res.body.err) {
        console.log('Invalid URL');
    } else if (res.body.beginTime ==0) {
        console.log('Undefined');
    } else {
        console.log(body);
    }
});