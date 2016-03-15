import { Page, TextField } from 'ui';
import { EventData } from 'data/observable';
import * as frame from 'ui/frame';
import Drawer = require('nativescript-telerik-ui/sidedrawer');
import BasePage from '../../shared/base-page';
import SessionViewModel from '../../view-models/sessions-view-model';

let viewModel = new SessionViewModel();

class HomePage extends BasePage {
    
    constructor() {
        super();
    }
    
    loaded(args: EventData) {
        let page = <Page>args.object;
        page.bindingContext = viewModel;
    }
    
    viewSessionDetails(args: any) {
        
        let context = viewModel.sessions.getItem(args.index);
        frame.topmost().navigate({
            moduleName: 'pages/session-details/session-details',
            context: viewModel.sessions.getItem(args.index)
        });
        
    }
    
    search(args: EventData) {
      
       let search = <TextField>args.object;
       
        // filter the sessions...
        viewModel.filter(search.text);
    }
}

module.exports = new HomePage();
