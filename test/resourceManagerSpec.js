const StrategyManager = Core.StrategyManager;
const Strategy = Core.Strategy;
class BubbaStrategy extends Strategy {
  constructor() {
    super();
  };

  doIt() {
    return "Bubba got a big 'ol truck!";
  };
};

class NooberStrategy extends Strategy {
  constructor() {
    super();
  };

  doIt() {
    return "Heya!";
  };
};

const STRATEGIES = {
  "BUBBA": "Bubba",
  "NOOBER": "Noober"
};

const REGISTRY = {
  "Bubba": BubbaStrategy,
  "Noober": NooberStrategy
};

class MyManager extends StrategyManager {
  constructor(type) {
    super(type, REGISTRY);
  };

  doIt() {
    return this.strategy.doIt();
  };
};

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