		$(function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if(isAndroid) {
				console.log('ad')
				//这个是安卓操作系统
			}
			if(isIOS) {
				console.log('os')
				//这个是ios操作系统
			}
		});
