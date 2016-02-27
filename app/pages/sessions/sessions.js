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
    return HomePage;
})(base_page_1.default);
module.exports = new HomePage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXNzaW9ucy50cyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsIkhvbWVQYWdlLmNvbnN0cnVjdG9yIiwiSG9tZVBhZ2UubG9hZGVkIiwiSG9tZVBhZ2Uudmlld1Nlc3Npb25EZXRhaWxzIl0sIm1hcHBpbmdzIjoiQUFFQSxJQUFZLEtBQUssV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVsQywwQkFBcUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM5QyxvQ0FBNkIsdUNBQXVDLENBQUMsQ0FBQTtBQUVyRSxJQUFJLFNBQVMsR0FBRyxJQUFJLDZCQUFnQixFQUFFLENBQUM7QUFFdkM7SUFBdUJBLDRCQUFRQTtJQUUzQkE7UUFDSUMsaUJBQU9BLENBQUNBO0lBQ1pBLENBQUNBO0lBRURELHlCQUFNQSxHQUFOQSxVQUFPQSxJQUFlQTtRQUNsQkUsSUFBSUEsSUFBSUEsR0FBU0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFNBQVNBLENBQUNBO0lBQ3BDQSxDQUFDQTtJQUVERixxQ0FBa0JBLEdBQWxCQSxVQUFtQkEsSUFBU0E7UUFFeEJHLElBQUlBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3JEQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNyQkEsVUFBVUEsRUFBRUEsdUNBQXVDQTtZQUNuREEsT0FBT0EsRUFBRUEsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7U0FDbERBLENBQUNBLENBQUNBO0lBRVBBLENBQUNBO0lBQ0xILGVBQUNBO0FBQURBLENBQUNBLEFBcEJELEVBQXVCLG1CQUFRLEVBb0I5QjtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9