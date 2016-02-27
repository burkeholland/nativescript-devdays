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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJIb21lUGFnZS5jb25zdHJ1Y3RvciIsIkhvbWVQYWdlLmxvYWRlZCJdLCJtYXBwaW5ncyI6IkFBR0EsSUFBTyxNQUFNLFdBQVcsb0NBQW9DLENBQUMsQ0FBQztBQUM5RCwwQkFBcUIsd0JBQXdCLENBQUMsQ0FBQTtBQUU5QztJQUF1QkEsNEJBQVFBO0lBRTNCQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7SUFDWkEsQ0FBQ0E7SUFFREQseUJBQU1BLEdBQU5BLFVBQU9BLElBQWVBO1FBQ2xCRSxJQUFJQSxJQUFJQSxHQUFTQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUU3QkEsK0JBQStCQTtRQUMvQkEsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDeENBLE1BQU1BLENBQUNBLGdCQUFnQkEsR0FBR0EsSUFBSUEsTUFBTUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7SUFDMURBLENBQUNBO0lBQ0xGLGVBQUNBO0FBQURBLENBQUNBLEFBYkQsRUFBdUIsbUJBQVEsRUFhOUI7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUMifQ==