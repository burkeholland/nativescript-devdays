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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNlc3Npb25TZXJ2aWNlIiwiU2Vzc2lvblNlcnZpY2UuY29uc3RydWN0b3IiLCJTZXNzaW9uU2VydmljZS5HZXRTZXNzaW9ucyJdLCJtYXBwaW5ncyI6IkFBQ0Esd0JBQW9CLG1CQUFtQixDQUFDLENBQUE7QUFDeEMsaUNBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFDeEQsNEJBQXVCLHVCQUF1QixDQUFDLENBQUE7QUFDL0MsZ0NBQTJCLDZCQUE2QixDQUFDLENBQUE7QUFFekQ7SUFBQUE7SUF1QkFDLENBQUNBO0lBdEJVRCwwQkFBV0EsR0FBbEJBO1FBRUlFLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQTJCQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUN6REEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsa0NBQWVBLENBQVVBLEVBQUVBLENBQUNBLENBQUNBO1lBRWhEQSxJQUFJQSxDQUFDQTtnQkFFREEscUJBQVVBLENBQUNBLFFBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsT0FBc0JBO29CQUNsRUEsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBU0E7d0JBQ3RCQSxJQUFJQSxPQUFPQSxHQUFHQSx5QkFBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsT0FBT0E7NEJBQ2pFQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzNGQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDUEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FDQUE7WUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2hCQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNMRixxQkFBQ0E7QUFBREEsQ0FBQ0EsQUF2QkQsSUF1QkM7QUFFRDtrQkFBZSxjQUFjLENBQUMifQ==