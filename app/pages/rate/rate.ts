import { Page } from 'ui/page';
import { Observable, EventData } from 'data/observable';
import * as frame from 'ui/frame';

var viewModel: Observable;

var navigatedTo = (args: EventData) => {
    var page = <Page>args.object;
    viewModel = <Observable>page.navigationContext;
    
    page.bindingContext = viewModel;
}

var rate = (args: EventData) => {
    var rating = args.view.id;   
    viewModel.set('rating', rating);
}

var back = (args: EventData) => {
    frame.topmost().goBack();     
}

export { navigatedTo, rate, back }
