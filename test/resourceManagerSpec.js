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

const STRATEGIES = {
  "BUBBA": "Bubba"
};

const REGISTRY = {
  "Bubba": BubbaStrategy
};

class MyManager extends StrategyManager {
  constructor() {
    super(STRATEGIES.BUBBA, REGISTRY);
  };

  doIt() {
    return this.strategy.doIt();
  };
};

describe("Given an Resource Manager", () => {
  let s;
  beforeEach((done) => {
    s = new MyManager();
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
    expect(ret).to.not.be.undefined;

  });
});