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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1kZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi1kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBRWxDLElBQUksT0FBTyxDQUFDO0FBRVosSUFBSSxXQUFXLEdBQUcsVUFBQyxJQUFlO0lBRTlCLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsT0FBTyxHQUFZLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUUxQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUNsQyxDQUFDO0FBU1EsbUJBQVcsZUFUbkI7QUFFRCxJQUFJLElBQUksR0FBRyxVQUFDLElBQWU7SUFDdkIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNyQixVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLE9BQU8sRUFBRSxPQUFPO0tBQ25CLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFcUIsWUFBSSxRQUZ6QjtBQUUyQiJ9