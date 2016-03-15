var observable_1 = require('data/observable');
var Session = (function (_super) {
    __extends(Session, _super);
    function Session(name, description, location, speaker) {
        _super.call(this);
        this.name = name;
        this.speaker = speaker;
        this.description = description;
        this.location = location;
        this.speaker = speaker;
    }
    return Session;
})(observable_1.Observable);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Session;
//# sourceMappingURL=session.js.map