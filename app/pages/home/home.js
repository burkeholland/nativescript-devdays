var Drawer = require('nativescript-telerik-ui/sidedrawer');
var base_page_1 = require('../../shared/base-page');
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.call(this);
    }
    HomePage.prototype.loaded = function (args) {
        var page = args.object;
        // define the drawer transition
        var drawer = page.getViewById('drawer');
        drawer.drawerTransition = new Drawer.PushTransition();
    };
    return HomePage;
})(base_page_1.default);
module.exports = new HomePage();
//# sourceMappingURL=home.js.map