import { Page } from 'ui/page';
import { EventData } from 'data/observable';
import * as frame from 'ui/frame';
import Drawer = require('nativescript-telerik-ui/sidedrawer');
import BasePage from '../../shared/base-page';

class HomePage extends BasePage {
    
    constructor() {
        super();
    }
    
    loaded(args: EventData) {
        let page = <Page>args.object;
        
        // define the drawer transition
        let drawer = page.getViewById('drawer');      
        drawer.drawerTransition = new Drawer.PushTransition();
    }
}

module.exports = new HomePage();
