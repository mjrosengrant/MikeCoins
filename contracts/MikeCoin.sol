/* MikeCoins

Implements StandardToken Interface

.*/

import "./ERC20/HumanStandardToken.sol";

pragma solidity ^0.4.8;

contract MikeCoin is HumanStandardToken {
    /*
    Available Functions
    transfer(address _to, uint256 _value)
    transferFrom(address _from, address _to, uint256 _value)
    balanceOf(address _owner)
    approve(address _spender, uint256 _value)
    allowance(address _owner, address _spender)
    */

    string public test_string;
    
    function MikeCoin(
        uint256 _initialAmount,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol
        ) {
        test_string="Hey Mike!";
        balances[msg.sender] = _initialAmount;               // Give the creator all initial tokens
        totalSupply = _initialAmount;                        // Update total supply
        name = _tokenName;                                   // Set the name for display purposes
        decimals = _decimalUnits;                            // Amount of decimals for display purposes
        symbol = _tokenSymbol;                               // Set the symbol for display purposes
    }

}
