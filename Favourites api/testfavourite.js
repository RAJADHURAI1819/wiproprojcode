const chai = require('chai')
const chaiHttp = require('chai-http');
const app = require('./server')
chai.should();
chai.use(chaiHttp);
describe('Favourite API Testing',()=>{
    describe("1- Identify user and return response /api/favorite/getFavorite", () => {
        it("return response based on user id", (done) => {
            chai.request(app)
            const id="9862d61f-9bc3-4e1e-8bcd-4e8ddcbf8cd0"
                .get("/api/v1/GetFavourites/"+id)
               
                .end((err, res) => {
                   res.should.have.status(200);
                   res.body.should.be.a('object');
                   const obj = res.body;
                   Object.keys(obj).length.should.be.eql(7);
                    done();
                });
        });
    })
})