const BaseCoin =
  artifacts.require(`./BaseCoin.sol`)

module.exports = (deployer) => {
  deployer.deploy(BaseCoin)
}