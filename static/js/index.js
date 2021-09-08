/*
 * @Author: 拆家大主教 
 * @Date: 2021-09-03 15:49:08 
 * @Last Modified by: 拆家大主教
 * @Last Modified time: 2021-09-08 17:19:14
 */

;$(function() {
    localStorage.yzzx_times = Number(localStorage.yzzx_times) || 0;
    $("#times").html(localStorage.yzzx_times)

    $("#talent_card").hide();
    $("#choice_card").hide();
    $("#event_card").hide();
    $("#summary_card").hide();

    let h1_type = new Typed('h1.typed span', {
        strings: [
            "<s>都市传说模拟器</s>",
            "YZZX模拟器"
        ],
        typeSpeed: 40,
        backSpeed: 40,
        startDelay: 0,
        backDelay: 500,
        onComplete: () => {
            $("h1.typed").html("<span>YZZX模拟器</span>");
            delete h1_type;
        }
    });
    let h2_type = new Typed('h2.typed span', {
        strings: [
            "Inspired by 人生重开模拟器<br/>作者是一只不愿透露姓名的高中狗",
            "Inspired by 人生重开模拟器<br/>作者是一只不愿透露姓名的大主教"
        ],
        typeSpeed: 40,
        backSpeed: 40,
        startDelay: 0,
        backDelay: 500,
        onComplete: () => {
            $("h2.typed").html("Inspired by 人生重开模拟器<br/>作者是一只不愿透露姓名的大主教");
            delete h2_type;
        }
    });
    anime({
        targets: "#start_card",
        translateY: [200, 0],
        opacity: [0, 2],
        easing: function(el, i, total) {
            return function(t) {
              return Math.pow(Math.sin(t * (i + 1)), total);
            }
        }
    });

    // init
    app = new App();
    app.Init();

    // ajax
    $.get("./library/data/date.json", function(data) {
        date_dic = data;
    }, "json");
    $.get("./library/data/events.json", function(data) {
        events_dic = data;
    }, "json");
    $.get("./library/data/talents.json", function(data) {
        talents_dic = data;
    }, "json");
})


var app = null;
var date_dic = {};
var events_dic = {};
var talents_dic = {};
/*
$(".start_item_card").on("mouseover", function() {
    $(this).children('.cover').css("top", "0");
})
$(".start_item_card").on("mouseout", function() {
    $(this).children('.cover').css("top", "100%");
})
*/

/*
function Date_psb_init(data) {
    let _return = {};
    for(const date_name in data) {
        _return[date_name] = {
            date: date_name,
            event: []
        };
        for(const event_item in data[date_name].event) {
            for(
                let i = 0;
                i < Number(
                    String(data[date_name].event[event_item]).split("*")[1] || 1
                );
                i++
            ) {
                _return[date_name].event.push(
                    String(data[date_name].event[event_item]).slice(0,5)
                )
            }
        }
    }
    return _return;
}
*/


Array.prototype.contains = function(arr) {
    let flag = false;
    arr.forEach(element => {
        flag = this.includes(element) || flag;
    });
    return flag;
}
Array.prototype.notContains = function(arr) {
    let flag = false;
    arr.forEach(element => {
        flag = this.includes(element) || flag;
    });
    return !flag;
}