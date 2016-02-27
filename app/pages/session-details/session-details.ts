import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import SpeakerService from '../../services/speaker-service';
import Session from '../../models/Session';
import Speaker from '../../models/Speaker';
import * as frame from 'ui/frame';

let session;

let navigatedTo = (args: EventData) => {
        
    let page = <Page>args.object;
    session = <Session>page.navigationContext;
    
    page.bindingContext = session;
}
    
let rate = (args: EventData) => {
    frame.topmost().navigate({
        moduleName: 'pages/rate/rate',
        context: session
    });         
}

export { navigatedTo, rate }
