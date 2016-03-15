import { EventData, Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import Session from '../models/session';
import SessionService from '../services/session-service';

class ViewModel extends Observable {
    
    // this model holds two arrays - one that is bound to the UI and one that is bound to the actual datasource. This is so that we can sort the UI bound to the UI without affecting the original datasource
    
    sessions: ObservableArray<Session>;
    
    private _sessions: ObservableArray<Session>;
    
    noResults: boolean = false;
    
    constructor() {
        super();
        
        // get the list of sessions
        SessionService.GetSessions().then((sessions) => {
            this._sessions = sessions;
            this.sessions = sessions;
        });
        
    }
    
    filter(term: String) {
        if (term.trim().length > 0) {
        
            let filtered = this._sessions.filter((item: Session) => {
                return (item.name.indexOf(term.trim()) > 0 || item.description.indexOf(term.trim()) > 0);
            });
                
            this.set("sessions", new ObservableArray(filtered));
            console.log(filtered.length);
            this.set('noResults', filtered.length == 0);
        }
        else {
            this.clearFilter();
        }
    }
    
    clearFilter() {
        this.set('sessions', this._sessions);
    }
}

export default ViewModel;