<?php
    ;//$content = json_decode(file_get_contents("./event_o.json"), true);
    $json = [];
    $json["0"] = [
        "date" => "0",
        "event" => [
            10000,
            20000
        ]
    ];
    $json["1"] = [
        "date" => "1",
        "event" => [
            10002,
            10003
        ]
    ];
    $json["*"] = [
        "date" => "*",
        "event" => [
            10004,
            10005,
            10006,
            10007,
            10008,
            10009,
            10010,
            10011,
            10012,
            10013,
            10014,
            10015,
            10016,
            10017,
            10018,
            10019,
            10020,
            10021,
            10022,
            10023,
            10024,
            10025,
            10026,
            10027,
            10028,
            10029,
            10030,
            10031,
            10032,
            10033,
            10034,
            10035,
            10036,
            10037,
            10038,
            10039,
            10040,
            10041,
            10042,
            10043,
            10044,
            10045,
            10046,
            10047,
            10048,
            10049,
            10050,
            10051,
            10052,
            10053,
            10054,
            10055,
            10056,
            10057,
            10058,
            10059,
            10060,
            10061,
            10062,
            10063,
            10064,
            10065,
            10066,
            10067,
            10068,
            10069,
            10070,
            10071,
            10072,
            10073,
            10074,
            10075,
            10076,
            10077,
            10078,
            10079,
            10080,
            10081,
            10082,
            10083,
            10084,
            10085,
            10086,
            10087,
            10088,
            10089,
            10090,
            10091,
            10092,
            10093,
            10094,
            10095,
            10096,
            10097,
            10098,
            10099,
            10100,
            10101,
            10102,
            10103,
            10104,
            10105,
            10106,
            10107,
            10108,
            10109,
            10110,
            10111,
            10112,
            10113,
            10114,
            10115,
            10116,
            10117,
            10118,
            10119,
            10120,
            10121,
            10122,
            10123,
            10124,
            10125,
            10126,
            10127,
            10128,
            10129,
            10130,
            10131,
            10132,
            10133,
            10134,
            10135,
            10136,
            10137,
            10138,
            10139,
            10140,
            10141,
            10142,
            10143,
            10144,
            10145,
            10146,
            10147,
            10148,
            10149,
            10150,
            10151,
            10152,
            10153,
            10154,
            10155,
            10156,
            10157,
            10158,
            10159,
            10160,
            10161,
            10162,
            10163,
            10164,
            10165,
            10166,
            10167,
            10168,
            10199,
            10200,
            10201,
            10202,
            10203,
            10204
        ]
    ];

    for($i = 2;$i < 3;$i++) {
        $json[strval($i)] = [
            "event" => []
        ];
        for($j = 10004;$j < 10205;$j++) {
            array_push($json[strval($i)]["event"], $j);
        }
    }
    file_put_contents("./date2.json",json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
?>