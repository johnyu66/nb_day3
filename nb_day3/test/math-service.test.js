const math=require("../service/math-service");
const expect=require("chai").expect;
describe("test math-service",()=>{
    it("test add",()=>{
        expect(math.add(1,2)).to.be.equal(3);

    })
    it("test multi",()=>{
        expect(math.multi(8,2)).to.be.equal(16);
    })
})