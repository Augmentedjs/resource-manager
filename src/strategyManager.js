

class StrategyManager {
  constructor(type, register) {
    this.registry = (register) ? register : {};
    this.strategy = this.get(type);
  };

  register(type, clazz) {
    if (type && clazz) {
      this.registry[type] = clazz;
    }
  };

  get(type = "") {
    const clazz = this.registry[type];
    if (clazz) {
      return new clazz();
    }
    return null;
  };
};

module.exports = StrategyManager;