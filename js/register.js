$(function() {
	// 手机号码注册与邮箱注册切换
	$('.qiehuan1').click(function() {
		$(this).parents('.onep').hide().siblings('.youxiangp').show()
		$('.threep').hide()
	})
	$('.qiehuan2').click(function() {
		$(this).parents('.youxiangp').hide().siblings('.onep').show()
		$('.threep').show()
	})

	// 短信提示显示与隐藏
	$('.xianshi').hover(function() {
		$('.spantext').show();
	}, function() {
		$('.spantext').hide()
	})
	// 密码显示与隐藏切换
	var panduan = true;
	$('.pwdbox').click(function() {
		if (panduan) {
			$(this).find('span').animate({
				'margin-left': '25px'
			})
			$(this).css('background', '#005aab');
			$('.max-input1').prop('type', 'text');
			panduan = false;
		} else {
			$(this).find('span').animate({
				'margin-left': 0
			})
			$(this).css('background', 'lightgray');
			$('.max-input1').prop('type', 'password');
			panduan = true
		}
	})
	// 滑块移动
	var z = 0;
	var x1;
	var flag = true;
	$('.span1').mousedown(function(e) {
		z = 1;
		oEvent = e || event;
		x1 = oEvent.clientX
		$(document)[0].addEventListener('mousemove', function(e) {
			if (z == 1) {
				oEvent = e || event;
				var wid = oEvent.clientX - x1;
				if (wid < 0) {
					wid = 0
				} else if (wid > 324) {
					wid = 324
				}
				$('.huakuai').width(35 + wid);
			}
			// return wid;
		}, flag)

	})

	var textArr = ['电', '惜', '玄', '决', '舒']
	var dingwei = [
		['80px', '17px'],
		['166px', '151px'],
		['193px', '54px'],
		['72px', '69px'],
		['21px', '185px']
	]
	$(document).mouseup(function() {
		if (z == 1) {
			if ($('.huakuai').width() < 359) {
				$('.huakuai').width(35)
			} else if ($('.huakuai').width() >= 359) {
				$('.huakuai').css({
					'background-color': '#005aab',
					'pointer-events': 'none'
				})
				$('.span2').hide();
				var i = Math.floor(Math.random() * 5);
				$('.span3').html('请点击图片中的“' + textArr[i] + '”字').show();
				$('.span1').css({
					'background-position': '-56px -336px'
				})
				$('.yanzhengtu').show(this);
				$('.yanzhengtu>img').attr('src', 'images/tupian' + i + '.png')
				$('.yanzhengtu>span').css({
					'top': dingwei[i][0],
					'left': dingwei[i][1]
				});
			}
		}
		z = 0;
	})
	var g=false;
	$('.btn').click(function() {
		var i = Math.floor(Math.random() * 5);
		$('.span3').html('请点击图片中的“' + textArr[i] + '”字').show();
		$('.yanzhengtu').show(this);
		$('.yanzhengtu img').attr('src', 'images/tupian' + i + '.png').show(this)
		$('.yanzhengtu>span').css({
			'top': dingwei[i][0],
			'left': dingwei[i][1]
		});
	})
	$('.yanzhengtu>span').click(function() {
		$('.yanzhengtu').hide();
		$('.span1').css('background-position', '-87px -336px');
		$('.yanzheng-ok').show();
		g=true
	})
	// 密码安全指南
	$('.mima-anquan').hover(function() {
		$('.mimashow').show()
	}, function() {
		$('.mimashow').hide()
	})


	$('input').focus(function() {
		$(this).attr('placeholder', '')
	})


	var a = false;
	var b = false;
	var c = false;
	var d = false;
	var e = false;
	var f = false;
	// 手机号码正则
	$('.onep>input')[0].onblur = function() {
		var reg = /^1[2-9][0-9]{9}$/;
		if ($(this)[0].value == '') {
			$('.tishi1').html('<span>x</span>这里不能为空哦').show()
			$(this).attr('placeholder', '购买,安装,报修,手机注册更方便')
			a = false;
		} else if (!reg.test($(this)[0].value)) {
			$('.tishi1').html('<span>x</span>手机号好像不对哦').show()
			a = false;
		} else {
			$('.tishi1').hide()
			a = true;
		}
	}

	// 密码正则
	$('.twop>input')[0].oninput = function() {
		var reg = /^[\d]{6,16}$/
		var reg2 = /^[a-zA-Z]{6,16}$/
		var reg3 = /^[\W]{6,16}$/
		var reg4 = /^[_]{6,16}$/;
		var reg5 = /^([0-9]+||[a-zA-Z]+||\W+){6,16}$/
		var reg6 = /^([0-9]+||[a-zA-Z]+){6,16}$/
		var reg7 = /^([0-9]+||\W+){6,16}$/
		var reg8 = /^([a-zA-Z]+||\W+){6,16}$/
		if ($(this)[0].value == '') {
			$('.showpwd').hide()
			$('.showpwd>span:eq(0)').css('background-color', '#c6cacb');
			$('.showpwd>span:eq(1)').css('background-color', '#c6cacb');
			$('.showpwd>span:eq(2)').css('background-color', '#c6cacb');
		} else if ($(this)[0].value.length < 6 || reg.test($(this)[0].value) || reg2.test($(this)[0].value) || reg3.test($(
				this)[0].value) || reg4.test($(this)[0].value)) {
			$('.showpwd').show();
			$('.showpwd>span:eq(0)').css('background-color', '#ffc807')
			$('.showpwd>span:eq(1)').css('background-color', '#c6cacb')
			$('.showpwd>span:eq(2)').css('background-color', '#c6cacb')
		} else {
			if (reg6.test($(this)[0].value) || reg7.test($(this)[0].value) || reg8.test($(this)[0].value)) {
				$('.showpwd').show();
				$('.showpwd>span:eq(0)').css('background-color', '#c6cacb')
				$('.showpwd>span:eq(1)').css('background-color', '#ffa60d')
				$('.showpwd>span:eq(2)').css('background-color', '#c6cacb')
			} else if (reg5.test($(this)[0].value)) {
				$('.showpwd').show();
				$('.showpwd>span:eq(0)').css('background-color', '#c6cacb')
				$('.showpwd>span:eq(1)').css('background-color', '#c6cacb')
				$('.showpwd>span:eq(2)').css('background-color', '#ff6000')
			}
		}
	}
	$('.twop>input')[0].onblur = function() {
		var reg = /^[\d]{6,16}$/
		var reg2 = /^[a-zA-Z]{6,16}$/
		var reg3 = /^[\W]{6,16}$/
		var reg4 = /^[_]{6,16}$/;
		if ($(this)[0].value == '') {
			$('.tishi2').html('<span>x</span>这里不能为空哦').show();
			$(this).attr('placeholder', '6~16位,数字.密码或符号组合');
			$('.showpwd').hide()
			c= false;
		} else if ($(this)[0].value.length < 6) {
			$('.tishi2').html('<span>x</span>密码太短啦，还不到6位呢!').show();
			c= false
		} else if (reg.test($(this)[0].value) || reg2.test($(this)[0].value) || reg3.test($(this)[0].value) || reg4.test($(
				this)[0].value)) {
			$('.tishi2').html('<span>x</span>需要数字、字母或字符2种组合以上').show();
			c= false;
		} else {
			$('.tishi2').hide()
			c= true;
		}
	}
	//验证邮箱
	$('.youxiangp>input')[0].onblur = function() {
		var reg = /^\w+@\w+(\.[a-z]{2,3}){1,2}$/
		if ($(this)[0].value == '') {
			$('.tishi1').html('<span>x</span>这里不能为空哦').show();
			$(this).attr('placeholder', '常用邮箱方便接收免费服务')
			d= false
		} else if (!reg.test($(this)[0].value)) {
			$('.tishi1').html('<span>x</span>邮箱格式好像不对哦！').show();
			d= false
		} else {
			$('.tishi1').hide()
			d=true;
		}
	}

	// 激活码
	$('.threep>input')[0].onblur = function() {
		if ($(this)[0].value == '') {
			$(this).attr('placeholder', '短信验证码')
			$('.tishi3').html('<span>x</span>这里不能为空哦').show();
			e= false
		} else {
			$('.tishi3').hide()
			e= true
		}
	}

	//邀请人
	$('.fourp>input')[0].onblur = function() {
		if ($(this)[0].value == '') {
			$(this).attr('placeholder', '登录名/手机号/邀请码')
			f= false
		} else {
			f= true
		}
	}
	
	
	// 验证复选框
	$('.checkdiv>input').click(function(){
		if($('.checkdiv>input').is(':checked')){
			b= true
		}else{
			b=false
		}
	})
	
	// $('input').blur(function(){
	// 	if ((a&&b&&c&&e&&f)||(b&&c&&d&&f)) {
	// 		$('#tijiao-ok').css('background-color','#2eabe5')
	// 	} else {
	// 		$('#tijiao-ok').css('background-color','#c6cacb')
	// 	}
	// })
	
	wuyu();
	function wuyu(){
		$('.onep>input,.twop>input,.fourp>input,.threep>input').on('keyup',function(){
			var shouji=$('.onep>input').val();
			var mima=$('.twop>input').val();
			var yaoqing=$('.fourp>input').val();
			var jihuo=$('.threep>input').val();
			var fuxuan=$('.checkdiv>input').is(':checked')
			if(shouji!=''&&mima!=''&&yaoqing!=''&&jihuo!=''&&fuxuan==true){
				$('#tijiao-ok').css('background-color','#2eabe5')
			}else{
				$('#tijiao-ok').css('background-color','#c6cacb')
			}
		})
		
	}
	
	
	// 提交验证
	$('#tijiao-ok').click(function(){
		if ((a&&b&&c&&e&&f&&g)||(b&&c&&d&&f&&g)) {
			$('form').submit();
		} else {
			alert('有信息填写错误')
			return false;
		}
	})
})