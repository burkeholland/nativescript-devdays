var frame = require('ui/frame');
var session;
var navigatedTo = function (args) {
    var page = args.object;
    session = page.navigationContext;
    page.bindingContext = session;
};
exports.navigatedTo = navigatedTo;
var rate = function (args) {
    frame.topmost().navigate({
        moduleName: 'pages/rate/rate',
        context: session
    });
};
exports.rate = rate;
//# sourceMappingURL=session-details.js.map