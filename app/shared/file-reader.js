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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1yZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlLXJlYWRlci50cyJdLCJuYW1lcyI6WyJGaWxlUmVhZGVyIiwiRmlsZVJlYWRlci5jb25zdHJ1Y3RvciIsIkZpbGVSZWFkZXIucmVhZEpTT04iXSwibWFwcGluZ3MiOiJBQUFBLElBQVksRUFBRSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBRWxDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7QUFFN0M7SUFBQUE7SUFpQkFDLENBQUNBO0lBaEJVRCxtQkFBUUEsR0FBZkEsVUFBZ0JBLElBQVlBO1FBQ3hCRSxJQUFJQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN2Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBU0EsVUFBQ0EsT0FBT0EsRUFBRUEsTUFBTUE7WUFDdkNBLElBQUlBLENBQUNBO2dCQUVEQSxRQUFRQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxPQUFlQTtvQkFDckNBLElBQUlBLElBQUlBLEdBQWtCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDOUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFUEEsQ0FDQUE7WUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2hCQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNMRixpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFqQkQsSUFpQkM7QUFFRDtrQkFBZSxVQUFVLENBQUMifQ==