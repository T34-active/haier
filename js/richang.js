$(document).ready(function() {
    for (var i = 0; i < $(".scene .right").length; i++) {
        $(".scene .right")[i].onclick = function() {
            $(this).parents(".scene_public").hide();
            $(this).parents(".scene_public").next().show();
            $(this).parents(".scene_public").find("video").get(0).pause();
            $(this).parents(".scene_public").next().find("video").get(0).currentTime = 0;
            $(this).parents(".scene_public").next().find("video").get(0).play();
        }
        $(".scene .left")[i].onclick = function() {
            $(this).parents(".scene_public").hide();
            $(this).parents(".scene_public").prev().show();
            $(this).parents(".scene_public").find("video").get(0).pause();
            $(this).parents(".scene_public").prev().find("video").get(0).currentTime = 0;
            $(this).parents(".scene_public").prev().find("video").get(0).play();
        }
    }
    $(".lookFull").click(function() {

    })
})