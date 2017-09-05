pragma solidity ^0.4.8;

contract BaseCoin {

	address public owner;
	mapping (address => uint) balances;

	function BaseCoin(){
		owner = msg.sender;
		balances[owner] = 100;
	}

	function getBalance(address _user) constant returns (uint _balance){
		return balances[_user];
	}

	function transfer(address _to, uint _value) returns (bool success)  {
		if(balances[msg.sender] < _value) {
			return false;
		}
		balances[msg.sender] -= _value;
		balances[_to] += _value;
	}
}
