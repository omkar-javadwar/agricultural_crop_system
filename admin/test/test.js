const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../admin');

chai.should();
chai.use(chaiHttp);

describe('POST /admin', () => {
    it('should post data into database', (done) => {
        admin = {
            username: "admin",
            password: "myadmin"
        }
        chai.request(app)
            .post('/admin')
            .send(admin)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
});

describe('GET /admin/:id', () => {
    it('should get admin by id', (done) => {
        id = '60d18d52649c593cc05b073c';
        chai.request(app)
            .get('/admin/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('PUT /admin', () => {
    it('should update data', (done) => {
        admin = {
            password: "admin"
        }
        id = '60d18d52649c593cc05b073c';
        chai.request(app)
            .put('/admin/' + id)
            .send(admin)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })
})
 
describe('DELETE /admin', () => {
    it('should delete admin by id', (done) => {
        id = '60d18d52649c593cc05b073c';
        chai.request(app)
            .delete('/admin/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                done();
            })
    })
})