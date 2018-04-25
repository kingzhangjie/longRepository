/**
 * 获取适口高度
 * */
function getWinHeight() {
	return $(window).height();
}
/**
 * 获取适口宽度
 * */
function getWinWidth() {
	return $(window).width();
}
/**
 * 返回顶部
 * */
function retScrollTop(ele) {
	$('#' + ele).click(function() {
		$('html , body').stop().animate({
			scrollTop: 0
		}, 1000);
	});
}
//二维码显示
function codeHover(ele, i) {
	$('.' + ele).eq(i).hover(function() {
		$(this).next().fadeIn();
	}, function() {
		$(this).next().fadeOut();
	});
}

//隐藏显示
function indeShow(ele) {
	$('.' + ele).each(function(index, ele) {
		$(this).mouseenter(function() {
			$(this).next().show();
		});
		$(this).mousemove(function() {
			$(this).next().show();
		});
		$(this).next().mousemove(function() {
			$(this).show();
		});
		$(this).next().mouseout(function() {
			var This = $(this);
			This.hide();
		});
		$(this).mouseout(function() {
			var This = $(this);
			This.next().hide();
		});
	});
}
// 验证手机号
function isPhoneNo(phone) {
	var pattern = /^1[34578]\d{9}$/;
	return pattern.test(phone);
}
//时间倒计时
function countDown() {
	var n = 59;
	var inta = setInterval(function() {
		// 设置.time的文本
		$("#padkGetcode").text(n + "s重新获取");
		$("#padkGetcode").attr("disabled", "disabled");
		$("#padkGetcode").css("color", "#bbbbbb").css('background-color', '#eeeeee');
		n--;
		if(n < 0) {
			// 清除定时器
			clearInterval(inta);
			// 初始化时间
			n = 59;
			$("#padkGetcode").text("重新获取");
			$("#padkGetcode").removeAttr("disabled");
			$("#padkGetcode").css("color", "#fff").css('background-color', '#74b0ff');
		}
	}, 1000)
}
//返回顶部
$(document).ready(function() {
	$(window).scroll(function() {
		var top = $(document).scrollTop();
		var scrollTop = getWinHeight();
		if(top > 120) {
			$('#NavFixed').css('top', '0');
		} else {
			$('#NavFixed').css('top', '-100px');
		}
		if(top > scrollTop) {
			$('#reScrllTop').fadeIn();
		} else {
			$('#reScrllTop').fadeOut();
		}
	});
});