const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../admin');

chai.should();
chai.use(chaiHttp);

describe('POST /admin', () => {
    it('should add user', (done) => {
        admin = {
            username: "myadmin",
            password: "myadmin"
        }
        chai.request(app)
            .post('/admin/signup')
            .send(admin)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not add user', (done) => {
        admin = {
            username: "myadmin",
            password: "myadmin"
        }
        chai.request(app)
            .post('/admin/signup')
            .send(admin)
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('object');
                done();
            })
    })
});

describe('GET /admin/:id', () => {
    it('should get admin by id', (done) => {
        id = '60ddac5a58f7a823f0c8e723';
        chai.request(app)
            .get('/admin/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not get admin by id', (done) => {
        id = '60dda9e7ee1c4f18a86bae76';
        chai.request(app)
            .get('/admin/' + id)
            .end((err, response) => {
                response.should.have.status(400);
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
        id = '60ddac5a58f7a823f0c8e723';
        chai.request(app)
            .put('/admin/' + id)
            .send(admin)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not update data', (done) => {
        admin = {
            password: "ad"
        }
        id = '60dda9e7ee1c4f18a86bae76';
        chai.request(app)
            .put('/admin/' + id)
            .send(admin)
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('object');
                done();
            })
    })
})

describe('DELETE /admin', () => {
    it('should delete admin by id', (done) => {
        id = '60ddac5a58f7a823f0c8e723';
        chai.request(app)
            .delete('/admin/' + id)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            })
    })

    it('should not delete admin by id', (done) => {
        id = '60dda9e7ee1c4f18a86bae76';
        chai.request(app)
            .delete('/admin/' + id)
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('object');
                done();
            })
    })
})