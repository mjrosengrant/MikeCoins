const Migrations = artifacts.require(`./ERC20/Migrations.sol`)

module.exports = (deployer) => {
  deployer.deploy(Migrations)
}
