/**
 * Created by rayootech on 16/8/6.
 */
var list = ["跑马灯效果数据1", "跑马灯效果数据2", "跑马灯效果数据3", "跑马灯效果数据4", "跑马灯效果数据5", "跑马灯效果数据6"];
var htmlString = "";
for (var i = 0; i < list.length; i++) {
    htmlString += '<a href="#" onmouseover="stop(true)" onmouseout="time(false)"><span>' + list[i] + '</span></a>';
}
$(".m-countdown").html(htmlString);
// showRollling();
var height = 40;    //这个数字是轮播图片的高度
var animationTime = 900; //这个数字是动画时间
var marginTime = 2000; //这个数字是间隔时间
var nowimg = 0;     //信号量
//将图片列表中的第一个节点复制，然后追加到队列的最后。
//$(".m-countdown a:first-child").clone().appendTo(".m-countdown");

var mytimer = false;//启动及关闭按钮 
var timer = null;
function time(mytimer) {
    if(mytimer) return;
    timer = setInterval(
        function () {
            start(animationTime);
        }, marginTime
    );
}
// var timer = null;
// function time(mytimer){
//     if(mytimer) return;
//     start(animationTime);
//     timer = setTimeout(time,marginTime);
// }
function start(animationTime) {
    if (!$(".m-countdown a").is(":animated")) {
        //折腾信号量
        if (nowimg < $(".m-countdown a").length - 1) {
            nowimg = nowimg + 1;
            showAnimate(nowimg, animationTime);
        } else {
            nowimg = 0;
            $(".m-countdown a").each(function (index) {
                if (index == 0) {
                    $(this).css("display", "block");
                }
                else {
                    $(this).css("display", "none");
                }
            }).css("top", "7px");
        }
    }
}
function showAnimate(index, animationTime) {
    $(".m-countdown a").eq(index).css("display", "block");
    // 对被选元素应用“自定义”的动画
    $(".m-countdown a").eq(index - 1).animate(
        {
            // "top": -height * nowimg
            "top": 30
        }
        , animationTime
        , function () {
            $(this).css({ display: "none" });
        }
    );

}
function stop(mytimer) {
    time(mytimer);
    clearInterval(timer);
}
time(false);