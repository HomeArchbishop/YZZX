/*
 * @Author: 拆家大主教 
 * @Date: 2021-09-05 14:26:45 
 * @Last Modified by: 拆家大主教
 * @Last Modified time: 2021-09-08 07:47:55
 */

;function App() {
    let _this = this;

    let is_end = null;

    // 初始化实例
    this.life = null;

    this.Init = function() {
        // 页面总框架监听
        $(".start_item_card").on("click", function () {
            $("#start_card").hide();
            $("#talent_card").show();
        })
        this.life = new Life();
        this.life.Init();
        is_end = false;
    }

    // talent 页面
    let talent_slected = []; // ["1001", "1003"]
    $(".talent_item_card .draw_ten_btn").on("click", function() {
        $(".talent_item_card").html("");
        let talents_list_ten = [];
        for(let i = 0; i < 10; i++) {
            let talent = talents_dic[
                Object.keys(talents_dic)[
                    Math.floor(Math.random() * Object.keys(talents_dic).length)
                ]
            ];
            if(talents_list_ten.includes(talent.id)) {
                i--;
                continue;
            }
            talents_list_ten.push(talent.id);

            let dom = $(`
                <div class="talent_item" id="${talent.id}">
                    【<span class="talent_name">${talent.name}</span>】
                    <span class="talent_description">${talent.description}</span>
                </div>
            `)
            $(".talent_item_card").append(dom);
        }
    })
    $(document).on("click", ".talent_item_card .talent_item", function() {
        talent_slected.includes( talents_dic[$(this).attr("id")].id )
        ? (
            $(this).css("background-color", "var(--color-small-item-bg)")
            && talent_slected.splice(
                talent_slected.indexOf( talents_dic[$(this).attr("id")].id )
                , 1
            )
        )
        : (
            talent_slected.length >= 3
            ? alert("只能选三个")
            : $(this).css("background-color", "var(--color-selected)")
            && talent_slected.push(
                talents_dic[$(this).attr("id")].id
            )
        )
    })
    $(".talent_item_confirm_btn").on("click", function() {
        if(talent_slected.length !== 3) {
            alert("请选择三个");
            return;
        }

        if(
            _this.life.Check_talent_exclusive(talent_slected)
        ) {
            _this.life.Set_talent(talent_slected);
        } else {
            alert("其中有矛盾天赋，请检查。");
            return;
        }
        
        choice_max += _this.Extra_choice_score();
        $("#left_point").html(choice_max - _this.choice_total());

        $(".choice_item_card .alert_error").hide();
        $("#talent_card").hide();
        $("#choice_card").show();
    })



    // 监听choice页面
    const choice_each_max = 10;
    let choice_max = 20;
    this.Extra_choice_score = function() {
        let tmp = 0;
        talent_slected.forEach((id) => {
            tmp += (talents_dic[id].status || 0);
        })
        return tmp;
    };
    this.choice_total = function() {
        let score = 0;
        $(".choice_item_card div input").each(function() {
            score += Number($(this).val());
        })
        return score;
    }
    $(".reduce_icon").on("click", function() {
        $(this).next().val(
            Number($(this).next().val()) == 0
            ? 0
            : Number($(this).next().val()) - 1
        );
        $("#left_point").html(choice_max - _this.choice_total());
    })
    $(".plus_icon").on("click", function() {
        if(_this.choice_total() == choice_max) { return; }
        $(this).prev().val(
            Number($(this).prev().val()) == choice_each_max
            ? choice_each_max
            : Number($(this).prev().val()) + 1
        );
        $("#left_point").html(choice_max - _this.choice_total());
    })
    $(".choice_item_card div input").on("input", function() {
        $(this).val(
            Number($(this).val()) > choice_each_max
            ? choice_each_max
            : (
                Number($(this).val()) < 0
                ? 0
                : $(this).val()
            )
        );
        $(this).val(
            _this.choice_total() > choice_max
            ? Number($(this).val()) + choice_max - _this.choice_total()
            : $(this).val()
        );
        $("#left_point").html(choice_max - _this.choice_total());
    })
    $(".choice_item_card .random_btn").on("click", function() {
        let score_array = [
            Math.floor(choice_max/4) + !!(choice_max % 4),
            Math.floor(choice_max/4) + !!Math.max(choice_max % 4 - 1, 0),
            Math.floor(choice_max/4) + !!Math.max(choice_max % 4 - 2, 0),
            Math.floor(choice_max/4)
        ];
        for(let i = 0; i < 4; i++) {
            let score = Math.floor(Math.random() * (choice_max/4 + 1));
            score_array[i] -= score;
            score_array[(i + 1) % 4] += score;
        }
        $(".choice_item_card div input").each(function(i) {
            $(this).val(score_array[i]);
        });
        $("#left_point").html(choice_max - _this.choice_total());
    })
    $(".choice_item_confirm_btn").on("click", function() {
        choice_max === _this.choice_total()
        ? (
            $(".event_item_confirm_btn").hide()
            && $("#choice_card").hide()
            && $("#event_card").show()
            && _this.life.Set_choice({
                ACH: Number($(".choice_item_card div input")[0].value),
                CHR: Number($(".choice_item_card div input")[1].value),
                STR: Number($(".choice_item_card div input")[2].value),
                EMQ: Number($(".choice_item_card div input")[3].value)
            })
        )
        : (
            $(".choice_item_card .alert_error").children("#alert_score").html(
                choice_max - _this.choice_total()
            )
            && $(".choice_item_card .alert_error").hide(0)
            && $(".choice_item_card .alert_error").slideDown(10)
        )
    })

    // Event页面
    $(".event_item_card").on("click", function() {
        if(is_end) {return;}

        let event_item = _this.life.Next();
        /*
        let event_dic = {date:"2020/09/01", text:"xxx"}
        */
        let dom = $(`
            <div class="event_item">
                <span class="date">${event_item.date}</span>&ensp;
                <span class="state">${event_item.text}</span>
            </div>
        `)
        $(this).append(dom);
        // 滚动到最底部
        $(this).animate({ scrollTop: $(this)[0].scrollHeight - $(this).height() }, 0);
        // 检查开除
        event_item.expel
        ? (
            (is_end = true)
            && $(".event_item_confirm_btn").show()
        )
        : null;
    })
    $(".event_item_confirm_btn").on("click", function() {
        let {DAT, ACH, CHR, STR, EMQ, SPR, MRK} = _this.life.Get_summary();
        $(".summary_item_card").html("");
        $(".summary_item_card").append($(`
            <div class="summary_item bg1">
                成绩：&ensp;<span id="summary_ACH">${ACH}</span>
            </div>
            <div class="summary_item bg1">
                颜值：&ensp;<span id="summary_CHR">${CHR}</span>
            </div>
            <div class="summary_item bg1">
                情商：&ensp;<span id="summary_EMQ">${EMQ}</span>
            </div>
            <div class="summary_item bg1">
                体质：&ensp;<span id="summary_STR">${STR}</span>
            </div>
            <div class="summary_item bg2">
                快乐：&ensp;<span id="summary_SPR">${SPR}</span>
            </div>
            <div class="summary_item bg2">
                在校：&ensp;<span id="summary_DAT">${DAT}</span>
            </div>
            <div class="summary_item bg3">
                总评：&ensp;<span id="summary_SCR">${ACH + CHR + STR + EMQ + SPR + ( DAT / 6) >> 0 }</span>
            </div>
        `));
        $("#event_card").hide();
        $("#summary_card").show();
        // 记录
        localStorage.setItem(
            "yzzx_times",
            parseInt(localStorage.getItem("yzzx_times")) + 1
        )
    })

    // Summary页面
    $(".summary_item_confirm_btn").on("click", function() {
        window.location.reload();
    })
}
