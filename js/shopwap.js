$(function() {

    $('.shanchu').click(function() {
        localStorage.setItem("look", "no");
        $('.shopwap_masage').show();
        $('.hide-div').hide();

        localStorage.setItem("carCount", "0");
    })

    var a = false;
    $('.reduce').click(function() {

        var i = parseInt($('.count').html())
        if (i > 0) {
            var z = (i - 1) * 1099;
            $('.xiaoji').html(z);
            if (a == true) {
                $('.jianshu').html(i - 1);
                $('.heji').html(z);
            }
            if (i > 0) {
                $('.count').html(i - 1);
                localStorage.setItem("carCount", $('.count').html());
            } else {
                $('.reduce').attr('disabled', 'disabled')
            }
        }
    })
    $('.add').click(function() {
        var i = parseInt($('.count').html())
        var z = (i + 1) * 1099;
        $('.xiaoji').html(z);
        $('.count').html(i + 1);
        localStorage.setItem("carCount", $('.count').html());
        $('.reduce').removeAttr('disabled')
        if (a == true) {
            $('.jianshu').html(i + 1);
            $('.heji').html(z);
        }
    })
    $('.divbox1>input').click(function() {
        var fuxuan = $('.divbox1>input').is(':checked')
        var fuxuan2 = $('.pbox>input')
        if (fuxuan == true) {
            $('.jiesuanbox button').removeAttr('disabled').css({ 'background-color': 'blue', 'color': '#fff' })
            var i = parseInt($('.count').html())
            var z = i * 1099
            $('.jianshu').html(i);
            $('.heji').html(z);
            fuxuan2.attr('checked', 'checked')
            a = true;
        } else {
            $('.heji').html('0.00');
            $('.jianshu').html(0);
            $('.jiesuanbox button').attr('disabled', 'disabled').css({ 'background-color': 'lightgray', 'color': 'darkgray' })
            fuxuan2.removeAttr('checked')
            a = false
        }
    })
    $('.pbox>input').click(function() {
            var fuxuan = $('.pbox>input').is(':checked')
            var fuxuan2 = $('.divbox1>input')
            if (fuxuan == true) {
                $('.jiesuanbox button').removeAttr('disabled').css({ 'background-color': 'blue', 'color': '#fff' })
                var i = parseInt($('.count').html())
                var z = i * 1099
                $('.jianshu').html(i);
                $('.heji').html(z);
                fuxuan2.attr('checked', 'checked')
                a = true;
            } else {
                $('.heji').html('0.00');
                $('.jianshu').html(0);
                $('.jiesuanbox button').attr('disabled', 'disabled').css({ 'background-color': 'lightgray', 'color': 'darkgray' })
                $('.jiesuanbox button a').attr("href", "javascript:;");
                fuxuan2.removeAttr('checked')
                a = false
            }
            var x = $()
        })
        // 去结算
    $("#goJieSuan").click(function() {
        if (!$(this).disabled) {
            localStorage.setItem("carHeJi", document.querySelector(".heji").innerHTML);
            $(this).find("a").attr("href", "jiesuan.html");
        }
    })

    //点击头像
    $(".myid .mine").click(function() {
        if (localStorage.getItem("onlineIn") == "ok") {
            $(".header-right .mine_out").toggle();
            return false;
        } else {
            $(".header-right .mine_out").hide();
            $(this).get(0).href = "online.html";
        }
    })

    //点击退出
    $(".mine_out .tuichu").click(function() {
        $(".header-right .mine_out").hide();
        $(".myid .mine").css("background-image", "url(../images/icon-myid.png)");
        localStorage.removeItem("onlineIn");
        $(".myid .mine").get(0).href = "online.html";
    })


})

window.addEventListener("storage", function() {
    console.log(1);
    headImg();
}, false);
headImg();

function headImg() {
    if (localStorage.getItem("onlineIn") == "ok") {
        // if (localStorage.getItem("carCount") == "NaN") {
        //     localStorage.setItem("carCount", "0");
        // }
        document.querySelector(".myid .mine").style.backgroundImage = "url(./images/head_img.jpg)";
        console.log(localStorage.getItem("carCount"));
        // document.querySelector(".mathbox .count").innerHTML=localStorage.getItem("carCount");
        var carCount = localStorage.getItem("carCount") == "NaN" ? 0 : parseInt(localStorage.getItem("carCount"));
        document.querySelector(".mathbox .count").innerHTML = carCount + parseInt(localStorage.getItem("eduRobot"));
        carCount = parseInt(document.querySelector(".mathbox .count").innerHTML);
        localStorage.setItem("carCount", carCount);
        if (localStorage.getItem("look") == "yes") {
            document.querySelector(".shopwap_masage").style.display = "none";
            document.querySelector(".con1").style.display = "block";
            document.querySelector(".con2").style.display = "block";
        }
        updateCount();
        localStorage.setItem("eduRobot", "0"); //初始化
    }
}
//更新数量
function updateCount() {
    // $('.jianshu').get(0).innerHTML = parseInt($('.count').get(0).innerHTML);
    var xiao = parseInt($('.count').get(0).innerHTML) * parseInt($("#rates").get(0).innerHTML);
    $('.xiaoji').get(0).innerHTML = xiao;
    // $('.heji').get(0).innerHTML = xiao;

}