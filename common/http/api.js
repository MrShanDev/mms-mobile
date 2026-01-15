const http = uni.$u.http

// post请求，默认请求添加token
export const postApi = (params, header) => http.post('/api/v1/index', params,{"custom": {auth: true,toast: false, catch: false,params: {},header : header}})
// get请求，默认请求添加token
export const getApi = (params, header) => http.get('/api/v1/index', {"custom": {"auth": true},params, header})

//  =============================== 盛世长安 =========================================

// 登录
// 微信注册登录
export const weixinLogin = (params, header) => http.get('/v1/common/login/codeGetPhoneRegisterOrLogin', {"custom": {"auth": true},params, header})

//token登录
export const tokenLogin = (params, header) => http.get('/v1/common/login/tokenLogin', {"custom": {"auth": true,toast: false},params, header})

// 根据广告位编码查询广告
export const selectByAdvertisingCode = (params,header) => http.get('/v1/common/location/selectByAdvertisingCode',{"custom": {"auth": true}, params, header})

// 获取藏品列表
export const collectionList = (params,header) => http.post('/v1/collection/list',params,{"custom": {"auth": true},header})

// 获取藏品详情
export const collectionDetails = (params,header) => http.get(`/v1/collection//${params}`,{"custom": {"auth": true}, params, header})

// 藏品 证书查询 
export const selectController = (params,header) => http.get('/v1/collection/selectController',{"custom": {"auth": true}, params, header})

// 获取文章列表
export const articleList = (params,header) => http.post('/v1/article/articleList',params,{"custom": {"auth": true},header})

// 获取文章详情
export const articleDetails = (params,header) => http.get(`/v1/article/article/${params}`,{"custom": {"auth": true},header})

// 新增藏品
export const insert = (params,header) => http.post('/v1/collection/insert',params,{"custom": {"auth": true},header})

//获取地址列表
export const addressList = (params,header) => http.post('/v1/common/member/address/list',params,{"custom": {"auth": true},header})

// 删除地址
export const deleteAddress = (params,header) => http.get(`/v1/common/member/address/delete/${params}`,{"custom": {"auth": true},header})

// 获取地址详情
export const addressDetail = (params,header) => http.get(`/v1/common/member/address/${params}`,{"custom": {"auth": true},header})

// 编辑地址
export const addressEdit = (params,header) => http.post('/v1/common/member/address/edit',params,{"custom": {"auth": true},header})

// 新增地址
export const addressInsert = (params,header) => http.post('/v1/common/member/address/insert',params,{"custom": {"auth": true},header})

// 获取区域
export const storeToolAreaList = (params,header) => http.get('/v1/common/common/storeToolAreaList',{"custom": {"auth": true}, params, header})

//获取托管记录列表
export const myList = (params,header) => http.post('/v1/collection/myList',params,{"custom": {"auth": true},header})

// 更新用户信息
export const updateMemberInfo = (params,header) => http.post('/v1/common/member/updateMember',params,{"custom": {"auth": true},header})

// 订单支付
export const payOrderPlus = (params,header) => http.get('/v1/common/order/payOrderPlus',{"custom": {"auth": true}, params, header})