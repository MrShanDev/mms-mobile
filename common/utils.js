
export const baseUrl = "https://www.sscacptg.com/mall-api"; 
// export const baseUrl = "http://192.168.31.27:8070"
// export const baseUrl = "http://192.168.31.147:8090/"
// export const baseUrl = "http://72da0c5e.r8.cpolar.top/"
export const configInfo ={
	"name":"盛世长安",
	"logo":"https://ssca-1364461867.cos.ap-beijing.myqcloud.com/mms/upload/688c17e596d408e1ce66306b.png",
	"desc":"盛世长安托管平台",
	"phone":"16602910408",
	"qqmapsdk-key":"TDXBZ-ELKYX-OQJ4D-ZTJ4V-K7CR5-TLFN7"
}

export const userInfo = uni.getStorageSync('userInfo') || {
	"id" : "",
	"nickname" : "",
	"account" : "",
	"sex" : 0,
	"phone" : "",
	"password" : "",
	"headPortrait" : "",
	"lastLoginIp" : "",
	"token" : ""
};
//多功能路由
const isClick = function(item) {
	// {type:1,url:'https://wwwe.sxpcwlkj.com'}
	// type=1 (普通页面)，type=2 (tabBar页面)，type=3 (openAppURL)，type=4  (weburl) 
	if(item==null||item==undefined){
		return false;
	}
	if(item.isOpen!=1){
		return false;
	}
	let Url = item.openPath+item.routeParameter;
	// item.type
	if (item.openWay == 1) {
		//商品链接
		let title = '';
		uni.navigateTo({
			url: Url,
			animationType: 'none',
			animationDuration: 500
		});
	} else if (item.openWay == 2) {
		console.log(Url,'ggggggggggggggg')
		//tabBar 页面
		uni.switchTab({
			url: Url
		});
	} else if (item.openWay == 3) {
		//openURL
		plus.runtime.openURL(encodeURI(Url));
	} else if (item.openWay == 4) {
		//webview
		uni.navigateTo({
			url: '/pages/webview/webview?url=' + Url
		});
	} else if (item.openWay == 5) {
		//redirectTo
		uni.redirectTo({
			url: Url,
			animationType: 'zoom-out',
			animationDuration: 500
		});
	}
}
// msg提示
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
// 打印格式化
const jslog = (title, object) => {
	if (Boolean(title) === false || Boolean(object) === false) {
		return;
	}
	console.log("【打印】:" + title + "=>", JSON.stringify(object));
}
// 缓存 保存
const setdata = (key, value) => {
	uni.setStorage({
		key: key,
		data: value
	});
}
// 缓存 取值
const getdata = (key) => {
	uni.getStorage({
		key: key,
		success: function(res) {
			return res.data;
		}
	});
}
// 数值处理
const changeMoney = (num) => {
	num=Number(num)
	if (Number(num) <= 1) return {
		num,
		unit: '元'
	};
	var moneyUnits = ["元", "万", "亿", "万亿"]
	var dividend = 10000;
	var curentNum = num;
	//转换数字
	var curentUnit = moneyUnits[0];
	//转换单位
	for (var i = 0; i < 4; i++) {
		curentUnit = moneyUnits[i]
		if (strNumSize(curentNum) < 5) {
			break;
		}
		curentNum = curentNum / dividend
	}
	var m = {
		num: 0,
		unit: ""
	}
	m.num = Number(curentNum).toFixed(2)
	m.unit = curentUnit;
	// console.log(JSON.stringify(m))
	//{"num":"950.00","unit":"万元"}
	return m;
}
const strNumSize=(tempNum) => {
	var stringNum = tempNum.toString()
	var index = stringNum.indexOf(".")
	var newNum = stringNum;
	if (index != -1) {
		newNum = stringNum.substring(0, index)
	}
	return newNum.length
}
//开始加载
const apiStart = ()=>{
	uni.showLoading({
	    title: '加载中...'
	});
}
//结束加载
const apiStop = ()=>{
	uni.hideLoading();
}
// 不为空  true  反之  false
const isEmpty=(content)=>{
   if(typeof content === "undefined" || content === null || content.trim() === ""){
	   return true;
   }
   return false;
}
// 手机号验证
const checkPhone = (phone) => {
	const regexPhone = /^1[3-9]\d{9}$/;
	if (regexPhone.test(phone)) {
		return true
	} else {
		return false
	}
}
// 身份证验证
const checkNumber = (number) =>{
	const regexCard = /^(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}(\d|X|x)?$)$/;
	if(regexCard.test(this.selfInfo.card.title)){
		return true
	}else{
		return false
	}
}
function generateOrderNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padEnd(3, '0');
  
  // 随机数可以使用 Math.random() 或者更复杂的方法来生成更加安全的随机数
  const randomNumber = Math.floor(1000 + Math.random() * 9000).toString();
 
  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}${randomNumber}`;
}
// 时间戳转年月日
function timestampToDate(timestamp) {
    // 确保timestamp是数字
    if (typeof timestamp !== 'number') {
        throw new Error('Timestamp must be a number');
    }

    // 创建一个新的Date对象，并传入时间戳（注意：JavaScript的Date对象是以毫秒为单位的，所以需要将秒转换为毫秒）
    var date = new Date(timestamp);

    // 你可以根据需要格式化日期
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // 月份是从0开始的，所以需要+1，并且可能需要补0
    var day = ('0' + date.getDate()).slice(-2); // 可能需要补0

    // 返回格式化后的日期字符串
    return year + '.' + month + '.' + day
}
// 获取当日时间戳
function getTodayStartTimestampUTC() {  
    const now = new Date();  
    // 设置时间为当天0点0分0秒  
    now.setHours(0, 0, 0, 0);  
    // 使用getTime()获取时间戳（毫秒）  
    // 如果需要秒为单位的时间戳，可以除以1000  
    const timestamp = now.getTime();  
    return timestamp;  
} 
// 验证邮箱
function validateEmail(email) {  
    // 邮箱验证的正则表达式  
    // 注意：这是一个简单的验证，可能不包括所有有效的邮箱格式，但足以应对大多数情况  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  
    // 使用test方法检查输入是否符合正则表达式  
    return emailRegex.test(email);  
} 
// 跳转
function jumpTo(url,type="to",params={}){
	uni.$u.route({
		url,
		type,
		params
	})
}
// 电话号码转***
function maskPhoneNumber(phoneNumber) {
	if(phoneNumber!=undefined&&phoneNumber!=null){
		return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
	}
}
/**
 * 存储数据
 * key: 缓存的键名，必填
 * value: 缓存的值，选填
 * 
 * when: 缓存的过期时间，选填:
 *    【1】传入具体秒数时（单位必须为秒），到期后清除；
 *    【2】传入单词 forever时，永不清除；
 *    【3】传其他值或不传值时，App关闭时清除；
 * // 规定时间后过期
 * this.$ut.set('a', { s1: { b1: 6, b2: 8 }, s2: 9 }, 10) //可直接存储对象等，无需转格式
 * this.$ut.set('a', '时效', 10) //10秒后过期
 * this.$ut.set('a', '时效', 3600 * 24 * 7) //7天后过期

   // 永久存储
 * this.$ut.set('b', '永久', 'forever')

   // 临时存储-App关闭时清除
 * this.$ut.set('c', '临时') //可以不传值
 * this.$ut.set('c', '临时', 'abcde') //可以是NaN（Not a Number非数）的任意值

 * this.$ut.get('a') //获取某个数据数据
 * this.$ut.remove('a') //移除某个数据
 * 
 * this.$ut.removeAllTempData() //移除所有临时数据
 * 
 * 
 * 
 * 
 * 
 */
function set(key, value, when) {
  if (!key) { // 如果key为空，直接返回
    console.log("key不能空");
    return;
  }

  const valueObj = {
    value: value,
    storageExpire: '',
  }
  if (when == 'forever') { //永久存储
    valueObj.storageExpire = 'forever';
  } else if (!isNaN(Number.parseFloat(when))) { //规定时间后过期
    const timestamp = Date.parse(new Date()) / 1000; // 获取当前时间戳，单位为秒
    valueObj.storageExpire = timestamp + Number.parseFloat(when)
  } else { //临时存储-App关闭后过期
    valueObj.storageExpire = 'temporary'
  }

  uni.setStorageSync(key, valueObj);
}

/**
 * 获取数据
 * key: 缓存的键名，必填
 */
function get(key) {
  if (!key) { // 如果key为空，直接返回
    console.log("key不能空");
    return;
  }

  const res = uni.getStorageSync(key) || '';
  const when = res?.storageExpire || '';
  let final = ''
  if (when == 'forever') { //永久存储
    final = res?.value || ''
  } else if (!isNaN(Number.parseFloat(when))) { //规定时间后过期
    const timestamp = Date.parse(new Date()) / 1000; // 获取当前时间戳，单位为秒
    if (timestamp >= Number.parseFloat(when)) { //已过期
      remove(key);
      final = ''
    } else { //未过期
      final = res?.value || ''
    }
  } else if (when == 'temporary') { //临时存储
    final = res?.value || ''
  } else { //其他情况（例如获取通过uni.seStorageSync存储的值）
    final = res || ''
  }

  return final
}

/**
 * 移除数据
 * key: 缓存的键名，必填
 */
function remove(key) {
  if (!key) { // 如果key为空，直接返回
    console.log("key不能空");
    return;
  }

  uni.removeStorageSync(key);
}

/**
 * 移除所有临时数据（此方法需要在App.vue里调用）
 */
function removeAllTempData() {
  const list = uni.getStorageInfoSync().keys || []
  for (let item of list) {
    let res = uni.getStorageSync(item) || ''
    if (res?.storageExpire == 'temporary') { //判断是否为临时数据
      remove(item)
    }
  }
}

export const utils ={
	baseUrl,
	configInfo,
	userInfo,
	isClick,
	msg,
	jslog,
	setdata,
	getdata,
	changeMoney,
	apiStart,
	apiStop,
	isEmpty,
	checkPhone,
	checkNumber,
	timestampToDate,
	getTodayStartTimestampUTC,
	validateEmail,
	jumpTo,
	maskPhoneNumber,
	set,
	get,
	remove,
	removeAllTempData,
	generateOrderNumber
}
