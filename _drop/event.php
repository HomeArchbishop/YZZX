<?php
    ;$content = json_decode(file_get_contents("./event_o.json"), true);
    $json = [];
    foreach($content as $ob) {
        $ob2 = [];
        $ob["event"] && $ob2["event"] = $ob["event"];
        $ob["id"] && $ob2["id"] = $ob["id"];
        $ob["postEvent"] && $ob2["postEvent"] = $ob["postEvent"];
        $ob2["effect"] = [];
        $ob["effect:CHR"] && $ob2["effect"]["CHR"] = $ob["effect:CHR"];
        $ob["effect:ACH"] && $ob2["effect"]["ACH"] = $ob["effect:ACH"];
        $ob["effect:STR"] && $ob2["effect"]["STR"] = $ob["effect:STR"];
        $ob["effect:EMQ"] && $ob2["effect"]["EMQ"] = $ob["effect:EMQ"];
        $ob["effect:SPR"] && $ob2["effect"]["SPR"] = $ob["effect:SPR"];
        $ob["effect:MRK"] && $ob2["effect"]["MRK"] = $ob["effect:MRK"];
        if($ob2["effect"] == []) unset($ob2["effect"]);
        $ob["NoRandom"] && $ob2["NoRandom"] = $ob["NoRandom"];
        $ob["include"] && $ob2["include"] = $ob["include"];
        $ob["exclude"] && $ob2["exclude"] = $ob["exclude"];
        $ob2["branch"] = [];
        $ob["branch1"] && $ob2["branch"][0] = $ob["branch1"];
        $ob["branch2"] && $ob2["branch"][1] = $ob["branch2"];
        if($ob2["branch"] == []) unset($ob2["branch"]);
        $json[$ob["id"]] = $ob2;
    }
    file_put_contents("./events.json",json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
?>