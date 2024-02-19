pragma solidity ^0.8.9;

contract AppNote {
    string public name = "AppNoteBook";
    mapping(string => AppInfo) public appMappings;

    struct AppInfo {
        string name;
        uint256 idx;
        address creator;
    }

    mapping(bytes32 => string) public appNoteMappings;

    function createApp(string memory _app) public {
        assert(appMappings[_app].idx == 0);
        appMappings[_app] = AppInfo({name: _app, idx: 1, creator: msg.sender});
    }

    function appNoteAddress(string memory _app) public returns (bytes32) {
        AppInfo storage app = appMappings[_app];
        assert(app.idx > 0);
        bytes memory data = abi.encodePacked(app.name, app.idx, app.creator);
        app.idx += 1;
        return sha256(data);
    }

    function addAppComment(string memory _app, string memory _comment) public {
        bytes32 appNoteAddr = appNoteAddress(_app);
        appNoteMappings[appNoteAddr] = _comment;
    }

    mapping(string => string) noteMappings;

    function setNote(string memory _key, string memory _note) public {
        noteMappings[_key] = _note;
    }

    function note(string memory _key) public view returns (string memory) {
        return noteMappings[_key];
    }

    function appNote(
        string memory app,
        uint256 _idx,
        address _creator
    ) public view returns (string memory) {
        bytes memory data = abi.encodePacked(app, _idx, _creator);
        bytes32 appNoteAddr = sha256(data);
        return appNoteMappings[appNoteAddr];
    }
}
