const { MyManager, STRATEGIES } = require("./artifacts.js");

describe("Given an Resource Manager", () => {
  let s;

  describe("can create a Bubba strategy", () => {
    beforeEach((done) => {
      s = new MyManager(STRATEGIES.BUBBA);
      done();
    });

    afterEach((done) => {
      s = null;
      done();
    });

    it("can init the manager", () => {
      expect(s).to.not.be.undefined;
    });

    it("can call the strategy method", () => {
      const ret = s.doIt();
      expect(ret).to.equal("Bubba got a big 'ol truck!");
    });
  });

  describe("can create a Noober strategy", () => {
    beforeEach((done) => {
      s = new MyManager(STRATEGIES.NOOBER);
      done();
    });

    afterEach((done) => {
      s = null;
      done();
    });

    it("can init the manager", () => {
      expect(s).to.not.be.undefined;
    });

    it("can call the strategy method", () => {
      const ret = s.doIt();
      expect(ret).to.equal("Heya!");
    });
  });
});