const chai = require('chai')
const chaiHttp = require('chai-http');
const app = require('../server')
chai.should();
chai.use(chaiHttp);
describe('Favourite API Testing',()=>{
    describe("1- Identify user and return response /api/v1/GetFavourites", () => {
        it("return response based on user email", (done) => {
            const id="rajadhurai322@gmail.com"
            chai.request(app)
            .get("/api/v1/GetFavourites/"+id)
                .end((err, res) => {
                   res.should.have.status(200);
                   res.body[0].source.should.be.a('object');
                   const obj = res.body[0];
                   Object.keys(obj).length.should.be.eql(7);
                    done();
                });
        });
        it("2- Incorrect user email to fetch favorite data", (done) => {
            const id="raja322@gmail.com"
            chai.request(app)
            .get("/api/v1/GetFavourites/"+id)
            .end((err, res) => {
               res.body.length.should.be.eql(0)
              
                done();
            });
        });
    })
    it(" Adding to  favourite data", (done) => {
        let a={"_id": "327a7531-4aab-468e-a780-f78b946a8e9b",
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "email": "rajadhurai322@gmail.com",
        "description": "Delhi's Deputy Chief Minister Manish Sisodia reached a Ghaziabad bank today for the Central Bureau of Investigation's (CBI) search of his locker in connection with its probe into alleged irregularities in the now-withdrawn liquor policy",
        "url": "https://www.ndtv.com/india-news/manish-sisodia-at-ghaziabad-bank-cbi-to-check-locker-in-alleged-delhi-liquor-scam-3298887",
        "urlToImage": "https://c.ndtvimg.com/2022-08/k68hio4_manish-sisodia-at-ghaziabad-bank_270x300_30_August_22.jpg?ver-20220723.02",
        "__v": 0}
        chai.request(app)
        .post("/api/v1/AddToFavourites")
        .send(a)
        .end((err, res) => {
            res.should.have.status(201);
            res.should.have.property('text').eql("Fav added successfully");          
            done();
        });
    });
    it("Delete from favourite data",(done)=>{
        chai.request(app)
        .delete("/api/v1/DeleteFromFavourites")
        .query({
            email: "rajadhurai322@gmail.com",
            q:"327a7531-4aab-468e-a780-f78b946a8e9b"
        })
        .end((err, res) => {           
            res.should.have.status(200);
            res.should.have.property('text').eql("Fav deleted successfully");   
            done();
        });
    })

})