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