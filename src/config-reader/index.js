
/**
 * A class to resolve the configuration settings for the given
 * environment.
 */
function ConfigReader(env, configRoot) {
  this.env = env;
  this.configRoot = configRoot;
}

ConfigReader.prototype.getConfig = function(callback) {
  return callback();
};

module.exports = ConfigReader;
