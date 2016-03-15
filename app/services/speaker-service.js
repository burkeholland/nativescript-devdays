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
//# sourceMappingURL=speaker-service.js.map