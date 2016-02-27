import * as frame from 'ui/frame';
import { Observable, EventData } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page } from 'ui/page';
import { Label } from 'ui/label';

class BasePage {
    menuItems: ObservableArray<string>;
    
    constructor() {
        
        this.menuItems = new ObservableArray<string>([
            'Home',
            'Sessions Day 1',
            'Sessions Day 2',
            'Speaker Bios'
        ]);
        
    }
    
    toggleDrawer() {
        let topmost = frame.topmost().currentPage;
        topmost.getViewById('drawer').toggleDrawerState();
    }
    
    navigate(args: any, context?: Observable) {
        let pageName = <Label>args.view.id;
        
        frame.topmost().navigate({
            moduleName: `pages/${pageName}`,
            context: context || new Observable() 
        });
    }
}

export default BasePage;