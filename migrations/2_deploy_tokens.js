const HumanStandardToken = artifacts.require(`./ERC20/HumanStandardToken.sol`)

module.exports = (deployer) => {
  deployer.deploy(HumanStandardToken)
}
