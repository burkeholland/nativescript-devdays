var frame = require('ui/frame');
var viewModel;
var navigatedTo = function (args) {
    var page = args.object;
    viewModel = page.navigationContext;
    page.bindingContext = viewModel;
};
exports.navigatedTo = navigatedTo;
var rate = function (args) {
    var rating = args.view.id;
    viewModel.set('rating', rating);
};
exports.rate = rate;
var back = function (args) {
    frame.topmost().goBack();
};
exports.back = back;
//# sourceMappingURL=rate.js.map