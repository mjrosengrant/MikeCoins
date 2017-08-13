const HumanStandardTokenFactory =
  artifacts.require(`./ERC20/HumanStandardTokenFactory.sol`)

module.exports = (deployer) => {
  deployer.deploy(HumanStandardTokenFactory)
}
