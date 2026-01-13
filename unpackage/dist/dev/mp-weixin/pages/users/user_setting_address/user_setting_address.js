(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/users/user_setting_address/user_setting_address"],{

/***/ 331:
/*!***********************************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/main.js?{"page":"pages%2Fusers%2Fuser_setting_address%2Fuser_setting_address"} ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _user_setting_address = _interopRequireDefault(__webpack_require__(/*! ./pages/users/user_setting_address/user_setting_address.vue */ 332));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_user_setting_address.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 332:
/*!**************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/pages/users/user_setting_address/user_setting_address.vue ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_setting_address.vue?vue&type=template&id=d0de96c2&scoped=true& */ 333);
/* harmony import */ var _user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_setting_address.vue?vue&type=script&lang=js& */ 335);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_setting_address_vue_vue_type_style_index_0_id_d0de96c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_setting_address.vue?vue&type=style&index=0&id=d0de96c2&lang=scss&scoped=true& */ 337);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d0de96c2",
  null,
  false,
  _user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/users/user_setting_address/user_setting_address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 333:
/*!*********************************************************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/pages/users/user_setting_address/user_setting_address.vue?vue&type=template&id=d0de96c2&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user_setting_address.vue?vue&type=template&id=d0de96c2&scoped=true& */ 334);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_template_id_d0de96c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 334:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/pages/users/user_setting_address/user_setting_address.vue?vue&type=template&id=d0de96c2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 335:
/*!***************************************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/pages/users/user_setting_address/user_setting_address.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user_setting_address.vue?vue&type=script&lang=js& */ 336);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 336:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/pages/users/user_setting_address/user_setting_address.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = __webpack_require__(/*! @/common/http/api.js */ 320);
var RegionPicker = function RegionPicker() {
  __webpack_require__.e(/*! require.ensure | components/region-picker/region-picker */ "components/region-picker/region-picker").then((function () {
    return resolve(__webpack_require__(/*! @/components/region-picker/region-picker.vue */ 473));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    RegionPicker: RegionPicker
  },
  data: function data() {
    return {
      formData: {
        id: '',
        name: '',
        phone: '',
        province: '',
        city: '',
        district: '',
        address: '',
        tolerant: '0'
      },
      showRegionPicker: false,
      // 控制地址选择器显示
      showRecognitionModal: false,
      recognitionData: {
        name: 'Dream',
        phone: '177****7986',
        region: '陕西省 西安市 雁塔区',
        detail: '科技二路 恒永宋元环球中心 3栋1单元 303室'
      }
    };
  },
  onLoad: function onLoad(options) {
    // 如果有ID参数，表示编辑模式
    if (options && options.id) {
      this.formData.id = options.id;
      this.loadAddressData(options.id);
    }

    // 检查剪贴板内容
    // this.checkClipboard()
  },

  methods: {
    goBack: function goBack() {
      uni.navigateBack();
    },
    selectRegion: function selectRegion() {
      // 打开地区选择器
      this.showRegionPicker = true;
    },
    // 地址选择确认
    onRegionConfirm: function onRegionConfirm(regionData) {
      this.formData.province = regionData.province;
      this.formData.city = regionData.city;
      this.formData.district = regionData.district;
      this.showRegionPicker = false;
    },
    // 地址选择取消
    onRegionCancel: function onRegionCancel() {
      this.showRegionPicker = false;
    },
    switchChange: function switchChange(e) {
      if (e.detail.value) {
        this.formData.tolerant = '1';
      } else {
        this.formData.tolerant = '0';
      }
    },
    // checkClipboard() {
    // 	// 检查剪贴板内容，如果包含地址信息则显示识别弹窗
    // 	// 这里模拟检测到剪贴板有地址信息
    // 	setTimeout(() => {
    // 		this.showRecognitionModal = true
    // 	}, 1000)
    // },
    hideRecognitionModal: function hideRecognitionModal() {
      this.showRecognitionModal = false;
    },
    // confirmRecognition() {
    // 	// 将识别的数据填入表单
    // 	this.formData.name = this.recognitionData.name
    // 	this.formData.phone = this.recognitionData.phone
    // 	this.formData.region = this.recognitionData.region
    // 	this.formData.detail = this.recognitionData.detail
    // 	this.hideRecognitionModal()
    // 	uni.showToast({
    // 		title: '信息已填入',
    // 		icon: 'success'
    // 	})
    // },
    loadAddressData: function loadAddressData(id) {
      var _this = this;
      // 加载地址数据用于编辑 获取地址详情
      (0, _api.addressDetail)(id).then(function (res) {
        // 填充表单数据
        _this.formData = res.data;
      }).catch(function (e) {
        console.log('获取地址信息失败:', e);
        uni.showToast({
          title: '获取地址信息失败',
          icon: 'none'
        });
      });
    },
    validateForm: function validateForm() {
      if (!this.formData.name.trim()) {
        uni.showToast({
          title: '请输入收货人姓名',
          icon: 'none'
        });
        return false;
      }
      if (!this.formData.phone.trim()) {
        uni.showToast({
          title: '请输入手机号码',
          icon: 'none'
        });
        return false;
      }

      // 验证手机号格式
      var phoneRegex = /^1[3-9]\d{9}$/;
      if (!phoneRegex.test(this.formData.phone)) {
        uni.showToast({
          title: '请输入正确的手机号码',
          icon: 'none'
        });
        return false;
      }
      if (!this.formData.province || !this.formData.city || !this.formData.district) {
        uni.showToast({
          title: '请选择所在地区',
          icon: 'none'
        });
        return false;
      }
      if (!this.formData.address.trim()) {
        uni.showToast({
          title: '请输入详细地址',
          icon: 'none'
        });
        return false;
      }

      // 验证详细地址长度
      if (this.formData.address.trim().length < 5) {
        uni.showToast({
          title: '详细地址至少输入5个字符',
          icon: 'none'
        });
        return false;
      }
      return true;
    },
    saveAddress: function saveAddress() {
      if (!this.validateForm()) {
        return;
      }
      // 判断是新增还是编辑
      if (this.formData.id) {
        // 编辑地址
        (0, _api.addressEdit)(this.formData).then(function (res) {
          uni.showToast({
            title: '更新成功',
            icon: 'success'
          });
          // 返回上一页
          setTimeout(function () {
            uni.navigateBack();
          }, 1500);
        }).catch(function (e) {
          console.log('更新地址失败:', e);
          uni.showToast({
            title: '更新地址失败',
            icon: 'none'
          });
        });
      } else {
        // 新增地址
        (0, _api.addressInsert)(this.formData).then(function (res) {
          if (res.code == 200) {
            uni.showToast({
              title: '保存成功',
              icon: 'success'
            });
          }
          // 返回上一页
          setTimeout(function () {
            uni.navigateBack();
          }, 1500);
        }).catch(function (e) {
          console.log('保存地址失败:', e);
          uni.showToast({
            title: '保存地址失败',
            icon: 'none'
          });
        });
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 337:
/*!************************************************************************************************************************************************************************!*\
  !*** D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/pages/users/user_setting_address/user_setting_address.vue?vue&type=style&index=0&id=d0de96c2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_style_index_0_id_d0de96c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../360Downloads/Software/HBuilderX_4.24.2024072208/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user_setting_address.vue?vue&type=style&index=0&id=d0de96c2&lang=scss&scoped=true& */ 338);
/* harmony import */ var _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_style_index_0_id_d0de96c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_style_index_0_id_d0de96c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_style_index_0_id_d0de96c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_style_index_0_id_d0de96c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_4_24_2024072208_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_setting_address_vue_vue_type_style_index_0_id_d0de96c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 338:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UGit/ordermeal/uniapp/mms-mall-mobile-uni/pages/users/user_setting_address/user_setting_address.vue?vue&type=style&index=0&id=d0de96c2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[331,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/users/user_setting_address/user_setting_address.js.map