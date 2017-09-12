
	// http://caibaojian.com/browser-ios-or-android.html
// �ж������������Ϣ
var browser={
	versions:function(){
		var u = navigator.userAgent, app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE�ں�
			presto: u.indexOf('Presto') > -1, //opera�ں�
			webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//����ں�
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
			android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android�ն�
			iPhone: u.indexOf('iPhone') > -1 , //�Ƿ�ΪiPhone����QQHD�����
			iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
			webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
			weixin: u.indexOf('MicroMessenger') > -1, //�Ƿ�΢�� ��2015-01-22������
			qq: u.match(/\sQQ/i) == " qq" //�Ƿ�QQ
		};
	}(),
	language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

//�ж��Ƿ�IE�ں�
//if(browser.versions.trident){ alert("is IE"); }
//�ж��Ƿ�webKit�ں�
//if(browser.versions.webKit){ alert("is webKit"); }
//�ж��Ƿ��ƶ���
//if(browser.versions.mobile||browser.versions.android||browser.versions.ios){ alert("�ƶ���"); }


// �ж��Ƿ��� �ƶ���
function isMobile(){
	var inBrowser = typeof window !== 'undefined';
	  UA = inBrowser && window.navigator.userAgent.toLowerCase();
	  isAndroid = UA && UA.indexOf('android') > 0;
	  isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	console.log(isAndroid,isIOS)
	return isIOS||isAndroid;
}
// ���� pc iphone android
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


// �ж��Ƿ�������
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
// �ж��Ƿ����ֻ���
function isMobileNum(value)  
{  
	if(/^13\d{9}$/g.test(value)||(/^14[0-9]\d{8}$/g.test(value))||(/^15[0-9]\d{8}$/g.test(value))|| (/^18[0-9]\d{8}$/g.test(value))|| (/^17[0-9]\d{8}$/g.test(value)))  
	{return true; }  
	else  
	{return false;}  
}  
// ȥ���ո�
function trim(str){     
	return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');     
}  
// �ַ���ת�� ����
function string2Int(va){
	//if(isEmpty(va))return 0;

	if(isNaN(va)){  
		return 0;  
	}else{

		return parseInt(va);  
	}  
}  

//�Ƿ�Ϊ��
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