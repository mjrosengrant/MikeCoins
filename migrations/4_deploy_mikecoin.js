const MikeCoin =
  artifacts.require(`./MikeCoin.sol`)

module.exports = (deployer) => {
  deployer.deploy(MikeCoin)
}