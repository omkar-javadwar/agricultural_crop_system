const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../crop');

chai.should();
chai.use(chaiHttp);

describe('POST /crop', () => {
    it('should post data into database', (done) => {
        crop = {
            "crop_name": "carrot",
            "user_id": "60d15e148a096e443c02520e",
            "crop_tag": "vegetabels",
            "crop_quantity": 100,
            "crop_price": 50,
            "crop_description": "fresh carrots"
        }
        chai.request(app)
            .post('/crop')
            .send(crop)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
});

describe('GET /crop', () => {
    it('should get crop by id', (done) => {
        cid = '60d78856b048274994cc19c8';
        uid = '60d15e148a096e443c02520e';
        chai.request(app)
            .get(`/crop?cid=${cid}&uid=${uid}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('GET /crop', () => {
    it('should get all crops', (done) => {
        uid = '60d15e148a096e443c02520e';
        chai.request(app)
            .get(`/crop?uid=${uid}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
})

describe('PUT /crop/:cid', () => {
    it('should update crop data', (done) => {
        crop = {
            "crop_quantity": 150,
            "crop_price": 25,
            "crop_description": "fresh red color mirch"
        }
        cid = '60d78856b048274994cc19c8';
        chai.request(app)
            .put('/crop/' + cid)
            .send(crop)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('DELETE /crop/:cid', () => {
    it('should delete crop by id', (done) => {
        cid = '60d78856b048274994cc19c8';
        chai.request(app)
            .delete('/crop/' + cid)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})

describe('DELETE /crop', () => {
    it('should delete all crops', (done) => {
        uid = '60d15e148a096e443c02520e'
        chai.request(app)
            .delete(`/crop?uid=${uid}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
})