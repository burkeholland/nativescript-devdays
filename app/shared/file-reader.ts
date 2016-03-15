import * as fs from 'file-system';

var documents = fs.knownFolders.currentApp();

class FileReader {
    static readJSON(path: string) {

        var jsonFile = documents.getFile(path);
        return new Promise<Object>((resolve, reject) => {
            try {
                
                jsonFile.readText().then((content: string) => {
                    let data = <Array<Object>>JSON.parse(content);
                    resolve(data);   
                });
                        
            }
            catch (err) {
                reject(err);
            }
        });
    }   
}

export default FileReader;