
// $(document).ready(function () {
//     $.getJSON("../json/zxznfx-01.json",
//         function (data) {
//             alert(data.data[0].LOAD_ID);
//         });
// });   

$(function () {
    $("#btn").click(function () {
        $.getJSON("../json/zxznfx-01.json", function (data) {
            var $jsontip = $("#jsonTip");
            var strHtml = "";
            //存储数据的变量 
            $jsontip.empty();
            //清空内容 
            $.each(data, function (index, info) {
                $.each(info, function (key, val) {
                    console.log("111");
                })

            })
            $jsontip.html(strHtml);
            //显示处理后的数据.
        })
    })
})