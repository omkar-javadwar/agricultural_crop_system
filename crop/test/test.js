const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../crop');

chai.should();
chai.use(chaiHttp);

describe('POST /crop', () => {
    it('should post data into database', (done) => {
        crop = {
            "crop_name": "carrot",
            "crop_tag": "vegetabels",
            "crop_quantity": 100,
            "crop_price": 50,
            "crop_description": "fresh red color carrot"
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

describe('GET /crop/:id', () => {
    it('should get crop by id', (done) => {
        id = '60d22124b2d8672c78112052';
        chai.request(app)
            .get('/crop/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('GET /crop', () => {
    it('should get all crops', (done) => {
        chai.request(app)
            .get('/crop')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
})

describe('PUT /crop/:id', () => {
    it('should update crop data', (done) => {
        crop = {
            "crop_name": "mirchi",
                "crop_tag": "vegetabels",
                "crop_quantity": 150,
                "crop_price": 25,
                "crop_description": "fresh red color mirch"
        }
        id = '60d22124b2d8672c78112052';
        chai.request(app)
            .put('/crop/' + id)
            .send(crop)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('DELETE /crop/:id', () => {
    it('should delete crop by id', (done) => {
        id = '60d21b40db2bdf3a18a647e5';
        chai.request(app)
            .delete('/crop/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})

describe('DELETE /crop', () => {
    it('should delete all crops', (done) => {
        chai.request(app)
            .delete('/crop')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
})