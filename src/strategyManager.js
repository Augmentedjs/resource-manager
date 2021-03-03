const Strategy = require("./strategy.js");
/**
 * The Strategy Manager class
 */
class StrategyManager {
  constructor(type, register) {
    this._registry = (register) ? register : {};
    /**
     * @name strategy
     * @property {Strategy} The strategy Class
     */
    this._strategy = this.get(type);
  };

  get strategy() {
    return this._strategy;
  };

  /**
   * Regester method for creating a registy
   * @param {string} type Type of strategy 
   * @param {*} clazz 
   */
  register(type, clazz) {
    if (type && clazz) {
      this._registry[type] = clazz;
    }
  };

  /**
   * Get a strategy class of type
   * @param {string} type The key for a strategy type 
   * @param  {...any} args Args to p[ass to a strategy class
   * @returns {Strategy} Returns subclass strategy type
   */
  get(type, ...args) {
    let ret = null;
    if (type) {
      const Clazz = this._registry[type];
      if (Clazz) {
        console.debug("Class", Clazz, type);
        if (Clazz.prototype instanceof Strategy) {
          ret = new Clazz(...args);
        }
      }
    }
    return ret;
  };
};

module.exports = StrategyManager;