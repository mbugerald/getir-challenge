const request = require('supertest');
const app = require("../app");

// Run test on the route expecting status code
//  200 - as success.
test('Fetching records', () => {
    request(app).post('/records')
        .send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        })
        .expect("Content-Type", "json")
        .expect(200)
})
