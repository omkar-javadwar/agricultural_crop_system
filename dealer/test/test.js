const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../dealer');

chai.should();
chai.use(chaiHttp);

describe('POST /dealer', () => {
    it('should post data into database', (done) => {
        dealer = {
            name: "dealer",
            email: "dealer@mail.com",
            password: "dealer123",
            contact: "7654890321",
            address: {
                street: "dealer street",
                city: "dealer city",
                state: "dealer state",
                zip: 123456
            }
        }
        chai.request(app)
            .post('/dealer')
            .send(dealer)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
});

describe('GET /dealer/:id', () => {
    it('should get dealer by id', (done) => {
        id = '60d2abd004c32441f06fdc5e';
        chai.request(app)
            .get('/dealer/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('PUT /dealer', () => {
    it('should update data', (done) => {
        dealer = {
            name: "dealer",
            email: "dealer@mail.com",
            password: "dealer456",
            contact: "7654890321",
            address: {
                street: "dealer street",
                city: "NED",
                state: "MH",
                zip: 123789
            }
        }
        id = '60d2abd004c32441f06fdc5e';
        chai.request(app)
            .put('/dealer/' + id)
            .send(dealer)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('DELETE /dealer', () => {
    it('should delete admin by id', (done) => {
        id = '60d2abd004c32441f06fdc5e';
        chai.request(app)
            .delete('/dealer/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})