var observable_1 = require('data/observable');
var session_service_1 = require('../services/session-service');
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        var _this = this;
        _super.call(this);
        // get the list of sessions
        session_service_1.default.GetSessions().then(function (sessions) {
            _this.sessions = sessions;
        });
    }
    return ViewModel;
})(observable_1.Observable);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbnMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb25zLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiVmlld01vZGVsIiwiVmlld01vZGVsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSwyQkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUd4RCxnQ0FBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQUF3QkEsNkJBQVVBO0lBRzlCQTtRQUhKQyxpQkFZQ0E7UUFST0EsaUJBQU9BLENBQUNBO1FBRVJBLDJCQUEyQkE7UUFDM0JBLHlCQUFjQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxRQUFRQTtZQUN2Q0EsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDN0JBLENBQUNBLENBQUNBLENBQUNBO0lBRVBBLENBQUNBO0lBQ0xELGdCQUFDQTtBQUFEQSxDQUFDQSxBQVpELEVBQXdCLHVCQUFVLEVBWWpDO0FBRUQ7a0JBQWUsU0FBUyxDQUFDIn0=