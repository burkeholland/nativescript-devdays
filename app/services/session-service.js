var session_1 = require('../models/session');
var observable_array_1 = require('data/observable-array');
var file_reader_1 = require('../shared/file-reader');
var speaker_service_1 = require('../services/speaker-service');
var SessionService = (function () {
    function SessionService() {
    }
    SessionService.GetSessions = function () {
        return new Promise(function (resolve, reject) {
            var sessions = new observable_array_1.ObservableArray([]);
            try {
                file_reader_1.default.readJSON('data/sessions.json').then(function (content) {
                    content.forEach(function (item) {
                        var speaker = speaker_service_1.default.GetSpeaker(item.speakerId).then(function (speaker) {
                            sessions.push(new session_1.default(item.sessionName, item.sessionDesc, item.location, speaker));
                        });
                    });
                    resolve(sessions);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return SessionService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SessionService;
//# sourceMappingURL=session-service.js.map