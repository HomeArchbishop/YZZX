<?php
    ;$content = json_decode(file_get_contents("./talents_o.json"), true);
    $json = [];
    foreach($content as $ob) {
        $ob2 = [];
        $ob["name"] && $ob2["name"] = $ob["name"];
        $ob["id"] && $ob2["id"] = $ob["id"];
        $ob["description"] && $ob2["description"] = $ob["description"];

        $ob2["effect"] = [];
        $ob["effect:CHR"] && $ob2["effect"]["CHR"] = $ob["effect:CHR"];
        $ob["effect:ACH"] && $ob2["effect"]["ACH"] = $ob["effect:ACH"];
        $ob["effect:STR"] && $ob2["effect"]["STR"] = $ob["effect:STR"];
        $ob["effect:EMQ"] && $ob2["effect"]["EMQ"] = $ob["effect:EMQ"];
        $ob["effect:SPR"] && $ob2["effect"]["SPR"] = $ob["effect:SPR"];
        if($ob2["effect"] == []) unset($ob2["effect"]);

        $ob["condition"] && $ob2["condition"] = $ob["condition"];
        ($ob["grade"] || $ob["grade"] == 0) && $ob2["grade"] = $ob["grade"];
        $ob["status"] && $ob2["status"] = $ob["status"];
        
        $ob2["exclusive"] = [];
        $ob["exclusive1"] && $ob2["exclusive"][0] = $ob["exclusive1"];
        $ob["exclusive2"] && $ob2["exclusive"][1] = $ob["exclusive2"];
        if($ob2["exclusive"] == []) unset($ob2["exclusive"]);
        
        $json[$ob["id"]] = $ob2;
    }
    file_put_contents("./talents.json",json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
?>