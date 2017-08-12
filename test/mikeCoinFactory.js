// var mikeCoinFactory = artifacts.require('./MikeCoinFactory.sol')

// contract('mikeCoinFactory', function (accounts) {
//   it('Verify a Human Standard Token once deployed using both verification functions.', function () {
//     var factory = null
//     var newTokenAddr = null
//     return mikeCoinFactory.new()
//     .then(function (ctr) {
//       factory = ctr
//       return factory.createmikeCoin.call(100000, 'Simon Bucks', 2, 'SBX', {from: accounts[0]})
//     }).then(function (_newTokenAddr) {
//       newTokenAddr = _newTokenAddr
//       return factory.createmikeCoin(100000, 'Simon Bucks', 2, 'SBX', {from: accounts[0]})
//     }).then(function () {
//       return factory.verifymikeCoin.call(newTokenAddr, {from: accounts[0]})
//     }).then(function (res) {
//       assert(res, 'Could not verify the token.')
//     }).catch((err) => { throw new Error(err) })
//   })
// })
