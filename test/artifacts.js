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
    if (this.strategy) {
      return this.strategy.doIt();
    } else {
      console.warn("No strategy class");
    }
    return null;
  };
};

module.exports = { MyManager, STRATEGIES };