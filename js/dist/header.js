function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * -------------------------------------------------------------------------
 * 头部组件 header.js
 * author:陈涛
 * version：1.0.0
 * -------------------------------------------------------------------------
 */
var Header = function ($) {
  /**
   * ----------------------------------
   * Constants 常量
   * ----------------------------------
   */
  var NAME = 'beeHeader';
  var VERSION = '1.0.0';
  var DATA_KEY = 'bee.header';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var DEFAULT = {
    logo: "",
    text: ""
    /* 定义Header类 */

  };

  var Header =
  /*#__PURE__*/
  function () {
    /* 构造函数 */
    function Header(element, config) {
      this._element = element, this._config = this._getConfig(config);

      this._initDom();
    }

    var _proto = Header.prototype;

    _proto._initDom = function _initDom() {
      var element = this._element,
          config = this._config;
      element.classList.add('bee-header');
      $(element).append("<img class=\"logo\" src=\"" + config.logo + "\"  />" + "<span class=\"helper\" ></span>" + ("<span class=\"headerText\">" + config.text + "</span>"));
    };

    _proto._getConfig = function _getConfig(config) {
      return _extends({}, DEFAULT, config);
    };

    /* 绑定到jQuery对象上*/
    Header._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Header(this, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    _createClass(Header, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Header;
  }();
  /**
   * ============================================================
   * jQuery
   * ============================================================
   */


  $.fn[NAME] = Header._jQueryInterface;
  $.fn[NAME].Constructor = Header;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Header._jQueryInterface;
  };

  return Header;
}($);
//# sourceMappingURL=header.js.map