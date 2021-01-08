// const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants")

$(".first").hover(function() {
    $(".first").hide()
    $(".second").show()
}, function() {
    $(".first").show()
    $(".second").hide()
})
$(".mine:before").hover(function() {
    $(".mine-hover:before").show()
    $(".mine:before").hide()
}, function() {
    $(".mine-hover:before").hide()
    $(".mine:before").show()
});

//显示弹窗
function showWindow() {
    $('#addAdress').css('display', 'flex');
}
//关闭弹窗
function closeWindow() {
    $("#shouSheng").html($("#area").val());
    $("#shouShi").html($("#city").val());
    $("#shouXian").html($("#county").val());
    $("#shouZhi").html($("#xiangXi").val());
    $("#shouName").html($("#shouHuo").val());
    $("#shouHao").html($("#lianXi").val());
    $("#noAddress").css("display", "none");
    $("#hasAddress").css("display", "block");
    $('#addAdress').css('display', 'none');
}

$(function() {
    // $("#city").click(function() {
    //     console.log(1, dizhi, $("#area").val(), i);
    //     var areaVal = $("#area").val();
    //     for (var i = 0; i < dizhi.length; i++) {
    //         console.log($("#area").val() == dizhi[i].name);
    //         if (areaVal == dizhi[i].name) {
    //             for (var j = 0; j < dizhi[i].city.length; j++) {
    //                 $("#city").append("<option value=" + dizhi[i].city[j].name + ">" + dizhi[i].city[j].name + "</option>");
    //             }
    //             break;
    //         }
    //     }
    // })
    var areaIndex;
    $("#area").change(function() {
        $("#city").text("<option value='0'>请选择</option>");
        console.log(1, dizhi, $("#area").val(), i);
        var areaVal = $("#area").val();
        for (var i = 0; i < dizhi.length; i++) {
            console.log($("#area").val() == dizhi[i].name);

            if (areaVal == dizhi[i].name) {
                areaIndex = i;
                for (var j = 0; j < dizhi[i].city.length; j++) {
                    $("#city").append("<option value=" + dizhi[i].city[j].name + ">" + dizhi[i].city[j].name + "</option>");
                }
                break;
            }
        }
    })
    $("#city").change(function() {
        $("#county").text("<option value='0'>请选择</option>");
        var cityVal = $("#city").val();
        for (var i = 0; i < dizhi[areaIndex].city.length; i++) {

            if (cityVal == dizhi[areaIndex].city[i].name) {
                for (var j = 0; j < dizhi[areaIndex].city[i].area.length; j++) {
                    $("#county").append("<option value=" + dizhi[areaIndex].city[i].area[j] + ">" + dizhi[areaIndex].city[i].area[j] + "</option>");
                }
                break;
            }
        }
    })

    //换一张验证码
    var flag = false;
    $('#change').click(function() {
        flag = !flag;
        if (flag) {
            $('#code1').removeClass('show');
            $('#code2').addClass('show');
        } else {
            $('#code2').removeClass('show');
            $('#code1').addClass('show');
        }
    });

    //发送手机验证码倒数
    $('#send').click(function() {
        $(this).attr("disabled", "disabled");
        var seconds = 5; //倒计时的秒数
        $("#send").html(`${seconds}s`);
        var count = setInterval(function() {
            if (seconds > 1) {
                seconds--;
                $("#send").html(`${seconds}s`);
            } else {
                clearInterval(count);
                $("#send").html(`重新发送`);
                $("#send").attr("disabled", "false");
            }
        }, 1000);
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
        $(".myid .mine").css("background-image", "url(./images/icon-myid.png)");
        localStorage.removeItem("onlineIn");
        $(".myid .mine").get(0).href = "online.html";
    })
});
window.addEventListener("storage", function() {
    console.log(1);
    headImg();
}, false);
headImg();

function headImg() {
    if (localStorage.getItem("onlineIn") == "ok") {
        document.querySelector(".myid .mine").style.backgroundImage = "url(./images/head_img.jpg)";
        shuaxin();
    }
}

function shuaxin() {
    document.querySelector("#sumCount").innerHTML = localStorage.getItem("carCount");
    document.querySelector("#sumXiao").innerHTML = localStorage.getItem("carHeJi");
    document.querySelector("#sumHe").innerHTML = localStorage.getItem("carHeJi");
    document.querySelector("#sumFu").innerHTML = localStorage.getItem("carHeJi");
}