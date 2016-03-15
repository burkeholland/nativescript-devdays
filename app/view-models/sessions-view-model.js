var observable_1 = require('data/observable');
var observable_array_1 = require('data/observable-array');
var session_service_1 = require('../services/session-service');
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        var _this = this;
        _super.call(this);
        this.noResults = false;
        // get the list of sessions
        session_service_1.default.GetSessions().then(function (sessions) {
            _this._sessions = sessions;
            _this.sessions = sessions;
        });
    }
    ViewModel.prototype.filter = function (term) {
        if (term.trim().length > 0) {
            var filtered = this._sessions.filter(function (item) {
                return (item.name.indexOf(term.trim()) > 0 || item.description.indexOf(term.trim()) > 0);
            });
            this.set("sessions", new observable_array_1.ObservableArray(filtered));
            console.log(filtered.length);
            this.set('noResults', filtered.length == 0);
        }
        else {
            this.clearFilter();
        }
    };
    ViewModel.prototype.clearFilter = function () {
        this.set('sessions', this._sessions);
    };
    return ViewModel;
})(observable_1.Observable);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewModel;
//# sourceMappingURL=sessions-view-model.js.map