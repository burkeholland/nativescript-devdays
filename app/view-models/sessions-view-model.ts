import { EventData, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import Session from '../models/session';
import SessionService from '../services/session-service';

class ViewModel extends Observable {
    sessions: ObservableArray<Session>;
    
    constructor() {
        super();
        
        // get the list of sessions
        SessionService.GetSessions().then((sessions) => {
            this.sessions = sessions;
        });
        
    }
}

export default ViewModel;