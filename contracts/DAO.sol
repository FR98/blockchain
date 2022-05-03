// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DAO {

    event Received(address, uint);
    
    struct post {
        address postOwner;
        uint necessary_funds;
        int40 votes;
        uint finalization_time;
    }

    post current_post;

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function buy_share() public payable {
        emit Received(msg.sender, msg.value);
        // TODO: send share to user 
    }

    function suggest_post(uint necessary_funds, string title) public {
        current_post.postOwner = msg.sender;
        current_post.necessary_funds = necessary_funds;
        current_post.title = title;
    }

    function end_current_post() public {

    }

}