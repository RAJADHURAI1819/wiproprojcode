const chai = require('chai')
const chaiHttp = require('chai-http');
const app = require('../server')
chai.should();
chai.use(chaiHttp);
describe('3rd partyAPI Testing',()=>{
    it("return news from 3rd party api", (done) => {
        chai.request(app)
        .get("/api/v1/news")
        .query({
            q:"general"
        })
            .end((err, res) => {
               res.should.have.status(200);
               res.body.length.should.be.eql(20)
                done();
            });
    });
    it("return search news from 3rd party api", (done) => {
        chai.request(app)
        .get("/api/v1/news/search")
        .query({
            q:"Asia cup"
        })
            .end((err, res) => {
               res.should.have.status(200);
               res.body.length.should.be.eql(100)
                done();
            });
    });
})