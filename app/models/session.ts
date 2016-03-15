import { Observable } from 'data/observable';
import Speaker from './speaker';

class Session extends Observable {
    name: string;
    location: string;
    description: string;
    time: string;
    speaker: Speaker;
    rating: string;
    
    constructor(name: string, description: string, location: string, speaker: Speaker) {
        super();
        
        this.name = name;
        this.speaker = speaker;
        this.description = description;
        this.location = location;
        this.speaker = speaker;
    }
}

export default Session;