$(document).ready(function() {
    cook();

    function cook() {
        var userMsg = document.cookie;
        var arr1 = userMsg.split(";");
        for (var i = 0; i < arr1.length; i++) {
            var arr2 = arr1[i].split("=");
            if (arr2[0] == "userArr") {
                var msg = JSON.parse(arr2[1]);
                $("#ease_uname").val(msg.user);
                $("#ease_pwd").val(msg.pwd);
            }
        }
    }

    // ===================二级目录切换 begin ↓↓↓===================
    $(".top_nav .ease").click(function() { //普通登录
        titleClick(".top_nav .ease", "登录海尔账号", "-2px -61px", "-4px -133px", "-1px -210px", ".general");
    })
    $(".top_nav .phone").click(function() { //手机验证码登录
        titleClick(".top_nav .phone", "手机登录海尔账号", "0px -99px", "-4px -171px", "-1px -210px", ".phone");
    })
    $(".top_nav .code").click(function() { //二维码登录
        titleClick(".top_nav .code", "二维码登录海尔账号", "0px -99px", "-4px -133px", "-1px -248px", ".qrCode");
    })

    //封装函数--二级目录切换
    function titleClick(inthis, word, easePo, phonePo, codePo, daLi) {
        $(inthis).parents("#myform").find("h3").html(word);
        $(inthis).css("color", "rgb(10, 97, 173)");
        $(inthis).siblings().css("color", "rgb(157, 157, 157)");
        $(".top_nav .ease").find("i").css("background-position", easePo);
        $(".top_nav .phone").find("i").css("background-position", phonePo);
        $(".top_nav .code").find("i").css("background-position", codePo);
        $(".top_content " + daLi).show();
        $(".top_content " + daLi).siblings().hide();
    }

    // ===================二级目录切换 end ↑↑↑=========================


    // =======================普通登录 begin ↓↓↓=====================
    //手机号/验证邮箱/用户名
    focusANDblur("ease_uname", "手机号 / 验证邮箱 / 用户名");
    $("#ease_uname").blur(function() {
        btnFormat("#ease_uname", "#ease_pwd", ".general .agree i");
    })

    // 登录密码
    focusANDblur("ease_pwd", "登录密码");
    $("#ease_pwd").blur(function() {
        btnFormat("#ease_uname", "#ease_pwd", ".general .agree i");
    })

    // 滑块

    //同意条款/政策
    gouXuan(".general .agree i", "#ease");

    //两周内免登录
    gouXuan(".general .noLogin i", "#ease");

    //登录
    $("#ease_btn").click(function(e) {
        // var ease_uname_Reg = /^(1\d{10})$|^(\w+@\w+(\.[a-zA-Z]{2,3}){2,3})$|^(\w+)$/;
        e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        var ease_uname_Reg = /^1\d{10}$/; //手机号/验证邮箱/用户名
        var ease_pwd_Reg = /^\w{6,26}$/; //密码验证
        if (!ease_uname_Reg.test($("#ease_uname").val()) || !ease_pwd_Reg.test($("#ease_pwd").val())) {
            $(".text").show();
            $(".text em").html("你的用户名或者密码好像不对哦!");
            $(".opacity").show();
            return false;
        } else if ($(".general .agree i").css("background-position") != "-1px -307px") {
            return false;
        } else {
            //两周内免登录
            var pxFlag = $(".general .noLogin i").css("background-position");
            var date = new Date();
            var userArr = {
                user: $("#ease_uname").val(),
                pwd: $("#ease_pwd").val()
            };
            if (pxFlag == "-1px -307px") {
                date.setDate(date.getDate() + 14);
                // document.cookie = "userArr=" + userArr + ";expires=" + date;
                document.cookie = "userArr=" + JSON.stringify(userArr) + ";expires=" + date;
            } else {
                date.setDate(date.getDate() - 1);
                document.cookie = "userArr=;expires=" + date;
                console.log(document.cookie);
            }
            localStorage.setItem("onlineIn", "ok");
            return true;
        }
    })

    // 封装函数--登录按钮背景
    function btnFormat(uname, pwd, i) {
        //默认判断同意条款，不判断两周免登录
        if (i == ".general .agree i") {
            i = ".general .agree i";
            var flag = $(uname).val().length && $(pwd).val().length && $(i).css("background-position") == "-1px -307px";
            if (flag) {
                $("#ease_btn").css("background-color", "rgb(50, 190, 255)");
                $("#phone_btn").css("background-color", "rgb(50, 190, 255)");
            } else {
                $("#ease_btn").css("background-color", "rgb(198, 202, 203)");
                $("#phone_btn").css("background-color", "rgb(198, 202, 203)");
            }
        } else if (i == ".phone .agree i") {
            i = ".phone .agree i";
            var flag = $(uname).val().length && $(pwd).val().length && $(i).css("background-position") == "-1px -307px";
            if (flag) {
                $("#ease_btn").css("background-color", "rgb(50, 190, 255)");
                $("#phone_btn").css("background-color", "rgb(50, 190, 255)");
            } else {
                $("#ease_btn").css("background-color", "rgb(198, 202, 203)");
                $("#phone_btn").css("background-color", "rgb(198, 202, 203)");
            }
        }

    }

    // 封装函数--输入框获取与失去光标时
    function focusANDblur(ele, str) {
        $("#" + ele).focus(function() {
            $(".text").hide();
            $(".opacity").hide();
            $(this).attr("placeholder", "");
            $(this).css("border-color", "rgb(0, 90, 170)");
        })
        $("#" + ele).blur(function() {
            $(this).attr("placeholder", str);
            $(this).css("border-color", "rgb(214, 219, 221)");
        })
    }

    // 封装函数--勾选
    function gouXuan(ele, topli) {
        $(ele).click(function() {
            $(".text").hide();
            $(".opacity").hide();
            if ($(this).css("background-position") == "-1px -283px") {
                $(this).css("background-position", "-1px -307px");
                btnFormat(topli + "_uname", topli + "_pwd", ele);
            } else {
                $(this).css("background-position", "-1px -283px");
                btnFormat(topli + "_uname", topli + "_pwd", ele);
            }
        })
    }
    // =======================普通登录 end ↑↑↑=====================

    // =======================手机动态码登录 begin ↓↓↓=====================
    // 手机号
    focusANDblur("phone_uname", "手机号");
    var phone_uname_Reg = /^1\d{10}$/;
    $("#phone_uname").blur(function() {
        colorANDborder();
        if (!phone_uname_Reg.test($("#phone_uname").val())) {
            $(".text").show();
            $(".text em").html("手机号好像不对哦!");
            $(".opacity").show();
        }
        btnFormat("#phone_uname", "#phone_pwd", ".phone .agree i");
    })

    var emClick = false;
    var currX;
    var moveX;
    var moveflag = 0; //是否移动
    var downflag = 1; //是否显示下图
    var downAgainFlag = 0; //是否再次显示下图
    window.getSelection().empty();
    $(".phone .scroll i").mousedown(function(e) {
        if (moveX != 368) {
            moveflag = 1;
            e = e || window.event;
            if (downflag == 1) {
                currX = e.clientX;
                console.log(currX);
            }
            $(document)[0].addEventListener("mousemove", function(e) {
                if (moveX != 368) {
                    downAgainFlag = 1;
                    if (moveflag == 1) {
                        oEvent = e || window.event;
                        moveX = oEvent.clientX - currX + 36;
                        if (moveX <= 36) moveX = 36;
                        if (moveX >= 368) moveX = 368;
                        console.log("moveX", moveX);

                        $(".phone .scroll p").css("width", moveX + "px");
                    }
                }
            }, false);
        }

    })
    $(document)[0].addEventListener("mouseup", function() {
        if (downAgainFlag == 1) {
            moveflag = 0;
            if (moveX == 368) {
                downflag = 0;
                $(".phone .scroll p").width(368);
                $(".phone .scroll .imgword").show();
                $(".phone .scroll i").css("background-position", "-34px -201px");
                var i = 0;
                bian(i);
                $(".phone .scroll .imgword .click").click(function() {
                    emClick = true;
                    colorANDborder();
                    $(".phone .scroll i").css("background-position", "-88px -336px");
                    $(".phone .scroll span").html("验证通过");
                    $(".phone .scroll span").css("text-indent", "0px");
                    $(".phone .scroll span").css("background-color", "rgb(68, 204, 0)");
                    $(".phone .scroll .imgword").hide();
                })
            } else {
                $(".phone .scroll p").width(36);
            }
        }
        downAgainFlag = 0;
    }, false);

    function bian(i) {
        var arrImg = ["0", "1", "2", "3"];
        var arrWord = ["队", "冰", "六", "针"];
        var arrTop = ["100px", "80px", "76px", "110px"];
        var arrLeft = ["150px", "60px", "94px", "94px"];
        $(".phone .scroll span").html("请点击图片中的\"" + arrWord[i] + "\"字");
        $(".phone .scroll span").css("text-indent", "-200px");
        $(".phone .scroll span").css("background-color", "rgb(0, 90, 171)");
        $(".phone .scroll .imgword .click").css({
            "top": arrTop[i],
            "left": arrLeft[i]
        })
        $(".phone .scroll .imgword em").click(function() {
            i++;
            console.log("i++", i);
            if (i > 3) i = 0;
            $(".phone .scroll .imgword img").attr("src", "images/imgword" + arrImg[i] + ".png");
            console.log("i", i);
            bian(i);
        })
    }

    // 发送动态码
    function colorANDborder() {
        if (phone_uname_Reg.test($("#phone_uname").val()) && emClick) {
            $(".phone button").css({
                "color": "rgb(50, 190, 255)",
                "border-color": "rgb(50, 190, 255)"
            })
        }
    }
    var msgSend = false; //判断是否发了验证码
    $(".phone button").click(function() {
        if (phone_uname_Reg.test($("#phone_uname").val()) && emClick) {
            msgSend = true;
            $(".phone button").css({
                "color": "rgb(153, 153, 153)",
                "border-color": "rgb(246, 246, 246)"
            })
            $(this).attr("disabled", true);
            var sec = 60;
            var timer = setInterval(function() {
                $(".phone button").html("重新发送" + (--sec) + "秒");
                if (sec == 0) {
                    clearInterval(timer);
                    $(".phone button").attr("disabled", false);
                    $(".phone button").html("发送动态密码到手机");
                }
            }, 1000);
        }

    })

    // 短信验证码
    focusANDblur("phone_pwd", "短信验证码");
    $("#phone_pwd").blur(function() {
        btnFormat("#phone_uname", "#phone_pwd", ".phone .agree i");
    })

    // 同意
    gouXuan(".phone .agree i", "#phone");

    //登录
    $("#phone_btn").click(function(e) {
            // var ease_uname_Reg = /^(1\d{10})$|^(\w+@\w+(\.[a-zA-Z]{2,3}){2,3})$|^(\w+)$/;
            e = e || window.event;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
            var phone_uname_Reg = /^1\d{10}$/; //手机号
            var phone_pwd_Reg = /^\d{6}$/; //短信验证码
            if (!phone_uname_Reg.test($("#phone_uname").val())) {
                $(".text").show();
                $(".text em").html("手机号好像不对哦!");
                $(".text").css("top", "144px");
                $(".opacity").show();
                return false;
            } else if (!phone_pwd_Reg.test($("#phone_pwd").val()) || !msgSend) {
                $(".text").show();
                $(".text em").html("验证码不对哦!");
                $(".text").css("top", "264px");
                $(".opacity").show();
                return false;
            } else if ($(".phone .agree i").css("background-position") != "-1px -307px") {
                return false;
            } else {
                localStorage.setItem("onlineIn", "ok");
                return true;
            }
        })
        // =======================手机动态码登录 end ↑↑↑=======================
})