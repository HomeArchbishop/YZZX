/*
 * @Author: 拆家大主教 
 * @Date: 2021-09-05 14:30:26 
 * @Last Modified by: 拆家大主教
 * @Last Modified time: 2021-09-08 17:01:47
 */

;function Life() {
    let _this = this;

    let FIRST_2 = true; // 初始两天
    let is_BRANCH = false; // 支线
    let NEW = true; // 新生

    let DAT = [];
    let BRANCH_DAT = [];

    let TLT = [];
    let TLT_used = [];
    let EVT = [];

    let ACH = null;
    let CHR = null;
    let STR = null;
    let EMQ = null;
    
    let SPR = null;
    
    let MRK = null;

    this.Init = function() {
        FIRST_2 = true;
        is_BRANCH = false;
        TLT_used = [];
        NEW = true;
        DAT = [-1]; //! [1016]
        BRANCH_DAT = [0];
        TLT = [];
        EVT = []; //! [10152,10268, 10267]
        ACH = 0;
        CHR = 0;
        STR = 0;
        EMQ = 0;
        SPR = 0;
        MRK = 4;
    }

    this.Check_talent_exclusive = function(dic) {
        let is_ok = true;
        dic.forEach(id => {
            talents_dic[id].exclusive?.forEach(value => {
                if (dic.includes(value)) {
                    is_ok = false;
                }
            })
        });
        return is_ok;
    }

    this.Set_talent = function(dic) {
        TLT = dic;
        console.log(TLT);
        TLT.forEach(id => {
            if(!talents_dic[id].condition) {
                ACH += talents_dic[id].effect?. ACH || 0;
                CHR += talents_dic[id].effect?. CHR || 0;
                STR += talents_dic[id].effect?. STR || 0;
                EMQ += talents_dic[id].effect?. EMQ || 0;
                SPR += talents_dic[id].effect?. SPR || 0;
                TLT_used.push(id);
            }
        });
    }

    this.Set_choice = function(dic) {
        ACH += dic.ACH;
        CHR += dic.CHR;
        STR += dic.STR;
        EMQ += dic.EMQ;
    }

    this.Cal_Date = function(valueTime){
        let startDate = "2020/9/1";
        let date = new Date(startDate);
        let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + valueTime);
        let year2 = newDate.getFullYear();
        let month2 = newDate.getMonth() + 1;
        let day2 = newDate.getDate();
        return year2  + "/" + month2 + "/" + day2;
    }

    this.Next = function(id) {
        let is_ask_for = !!id;

        let add_date = FIRST_2
        ? 1
        : Math.ceil(Math.random() * 11);

        // 高考完毕，进行跳转
        add_date = (EVT.contains([10268, 10267]) && !is_BRANCH)
        ? (1019 - Number(DAT[0]))
        : add_date;

        // 支线特判 10296-走进树人堂事件
        EVT.contains([10269])
        ? (
            (is_BRANCH = true)
            && (date_dic["*"] = date_dic["BRANCH"])
        )
        : null;

        DAT[0] == 2 ? FIRST_2 = false : null

        id = id || String(
            (date_dic[DAT[0] + add_date] || date_dic["*"])
            .event[
                Math.floor(
                    Math.random() * (date_dic[DAT[0] + add_date] || date_dic["*"])
                    .event.length
                )
            ]
        ).slice(0,5)

        let item = events_dic[id];

        if(!is_ask_for && !this.Check(item)) {
            return this.Next();
        }
        
        !is_ask_for ? DAT[0] += add_date : null;
        // 支线时间+1
        is_BRANCH && (BRANCH_DAT[0]++);
        
        let text = "";

        this.Record(item);
    
        text += this.Talent(item);

        text += item.event;
        //text += item.postEvent || "";

        //this.Record(item);
        
        text += this.Branch(item);
        
        (MRK < 1 && DAT[0] && !is_ask_for && item.id !== 99999 && !is_BRANCH)
        ? text += this.Next("30000").text
        : null

        return {
            date: is_BRANCH ? "SRT事纪" + BRANCH_DAT[0] : this.Cal_Date(DAT[0]),
            text: text,
            expel: MRK < 1
        }
    }

    this.Check = function(item) {
        //console.log(item.id);
        if(item.NoRandom) {return false;}

        let exclude = item.exclude
            ? item.exclude
            .replace(/\?/g, ".contains(")
            .replace(/\]/g, "])")
            .replace(/\&/g, "##")
            .replace(/\|/g, "&&")
            .replace(/##/g, "||")
            .replace(/\!/g, ".notContains(")
            : false;
        let include = item.include
            ? item.include
            .replace(/\?/g, ".contains(")
            .replace(/\]/g, "])")
            .replace(/\&/g, "&&")
            .replace(/\|/g, "||")
            .replace(/\!/g, ".notContains(")
            : true
        //console.log(item.id,"exclude",exclude,"\ninclude",include);
        //console.log(DAT,item.id,eval(exclude),eval(include));
        //console.log(item.id, eval(exclude), eval(include));
        return !eval(exclude) && eval(include)
    }

    this.Record = function(item) {
        EVT.push(item.id);
        ACH += item.effect ?. ACH || 0;
        CHR += item.effect ?. CHR || 0;
        STR += item.effect ?. STR || 0;
        EMQ += item.effect ?. EMQ || 0;
        SPR += item.effect ?. SPR || 0;
        MRK += item.effect ?. MRK || 0;
        //console.log("ACH",ACH,"CHR",CHR,"STR",STR,"EMQ",EMQ,"SPR",SPR);
    }

    this.Branch = function(item) {
        let _return = "";
        if(item.branch) {
            item.branch.reverse();
            item.branch.forEach(branch => {
                let condition = branch.split(":")[0]
                    .replace(/\?/g, ".contains(")
                    .replace(/\]/g, "])")
                    .replace(/\&/g, "&&")
                    .replace(/\|/g, "||")
                    .replace(/\!/g, ".notContains(")
                if(eval(condition)) {
                    _return = this.Next(
                        branch.split(":")[1]
                    ).text;
                }
            });
        }
        return _return;
    }

    this.Talent = function() {
        let _return = "";
        TLT.forEach(id => {
            let condition = talents_dic[id].condition
            ?. replace(/\?/g, ".contains(")
            .replace(/\]/g, "])")
            .replace(/\&/g, "&&")
            .replace(/\|/g, "||")
            .replace(/\!/g, ".notContains(")
            || false;
            if(
                eval(condition) 
                && !TLT_used.includes(id)
            ) {
                ACH += talents_dic[id].effect?. ACH || 0;
                CHR += talents_dic[id].effect?. CHR || 0;
                STR += talents_dic[id].effect?. STR || 0;
                EMQ += talents_dic[id].effect?. EMQ || 0;
                SPR += talents_dic[id].effect?. SPR || 0;
                TLT_used.push(id);
                _return += "天赋【" + talents_dic[id].name + "】发动：" + talents_dic[id].description + "<br />";
            }
        });
        return _return;
    }


    this.Get_summary = function() {
        return {
            DAT: DAT[0],
            ACH: ACH,
            CHR: CHR,
            STR: STR,
            EMQ: EMQ,
            SPR: SPR,
            MRK: MRK
        }
    }
}