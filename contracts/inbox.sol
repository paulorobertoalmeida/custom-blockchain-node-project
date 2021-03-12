pragma solidity ^0.4.17;

contract Inbox {
    string public messege;
    
    function Inbox(string inicialMessage) public {
        messege = inicialMessage;
    }
    function setMessege(string newMessage) public {
        messege = newMessage;
    }
}