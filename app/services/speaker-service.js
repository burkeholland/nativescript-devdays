var speaker_1 = require('../models/speaker');
var observable_array_1 = require('data/observable-array');
var file_reader_1 = require('../shared/file-reader');
var SpeakerService = (function () {
    function SpeakerService() {
    }
    SpeakerService.GetSpeaker = function (speakerId) {
        return new Promise(function (resolve, reject) {
            var sessions = new observable_array_1.ObservableArray([]);
            try {
                file_reader_1.default.readJSON('data/speakers.json').then(function (content) {
                    content.forEach(function (item) {
                        if (item.id == speakerId) {
                            resolve(new speaker_1.default(item.name, item.id, item.pic, item.desc));
                        }
                    });
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return SpeakerService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpeakerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlYWtlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNwZWFrZXJTZXJ2aWNlIiwiU3BlYWtlclNlcnZpY2UuY29uc3RydWN0b3IiLCJTcGVha2VyU2VydmljZS5HZXRTcGVha2VyIl0sIm1hcHBpbmdzIjoiQUFDQSx3QkFBb0IsbUJBQW1CLENBQUMsQ0FBQTtBQUN4QyxpQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQUN4RCw0QkFBdUIsdUJBQXVCLENBQUMsQ0FBQTtBQUUvQztJQUFBQTtJQXFCQUMsQ0FBQ0E7SUFwQlVELHlCQUFVQSxHQUFqQkEsVUFBa0JBLFNBQWlCQTtRQUUvQkUsTUFBTUEsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBVUEsVUFBQ0EsT0FBT0EsRUFBRUEsTUFBTUE7WUFDeENBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLGtDQUFlQSxDQUFVQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUVoREEsSUFBSUEsQ0FBQ0E7Z0JBRURBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLE9BQXNCQTtvQkFDbEVBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLElBQVNBO3dCQUN0QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3ZCQSxPQUFPQSxDQUFDQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2xFQSxDQUFDQTtvQkFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBLENBQUNBLENBQUNBO1lBQ1BBLENBQ0FBO1lBQUFBLEtBQUtBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUNUQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNoQkEsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDTEYscUJBQUNBO0FBQURBLENBQUNBLEFBckJELElBcUJDO0FBRUQ7a0JBQWUsY0FBYyxDQUFDIn0=