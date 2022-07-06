pragma solidity 0.8.4;

import "hardhat/console.sol";

interface GateKeeperTwo {
    function enter(bytes8 _gateKey) external returns (bool);
}

contract GateKeeperSolution {
    GateKeeperTwo private gk;
    address private gkAddress;

    constructor(address _gkAddress) {
        gkAddress = _gkAddress;
        gk = GateKeeperTwo(_gkAddress);
        console.log(_gkAddress);
        console.log(_gkAddress);
    }

    function callEnter(bytes8 _gateKey) external {
        address(gkAddress).delegatecall(
            abi.encodeWithSignature("enter(bytes8)", _gateKey)
        );
        // gk.enter(_gateKey);
    }
}
