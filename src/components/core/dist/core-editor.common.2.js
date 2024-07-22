((typeof self !== 'undefined' ? self : this)["webpackJsonpcore_editor"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpcore_editor"] || []).push([[2],{

/***/ "39f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    elementProps: {
      type: Object,
      default: function _default() {
        return {
          items: [],
          activeIndex: 0
        };
      }
    }
  },
  computed: {
    innerItems: function innerItems() {
      return this.elementProps.items;
    }
  },
  data: function data() {
    return {
      current: 1
    };
  },
  methods: {
    itemRender: function itemRender(current, type, originalElement) {
      var _this = this;
      var h = this.$createElement;
      if (type === 'prev') {
        return h("a-button", {
          "style": {
            marginRight: '8px'
          },
          "attrs": {
            "size": "small",
            "icon": "minus",
            "disabled": this.innerItems.length === 1
          },
          "on": {
            "click": function click() {
              return _this.minus(current);
            }
          }
        });
      } else if (type === 'next') {
        return h("a-button", {
          "style": {
            marginLeft: '8px'
          },
          "attrs": {
            "size": "small",
            "icon": "plus"
          },
          "on": {
            "click": this.add
          }
        });
      }
      return originalElement;
    },
    add: function add() {
      // this.$emit('change', {
      //   activeIndex: this.innerItems.length,
      //   items: [
      //     ...this.innerItems,
      //     {
      //       image: '',
      //       value: `选项${this.innerItems.length + 1}-value`,
      //       label: `选项${this.innerItems.length + 1}-label`
      //     }
      //   ]
      // })
      this.elementProps.items.push({
        image: '',
        value: "\u9009\u9879".concat(this.innerItems.length + 1, "-value"),
        label: "\u9009\u9879".concat(this.innerItems.length + 1, "-label")
      });
    },
    minus: function minus(index) {
      if (this.innerItems.length === 1) return;
      this.elementProps.items.splice(index, 1);
      // this.elementProps.activeIndex = index > 0 ? index - 1 : 0
      this.elementProps.activeIndex = Math.max(index - 1, 0);
      // const items = this.innerItems.slice(0)
      // items.splice(index, 1)
      // this.$emit('change', {
      //   items,
      //   activeIndex: index > 0 ? index - 1 : 0
      // })
    }
  },
  render: function render() {
    var _this2 = this;
    var h = arguments[0];
    var currentItem = this.innerItems[this.current - 1] || {};
    return h("div", [h("a-pagination", {
      "attrs": {
        "current": this.current,
        "size": "small",
        "total": this.innerItems.length,
        "defaultPageSize": 1,
        "itemRender": this.itemRender
      },
      "on": {
        "change": function change(page) {
          _this2.current = page;
          _this2.elementProps.activeIndex = page - 1;
          // this.$emit('change', {
          //   items: this.innerItems,
          //   activeIndex: page - 1
          // })
        }
      }
    }), h("lbs-image-gallery", {
      "style": {
        margin: '16px 0'
      },
      "attrs": {
        "value": currentItem.image
      },
      "on": {
        "change": function change(url) {
          currentItem.image = url;
        }
      }
    })]);
  }
});

/***/ })

}]);
//# sourceMappingURL=core-editor.common.2.js.map