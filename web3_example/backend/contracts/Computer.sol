// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// let computer = await Computer.deployed()
contract Computer {

    struct computer {
        bool available;
        address occupant;
    }

    mapping (uint => computer) computers;
    
    constructor() {
        computers[1] = computer({available: true, occupant: address(0)});
        computers[2] = computer({available: true, occupant: address(0)});
        computers[3] = computer({available: true, occupant: address(0)});
        computers[4] = computer({available: true, occupant: address(0)});
        computers[5] = computer({available: true, occupant: address(0)});
        computers[6] = computer({available: true, occupant: address(0)});
        computers[7] = computer({available: true, occupant: address(0)});
        computers[8] = computer({available: true, occupant: address(0)});
        computers[9] = computer({available: true, occupant: address(0)});
        computers[10] = computer({available: true, occupant: address(0)});
    }

    function use_computer(uint index) public {
        if (index > 0 && index <= 10) {
            if (computers[index].available) {
                computers[index].available = false;
                computers[index].occupant = msg.sender;
            }
        }
    }

    function left_computer(uint index) public {
        if (index > 0 && index <= 10) {
            if (!computers[index].available && computers[index].occupant == msg.sender) {
                computers[index].available = true;
                computers[index].occupant = address(0);
            }
        }
    }

    function retrieve_computers() public view returns (array(uint) available_computers) {
        return computers[index].available;
    }

}