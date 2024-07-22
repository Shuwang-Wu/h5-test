((typeof self !== 'undefined' ? self : this)["webpackJsonpcore_editor"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcore_editor"] || []).push([[1],{

/***/ "386d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var sameValue = __webpack_require__("83a1");
var regExpExec = __webpack_require__("5f1b");

// @@search logic
__webpack_require__("214f")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "6afd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("386d");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lbp_qq_map_src_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("05d9");
/* harmony import */ var _lbp_qq_map_src_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7a0e");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'lbp-qq-map__editor',
  mixins: [_lbp_qq_map_src_mixin__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]],
  // loadMap、setMarker
  props: {
    // 地图的props 集合
    elementProps: {
      type: Object,
      default: function _default() {
        return {
          labelContent: '',
          zoomLevel: 12
        };
      }
    }
  },
  methods: {
    /**
     * 更新组件的 poi prop
     * @param {Object} poi 参考 lbp-qq-map 的 poi prop，用来表示坐标点信息
     */
    setPoi: function setPoi(poi) {
      this.elementProps.poi = poi;
    },
    // https://lbs.qq.com/webDemoCenter/javascriptV2/libraries/placeLibrary
    initSearch: function initSearch() {
      var self = this;
      var keyword = '';

      // 调用Poi检索类。用于进行本地检索、周边检索等服务。
      var searchService = new window.qq.maps.SearchService({
        complete: function complete(results) {
          if (results.type === 'CITY_LIST') {
            searchService.setLocation(results.detail.cities[0].cityName);
            searchService.search(keyword);
            return;
          }
          var poi = results.detail.pois[0];
          self.setMarker(poi);
          self.setPoi(poi);
        }
      });
      // 添加监听事件
      var qqMapSearchElement = document.getElementById('editor__qq-map-search');
      var ap = new window.qq.maps.place.Autocomplete(qqMapSearchElement);
      window.qq.maps.event.addListener(ap, 'confirm', function (res) {
        keyword = res.value;
        searchService.search(keyword);
      });
    },
    /**
     * 监听地图 缩小/放大
     */
    listenZoom: function listenZoom() {
      var _this = this;
      window.qq.maps.event.addListener(this.map, 'zoom_changed', function () {
        _this.elementProps.zoomLevel = _this.map.getZoom();
      });
    },
    initMap: function initMap(poi) {
      var center = _lbp_qq_map_src_Map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getPosition(poi.latLng); // 地图的中心地理坐标
      var el = document.getElementById('editor__qq-map-container');
      this.map = new window.qq.maps.Map(el, {
        center: center,
        zoom: 8,
        // 设置地图的缩放级别
        disableDefaultUI: true // 禁止所有控件
        // 设置地图样式详情参见MapType
      });
    },
    init: function init() {
      var _this2 = this;
      var _this$elementProps = this.elementProps,
        poi = _this$elementProps.poi,
        qqMapKey = _this$elementProps.qqMapKey;
      this.loadMap(qqMapKey).then(function (qq) {
        _this2.initMap(poi);
        _this2.setMarker(poi);
        _this2.initSearch();
        _this2.listenZoom();
      });
    }
  },
  mounted: function mounted() {
    this.init();
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "style": "margin: 12px;"
    }, [h("input", {
      "ref": "search",
      "attrs": {
        "id": "editor__qq-map-search",
        "placeholder": "请输入地名"
      },
      "style": "width: 100%;margin-bottom: 20px;"
    }), h("div", {
      "attrs": {
        "id": "editor__qq-map-container"
      },
      "style": "padding-bottom: 60%;width: 100%"
    })]);
  }
});

/***/ }),

/***/ "83a1":
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ })

}]);
//# sourceMappingURL=core-editor.common.1.js.map