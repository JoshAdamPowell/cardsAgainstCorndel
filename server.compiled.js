"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

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
      var PORT = process.env.HTTP_PORT || 8081;
      var app = (0, _express["default"])();
      app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
      app.get('/', function (req, res) {
        res.send('just gonna send it');
      });
      app.get('/flower', function (req, res) {
        res.json({
          name: 'Dandelion',
          colour: 'Blue-ish'
        });
      });
      app.listen(PORT, function () {
        console.log("Server listening at port ".concat(PORT, "."));
      });
    }
  }]);

  return App;
}();

var program = new App();
program.init();
