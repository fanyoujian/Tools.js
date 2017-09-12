
	// http://caibaojian.com/browser-ios-or-android.html
// 判断浏览器具体信息
var browser={
	versions:function(){
		var u = navigator.userAgent, app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
			iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			qq: u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

//判断是否IE内核
//if(browser.versions.trident){ alert("is IE"); }
//判断是否webKit内核
//if(browser.versions.webKit){ alert("is webKit"); }
//判断是否移动端
//if(browser.versions.mobile||browser.versions.android||browser.versions.ios){ alert("移动端"); }


// 判断是否是 移动端
function isMobile(){
	var inBrowser = typeof window !== 'undefined';
	  UA = inBrowser && window.navigator.userAgent.toLowerCase();
	  isAndroid = UA && UA.indexOf('android') > 0;
	  isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	console.log(isAndroid,isIOS)
	return isIOS||isAndroid;
}
// 返回 pc iphone android
function isMobile2()
{
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		return 'iPhone';
	} else if (/(Android)/i.test(navigator.userAgent)) {
		//alert(navigator.userAgent); 
		return 'Android';
	} else {
		return 'pc';
	};
}


// 判断是否是数字
function isNumber(oNum) {  
	if (!oNum)  
		return false;  
	var strP = /^\d+(\.\d+)?$/;  
	if (!strP.test(oNum))  
		return false;  
	try {  
		if (parseFloat(oNum) != oNum)  
			return false;  
	} catch (ex) {  
		return false;  
	}  
	return true;  
}

function checkPassword(str){
	var reg = /^[0-9a-zA-Z]{6,16}$/;
	if(!reg.test(str)){
		return false; 
	}else{
		return true;							
	}
}
// 判断是否是手机号
function isMobileNum(value)  
{  
	if(/^13\d{9}$/g.test(value)||(/^14[0-9]\d{8}$/g.test(value))||(/^15[0-9]\d{8}$/g.test(value))|| (/^18[0-9]\d{8}$/g.test(value))|| (/^17[0-9]\d{8}$/g.test(value)))  
	{return true; }  
	else  
	{return false;}  
}  
// 去除空格
function trim(str){     
	return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');     
}  
// 字符串转成 数字
function string2Int(va){
	//if(isEmpty(va))return 0;

	if(isNaN(va)){  
		return 0;  
	}else{

		return parseInt(va);  
	}  
}  

//是否为空
function isEmpty(str){
	var whitespace = " \t\n\r";
	var i;
	if((str == null) || (str.length == 0))
		return true;
	for(i = 0; i < str.length; i++){
		var c = str.charAt(i);
		if(whitespace.indexOf(c) == -1)
			return false;
	}
	return true;
}