var frame = require('ui/frame');
var base_page_1 = require('../../shared/base-page');
var sessions_view_model_1 = require('../../view-models/sessions-view-model');
var viewModel = new sessions_view_model_1.default();
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.call(this);
    }
    HomePage.prototype.loaded = function (args) {
        var page = args.object;
        page.bindingContext = viewModel;
    };
    HomePage.prototype.viewSessionDetails = function (args) {
        var context = viewModel.sessions.getItem(args.index);
        frame.topmost().navigate({
            moduleName: 'pages/session-details/session-details',
            context: viewModel.sessions.getItem(args.index)
        });
    };
    HomePage.prototype.search = function (args) {
        var search = args.object;
        // filter the sessions...
        viewModel.filter(search.text);
    };
    return HomePage;
})(base_page_1.default);
module.exports = new HomePage();
//# sourceMappingURL=sessions.js.map