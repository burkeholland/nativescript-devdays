import * as http from 'http';
import Speaker from '../models/speaker';
import { ObservableArray } from 'data/observable-array';
import FileReader from '../shared/file-reader';

class SpeakerService {
    static GetSpeaker(speakerId: number) {
        
        return new Promise<Speaker>((resolve, reject) => {
            let sessions = new ObservableArray<Speaker>([]);
        
            try {
        
                FileReader.readJSON('data/speakers.json').then((content: Array<Object>) => {
                    content.forEach((item: any) => {
                        if (item.id == speakerId) {
                            resolve(new Speaker(item.name, item.id, item.pic, item.desc));
                        } 
                    });
                });
            }
            catch (err) {
                reject(err);
            }   
        });
    }   
}

export default SpeakerService;