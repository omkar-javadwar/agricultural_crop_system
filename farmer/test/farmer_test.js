const chai = require('chai');
const chaiHttp = require('chai-http');
const farmer = require('../farmer');

chai.should();
chai.use(chaiHttp);

describe('GET /farmer', () => {
    it('should get all farmers', (done) => {
        chai.request(farmer)
            .get(`/farmer`)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                response.body.should.be.a('array');
                done();
            })
    })

    it('should not get all farmers', (done) => {
        chai.request(farmer)
            .get(`/farme`)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(404);
                done();
            })
    })
})

describe('GET /farmer/:id', () => {
    it('should get a farmer', (done) => {
        const id = '60dd272dc98aea102494956b';
        chai.request(farmer)
            .get(`/farmer/${id}`)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not get a farmer', (done) => {
        const id = '60dd272dc98aea102494956a';
        chai.request(farmer)
            .get(`/farmer/${id}`)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })
})

describe('POST /farmer/signup', () => {
    it('should add a farmer', (done) => {
        const farmer_details = {
            "bank_details": {
                "net_banking": {
                    "bank_name": "farmer bank",
                    "account_number": "af00000000",
                    "IFSC_code": "farmer00af"
                },
                "UPI": {
                    "upi_id": "af@farmer"
                }
            },
            "name": "farmer",
            "email": "f@farmer.com",
            "password": "f1234567",
            "contact": "8123456790",
            "address": {
                "street": "f street",
                "city": "f city",
                "state": "f state",
                "zip": 412356
            }
        }
        chai.request(farmer)
            .post(`/farmer/signup`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not add a farmer', (done) => {
        const farmer_details = {
            "bank_details": {
                "net_banking": {
                    "bank_name": "farmer bank",
                    "account_number": "af00000000",
                    "IFSC_code": "farmer00af"
                },
                "UPI": {
                    "upi_id": "af@farmer"
                }
            },
            "name": "farmer",
            "email": "f@farmer.com",
            "password": "f123456",
            "contact": "8123456790",
            "address": {
                "street": "f street",
                "city": "f city",
                "state": "f state",
                "zip": 412356
            }
        }
        chai.request(farmer)
            .post(`/farmer/signup`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })

    it('should not add a farmer', (done) => {
        const farmer_details = {
            "bank_details": {
                "net_banking": {
                    "bank_name": "farmer bank",
                    "account_number": "af00000000",
                    "IFSC_code": "farmer00af"
                },
                "UPI": {
                    "upi_id": "af@farmer"
                }
            },
            "name": "farmer",
            "email": "f@farmer.com",
            "password": "f123456",
            "contact": "8123456790",
            "address": {
                "street": "f street",
                "city": "f city",
                "state": "f state",
                "zip": 412356
            }
        }
        chai.request(farmer)
            .post(`/farmer/signup`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })
})

describe('PUT /farmer/:id', () => {
    it('should update a farmer', (done) => {
        const id = '60df9b2d63361435b46c922d'
        const farmer_details = {
            "name": "farmer",
            "email": "f@farmer.com",
            "password": "f1234567",
            "contact": "8123456790",
            "address": {
                "street": "farmer street",
                "city": "f city",
                "state": "f state",
                "zip": 412356
            }
        }
        chai.request(farmer)
            .put(`/farmer/${id}`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not update a farmer', (done) => {
        const id = '60df94326ceaf33a948396b1'
        const farmer_details = {
            "name": "farmer",
            "email": "f@farmer.com",
            "password": "f1234567",
            "contact": "8123456790",
            "address": {
                "street": "f street",
                "city": "f city",
                "state": "f state",
            }
        }
        chai.request(farmer)
            .put(`/farmer/${id}`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                done();
            })
    })
})

describe('POST /farmer/signin', () => {
    it('should login', (done) => {
        const farmer_details = {
            "email": "f@farmer.com",
            "password": "f1234567"
        }
        chai.request(farmer)
            .post(`/farmer/signin`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                done();
            })
    })

    it('should not login', (done) => {
        const farmer_details = {
            "email": "f@farmer.com",
            "password": "f123456"
        }
        chai.request(farmer)
            .post(`/farmer/signin`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })

    it('should not login', (done) => {
        const farmer_details = {
            "email": "f123@farmer.com",
            "password": "f1234567"
        }
        chai.request(farmer)
            .post(`/farmer/signin`)
            .send(farmer_details)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(400);
                done();
            })
    })
})

describe('DELETE /farmer/:id', () => {
    it('should delete a farmer', (done) => {
        const id = '60df9b2d63361435b46c922d'
        chai.request(farmer)
            .delete(`/farmer/${id}`)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(200);
                done();
            })
    })

    it('should not delete a farmer', (done) => {
        const id = '60df9b2d63361435b46c922d'
        chai.request(farmer)
            .post(`/farmer/${id}`)
            .end((err, response) => {
                console.log(response.text)
                response.should.have.status(404);
                done();
            })
    })
})