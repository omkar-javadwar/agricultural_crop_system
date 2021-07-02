const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../dealer');

chai.should();
chai.use(chaiHttp);

describe('GET /dealer', () => {
    it('should get all dealers', (done) => {
        chai.request(app)
            .get('/dealer')
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                response.body.should.be.a('array');
                done();
            })
    })
})

describe('POST /dealer', () => {
    // it('should add dealer', (done) => {
    //     const dealer = {
    //         name: "dealer",
    //         email: "dealer@mail.com",
    //         password: "dealer123",
    //         contact: "8123456790",
    //         address: {
    //             street: "dealer street",
    //             city: "dealer city",
    //             state: "dealer state",
    //             zip: 567890
    //         }
    //     }
    //     chai.request(app)
    //         .post('/dealer/signup')
    //         .send(dealer)
    //         .end((err, response) => {
    //             console.log(response.text)
    //             response.should.have.status(200);
    //             response.body.should.be.a('object');
    //             done();
    //         })
    // })

    it('should not add dealer', (done) => {
        const dealer = {
            name: "dealer",
            email: "dmail.com",
            password: "dealer123",
            contact: "765489032",
            address: {
                street: "dealer street",
                city: "dealer city",
                state: "dealer state",
                zip: 123456
            }
        }
        chai.request(app)
            .post('/dealer/signup')
            .send(dealer)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })

    it('should not add dealer', (done) => {
        const dealer = {
            name: "dealer",
            email: "dealer@mail.com",
            password: "dealer123",
            contact: "7654890321",
            address: {
                city: "dealer city",
                state: "dealer state",
                zip: 123456
            }
        }
        chai.request(app)
            .post('/dealer/signup')
            .send(dealer)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })
});

describe('GET /dealer/:id', () => {
    it('should get dealer by id', (done) => {
        id = '60dfa1193b94db433824fdb5';
        chai.request(app)
            .get('/dealer/' + id)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not get dealer by id', (done) => {
        id = '60df27e842e587283464ceb0';
        chai.request(app)
            .get('/dealer/' + id)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })
})

describe('POST /dealer/signin', () => {
    it('should login', (done) => {
        const dealer = {
            email: "dealer@mail.com",
            password: "dealer123"
        }
        chai.request(app)
            .post('/dealer/signin/')
            .send(dealer)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                done();
            })
    })

    it('should not login', (done) => {
        const dealer = {
            email: "deal@mail.com",
            password: "dealer123"
        }
        chai.request(app)
            .post('/dealer/signin/')
            .send(dealer)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })

    it('should not login', (done) => {
        const dealer = {
            email: "dealer@mail.com",
            password: "dealer12"
        }
        chai.request(app)
            .post('/dealer/signin/')
            .send(dealer)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
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
        id = '60dfa1193b94db433824fdb5';
        chai.request(app)
            .put('/dealer/' + id)
            .send(dealer)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                done();
            })
    })

    it('should not update data', (done) => {
        dealer = {
            name: "dealer",
            email: "dealer@mail.com",
            password: "dealer456",
            contact: "765489032",
            address: {
                street: "dealer street",
                city: "NED",
                state: "MH",
                zip: 123789
            }
        }
        id = '60df9d8ede83983ebc31323b';
        chai.request(app)
            .put('/dealer/' + id)
            .send(dealer)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                done();
            })
    })
})

describe('DELETE /dealer', () => {
    it('should delete dealer by id', (done) => {
        id = '60dfa1193b94db433824fdb5';
        chai.request(app)
            .delete('/dealer/' + id)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                done();
            })
    })

    it('should not delete dealer by id', (done) => {
        id = '60dfa1193b94db433824fdb5';
        chai.request(app)
            .delete('/dealer/' + id)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })
})