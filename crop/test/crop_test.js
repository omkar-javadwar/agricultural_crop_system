const chai = require('chai');
const chaiHttp = require('chai-http');
const crop = require('../crop');
const expect = chai.expect;

chai.should();
chai.use(chaiHttp);

describe('GET /crop/all', () => {
    it('should get all crops', (done) => {
        chai.request(crop)
            .get(`/crop/all`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                done();
            })
    })
})

describe('GET /crop', () => {
    it('should get all crops by uid', (done) => {
        uid = '60dd272dc98aea102494956b';
        chai.request(crop)
            .get(`/crop?uid=${uid}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should get a crop by uid and cid', (done) => {
        uid = '60dd272dc98aea102494956b';
        cid = '60ddf342c946523ea86d7050';
        chai.request(crop)
            .get(`/crop?cid=${cid}&uid=${uid}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should get all crops by uid', (done) => {
        uid = '60d15e148a096e443c02520e';
        chai.request(crop)
            .get(`/crop?uid=${uid}`)
            .end((err, response) => {
                expect(response).to.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not get all crops by uid and cid', (done) => {
        uid = '60dd272dc98aea102494956b';
        cid = '60ddf342c946523ea86d7050';
        chai.request(crop)
            .get(`/crop?cid=${cid}&uid=${uid}`)
            .end((err, response) => {
                expect(response).to.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('POST /crop', () => {
    it('should add crop', (done) => {
        crop_details = {
            "crop_name": "carrot",
            "farmer_id": "60d15e148a096e443c02520e",
            "crop_tag": "vegetables",
            "crop_quantity": 100,
            "crop_price": 50,
            "crop_description": "fresh carrots"
        }
        chai.request(crop)
            .post('/crop')
            .send(crop_details)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not add crop', (done) => {
        crop_details = {
            "crop_name": "carrot",
            "farmer_id": "60d15e148a096e443c02520e",
            "crop_tag": "vegetables",
            "crop_quantity": 100,
            "crop_price": 50,
            "crop_description": "fresh"
        }
        chai.request(crop)
            .post('/crop')
            .send(crop_details)
            .end((err, response) => {
                response.should.have.status(400);
                done();
            })
    })
});

describe('PUT /crop/:cid', () => {
    it('should update crop data', (done) => {
        const crop_details = {
            "crop_quantity": 10,
            "crop_price": 25,
            "crop_description": "fresh carrots"
        }
        const cid = '60df176cdf6c98343470cca8';
        chai.request(crop)
            .put(`/crop/${cid}`)
            .send(crop_details)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not update crop data', (done) => {
        const crop_details = {
            "crop_quantity": 150,
            "crop_price": 25,
            "crop_description": "fresh"
        }
        const cid = '60df176cdf6c98343470cca8';
        chai.request(crop)
            .put(`/crop/${cid}`)
            .send(crop_details)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})

describe('DELETE /crop/:cid', () => {
    it('should delete crop by cid', (done) => {
        cid = '60df209132a20b26dc7d987b';
        chai.request(crop)
            .delete(`/crop/${cid}`)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })

    it('it should not delete crop by cid', (done) => {
        cid = '60df209132a20b26dc7d987b'
        chai.request(crop)
            .delete(`/crop/${cid}`)
            .end((err, response) => {
                response.should.have.status(400);
                done();
            })
    })
})

describe('DELETE /crop?uid', () => {
    it('should delete all crops by uid', (done) => {
        uid = '60d15e148a096e443c02520e'
        chai.request(crop)
            .delete(`/crop?uid=${uid}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })

    it('it should not delete all crops by uid', (done) => {
        uid = '60d15e148a096e443c02520e'
        chai.request(crop)
            .delete(`/crop?uid=${uid}`)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})