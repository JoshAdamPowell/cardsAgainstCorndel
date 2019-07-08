"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _testController = _interopRequireDefault(require("./testController"));

var _landingController = _interopRequireDefault(require("./landingController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var PORT = process.env.HTTP_PORT || 4001;
      var APP = (0, _express["default"])();
      APP.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
      APP.use((0, _bodyParser["default"])());
      APP.use((0, _cookieParser["default"])());

      _testController["default"].register(APP);

      _landingController["default"].register(APP);

      APP.listen(PORT, function () {
        console.log("Server listening at port ".concat(PORT, "."));
      });
    }
  }]);

  return App;
}();

var program = new App();
program.init();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LandingController =
/*#__PURE__*/
function () {
  function LandingController() {
    _classCallCheck(this, LandingController);
  }

  _createClass(LandingController, null, [{
    key: "register",
    value: function register(app) {
      app.post('/', function (req, res) {
        res.cookie('User', "".concat(req.body.username));
        res.status(200).send({
          message: 'Submission successful.'
        });
      });
    }
  }]);

  return LandingController;
}();

exports["default"] = LandingController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TestController =
/*#__PURE__*/
function () {
  function TestController() {
    _classCallCheck(this, TestController);
  }

  _createClass(TestController, null, [{
    key: "register",
    value: function register(app) {
      app.get('/test', function (req, res) {
        res.json({
          "hello": "world"
        });
      });
    }
  }]);

  return TestController;
}();

exports["default"] = TestController;
