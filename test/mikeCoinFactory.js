var MikeCoinFactory = artifacts.require('./MikeCoinFactory.sol')

contract('MikeCoinFactory', function (accounts) {
  it('Verify a Human Standard Token once deployed using both verification functions.', function () {
    var factory = null
    var newTokenAddr = null
    return MikeCoinFactory.new()
    .then(function (ctr) {
      factory = ctr
      return factory.createMikeCoin.call(100000, 'MikeCoins', 2, 'MC', {from: accounts[0]})
    }).then(function (_newTokenAddr) {
      newTokenAddr = _newTokenAddr
      return factory.createMikeCoin(100000, 'MikeCoins', 2, 'MC', {from: accounts[0]})
    }).then(function () {
      return factory.verifyMikeCoin.call(newTokenAddr, {from: accounts[0]})
    }).then(function (res) {
      assert(res, 'Could not verify the token.')
    }).catch((err) => { throw new Error(err) })
  })
})

