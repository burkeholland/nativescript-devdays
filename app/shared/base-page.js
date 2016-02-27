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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZS1wYWdlLnRzIl0sIm5hbWVzIjpbIkJhc2VQYWdlIiwiQmFzZVBhZ2UuY29uc3RydWN0b3IiLCJCYXNlUGFnZS50b2dnbGVEcmF3ZXIiLCJCYXNlUGFnZS5uYXZpZ2F0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxLQUFLLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDbEMsMkJBQXNDLGlCQUFpQixDQUFDLENBQUE7QUFDeEQsaUNBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFJeEQ7SUFHSUE7UUFFSUMsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsa0NBQWVBLENBQVNBO1lBQ3pDQSxNQUFNQTtZQUNOQSxnQkFBZ0JBO1lBQ2hCQSxnQkFBZ0JBO1lBQ2hCQSxjQUFjQTtTQUNqQkEsQ0FBQ0EsQ0FBQ0E7SUFFUEEsQ0FBQ0E7SUFFREQsK0JBQVlBLEdBQVpBO1FBQ0lFLElBQUlBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLFdBQVdBLENBQUNBO1FBQzFDQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO0lBQ3REQSxDQUFDQTtJQUVERiwyQkFBUUEsR0FBUkEsVUFBU0EsSUFBU0EsRUFBRUEsT0FBb0JBO1FBQ3BDRyxJQUFJQSxRQUFRQSxHQUFVQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUVuQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDckJBLFVBQVVBLEVBQUVBLFdBQVNBLFFBQVVBO1lBQy9CQSxPQUFPQSxFQUFFQSxPQUFPQSxJQUFJQSxJQUFJQSx1QkFBVUEsRUFBRUE7U0FDdkNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBQ0xILGVBQUNBO0FBQURBLENBQUNBLEFBM0JELElBMkJDO0FBRUQ7a0JBQWUsUUFBUSxDQUFDIn0=