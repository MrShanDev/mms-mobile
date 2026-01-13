(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/region-picker/region-picker"],{

/***/ 473:
/*!***********************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/components/region-picker/region-picker.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region-picker.vue?vue&type=template&id=d612b0d8&scoped=true& */ 474);
/* harmony import */ var _region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region-picker.vue?vue&type=script&lang=js& */ 476);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _region_picker_vue_vue_type_style_index_0_id_d612b0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region-picker.vue?vue&type=style&index=0&id=d612b0d8&lang=scss&scoped=true& */ 478);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d612b0d8",
  null,
  false,
  _region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/region-picker/region-picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 474:
/*!******************************************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/components/region-picker/region-picker.vue?vue&type=template&id=d612b0d8&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./region-picker.vue?vue&type=template&id=d612b0d8&scoped=true& */ 475);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_template_id_d612b0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 475:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/components/region-picker/region-picker.vue?vue&type=template&id=d612b0d8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 476:
/*!************************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/components/region-picker/region-picker.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./region-picker.vue?vue&type=script&lang=js& */ 477);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 477:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/components/region-picker/region-picker.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _api = __webpack_require__(/*! @/common/http/api.js */ 320);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "RegionPicker",
  props: {
    // 是否显示选择器
    visible: {
      type: Boolean,
      default: false
    },
    // 默认选中的地区编码
    defaultRegionCode: {
      type: String,
      default: ""
    }
  },
  data: function data() {
    return {
      provinces: [],
      cities: [],
      districts: [],
      selectedIndexes: [0, 0, 0],
      selectedRegion: {
        province: null,
        city: null,
        district: null
      }
    };
  },
  watch: {
    visible: function visible(newVal) {
      if (newVal) {
        // 显示时初始化数据
        this.initData();
      }
    }
  },
  mounted: function mounted() {
    // 初始化数据
    this.initData();
  },
  methods: {
    // 初始化数据
    initData: function initData() {
      var _this = this;
      // 获取省份数据
      (0, _api.storeToolAreaList)({}).then(function (res) {
        _this.provinces = res.data[0] || [];
        // 初始化城市数据（默认选中第一个省份）
        if (_this.provinces.length > 0) {
          var defaultProvince = _this.provinces[0];
          _this.selectedRegion.province = defaultProvince;
          _this.loadCities(defaultProvince);
        }
      }).catch(function (e) {
        uni.showToast({
          title: '获取地区数据失败',
          icon: 'none'
        });
      });
    },
    // 加载城市数据
    loadCities: function loadCities(province) {
      var _this2 = this;
      if (!province) return;
      // 显示加载提示
      uni.showLoading({
        title: '加载中...'
      });
      (0, _api.storeToolAreaList)({
        provincialName: province
      }).then(function (res) {
        uni.hideLoading();
        _this2.cities = res.data[1] || [];
        // 默认选中第一个城市
        if (_this2.cities.length > 0) {
          var defaultCity = _this2.cities[0];
          _this2.selectedRegion.city = defaultCity;
          // 加载第一个城市的区县数据
          _this2.loadDistricts(province, defaultCity);
        } else {
          _this2.districts = [];
        }
      }).catch(function (e) {
        uni.hideLoading();
        console.log("获取城市数据失败:", e);
        uni.showToast({
          title: '获取城市数据失败',
          icon: 'none'
        });
        _this2.cities = [];
        _this2.districts = [];
      });
    },
    // 加载区县数据
    loadDistricts: function loadDistricts(province, city) {
      var _this3 = this;
      if (!city) return;

      // 显示加载提示
      uni.showLoading({
        title: '加载中...'
      });
      (0, _api.storeToolAreaList)({
        provincialName: province,
        cityName: city
      }).then(function (res) {
        uni.hideLoading();
        // 检查返回的数据结构
        _this3.districts = res.data[2] || [];
        // 默认选中第一个区县
        if (_this3.districts.length > 0) {
          _this3.selectedRegion.district = _this3.districts[0];
        }
      }).catch(function (e) {
        uni.hideLoading();
        uni.showToast({
          title: '获取区县数据失败',
          icon: 'none'
        });
        _this3.districts = [];
      });
    },
    // 设置默认地区
    setDefaultRegion: function setDefaultRegion() {
      // 这里可以根据默认地区编码来设置默认选中项
      // 为了简化示例，我们默认选中第一个
      this.selectedIndexes = [0, 0, 0];
    },
    // 选择器变化事件
    onPickerChange: function onPickerChange(e) {
      var values = e.detail.value;
      var oldIndexes = (0, _toConsumableArray2.default)(this.selectedIndexes);
      this.selectedIndexes = values;

      // 检查省份是否发生变化
      if (values[0] !== oldIndexes[0]) {
        // 省份变化，重新加载城市数据
        var selectedProvince = this.provinces[values[0]];
        if (selectedProvince) {
          this.selectedRegion.province = selectedProvince;
          this.loadCities(selectedProvince);
        }
        return;
      }

      // 检查城市是否发生变化
      if (values[1] !== oldIndexes[1]) {
        // 城市变化，重新加载区县数据
        var _selectedProvince = this.provinces[values[0]];
        var selectedCity = this.cities[values[1]];
        if (selectedCity && _selectedProvince) {
          this.selectedRegion.city = selectedCity;
          this.loadDistricts(_selectedProvince, selectedCity);
        }
        return;
      }

      // 区县变化
      if (values[2] !== oldIndexes[2]) {
        var selectedDistrict = this.districts[values[2]];
        if (selectedDistrict) {
          this.selectedRegion.district = selectedDistrict;
        }
      }
    },
    // 关闭选择器
    closePicker: function closePicker() {
      // 重置选中索引
      this.selectedIndexes = [0, 0, 0];
      // 清空已选数据
      this.selectedRegion = {
        province: null,
        city: null,
        district: null
      };
      this.$emit("cancel");
    },
    // 确认选择
    confirm: function confirm() {
      var regionText = "".concat(this.selectedRegion.province || '', " ").concat(this.selectedRegion.city || '', " ").concat(this.selectedRegion.district || '');
      var regionData = {
        text: regionText.trim(),
        province: this.selectedRegion.province,
        city: this.selectedRegion.city,
        district: this.selectedRegion.district
      };
      this.$emit("confirm", regionData);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 478:
/*!*********************************************************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/components/region-picker/region-picker.vue?vue&type=style&index=0&id=d612b0d8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_style_index_0_id_d612b0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./region-picker.vue?vue&type=style&index=0&id=d612b0d8&lang=scss&scoped=true& */ 479);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_style_index_0_id_d612b0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_style_index_0_id_d612b0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_style_index_0_id_d612b0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_style_index_0_id_d612b0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_region_picker_vue_vue_type_style_index_0_id_d612b0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 479:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/components/region-picker/region-picker.vue?vue&type=style&index=0&id=d612b0d8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/region-picker/region-picker.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/region-picker/region-picker-create-component',
    {
        'components/region-picker/region-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(473))
        })
    },
    [['components/region-picker/region-picker-create-component']]
]);
