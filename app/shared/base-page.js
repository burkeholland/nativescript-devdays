var frame = require('ui/frame');
var observable_1 = require('data/observable');
var observable_array_1 = require('data/observable-array');
var BasePage = (function () {
    function BasePage() {
        this.menuItems = new observable_array_1.ObservableArray([
            'Home',
            'Sessions Day 1',
            'Sessions Day 2',
            'Speaker Bios'
        ]);
    }
    BasePage.prototype.toggleDrawer = function () {
        var topmost = frame.topmost().currentPage;
        topmost.getViewById('drawer').toggleDrawerState();
    };
    BasePage.prototype.navigate = function (args, context) {
        var pageName = args.view.id;
        frame.topmost().navigate({
            moduleName: "pages/" + pageName,
            context: context || new observable_1.Observable()
        });
    };
    return BasePage;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BasePage;
//# sourceMappingURL=base-page.js.map