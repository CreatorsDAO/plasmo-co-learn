pragma solidity ^0.8.9;

contract Note {
    string public name = "NoteBook";
    mapping(string => string) noteMappings;

    function setNote(string memory _key, string memory _note) public {
        noteMappings[_key] = _note;
    }

    function note(string memory _key) public view returns (string memory) {
        return noteMappings[_key];
    }
}
