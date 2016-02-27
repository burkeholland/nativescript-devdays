import * as http from 'http';
import Session from '../models/session';
import { ObservableArray } from 'data/observable-array';
import FileReader from '../shared/file-reader';
import SpeakerService from '../services/speaker-service';

class SessionService {
    static GetSessions() {
        
        return new Promise<ObservableArray<Session>>((resolve, reject) => {
            let sessions = new ObservableArray<Session>([]);
        
            try {
        
                FileReader.readJSON('data/sessions.json').then((content: Array<Object>) => {
                    content.forEach((item: any) => {
                        let speaker = SpeakerService.GetSpeaker(item.speakerId).then((speaker) => { 
                            sessions.push(new Session(item.sessionName, item.sessionDesc, item.location, speaker));
                        }); 
                    });
                    
                    resolve(sessions);
                });
            }
            catch (err) {
                reject(err);
            }   
        });
    }   
}

export default SessionService;