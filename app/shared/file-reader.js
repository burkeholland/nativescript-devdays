var fs = require('file-system');
var documents = fs.knownFolders.currentApp();
var FileReader = (function () {
    function FileReader() {
    }
    FileReader.readJSON = function (path) {
        var jsonFile = documents.getFile(path);
        return new Promise(function (resolve, reject) {
            try {
                jsonFile.readText().then(function (content) {
                    var data = JSON.parse(content);
                    resolve(data);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return FileReader;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileReader;
//# sourceMappingURL=file-reader.js.map