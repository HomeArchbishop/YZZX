<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="拆家大主教">
    <title>扬州中学模拟器</title>
    <!-- CSS 框架 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <!-- 样式表 -->
    <link rel="stylesheet" href="./static/css/index.css?s=<?php echo time() ?>">
    <style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
</head>

<body>
    <a href="https://github.com/HomeArchbishop/YZZX" class="github-corner" aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
        </svg>
    </a>
    <div class="wrap">
        <!-- 启动页面 -->
        <div class="card" id="start_card">
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="typed"><span></span></h1>
                        <h2 class="typed"><span></span></h2>
                    </div>
                </div>
            </div>
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12 start_item_card">
                        <div>
                            <h1>参加中考</h1>
                            <h5>已中考<span id="times"></span>次</h5>
                        </div>
                        <!--<div class="cover">开始</div>-->
                    </div>
                    <div class="col-xs-12">
                        <div>
                            <h4>
                                框架和原版不一样，是我重新搭建的。<br/>
                                感谢漫社成员的付出。<br/>
                                仅供娱乐，我热爱扬中，尊重老师和同学。请勿过度解读。
                            </h4>
                        </div>
                        <!--<div class="cover">开始</div>-->
                    </div>
                </div>
            </div>
        </div>
        <!-- talent页面 -->
        <div class="card" id="talent_card" style="display:none;">
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>Talents</h1>
                        <h2><span>选择你的天赋</span></h2>
                    </div>
                </div>
            </div>
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12 talent_item_card">
                        <div class="draw_ten_btn"><img src="./library/img/10.png"></div>
                    </div>
                    <div class="col-xs-12 talent_item_confirm_btn">
                        <h1>NEXT</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- Choice页面 -->
        <div class="card" id="choice_card" style="display:none;">
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>CHOICE</h1>
                        <h2><span>分配你的价值</span></h2>
                    </div>
                </div>
            </div>
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12 choice_item_card">
                        <div class="alert_error">
                            还有<span id="alert_score"></span>点没有分配
                        </div>
                        <div>
                            可分配点数：
                            <span id="left_point"></span>
                        </div>
                        <div>
                            成绩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="reduce_icon">-</span>
                            <input value="0">
                            <span class="plus_icon">+</span>
                        </div>
                        <div>
                            颜值&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="reduce_icon">-</span>
                            <input value="0">
                            <span class="plus_icon">+</span>
                        </div>
                        <div>
                            体质&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="reduce_icon">-</span>
                            <input value="0">
                            <span class="plus_icon">+</span>
                        </div>
                        <div>
                            情商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="reduce_icon">-</span>
                            <input value="0">
                            <span class="plus_icon">+</span>
                        </div>
                        <div class="random_btn">
                            <h6>随机分配</h6>
                        </div>
                    </div>
                    <div class="col-xs-12 choice_item_confirm_btn">
                        <h1>NEXT</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- Event页面 -->
        <div class="card" id="event_card" style="display:none;">
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12">
                        <h3>v1.1.0</h3>
                    </div>
                </div>
            </div>
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12 event_item_card">
                    </div>
                    <div class="col-xs-12 event_item_confirm_btn">
                        <h1>总结</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- summary页面 -->
        <div class="card" id="summary_card" style="display:none;">
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12">
                        <h3>总结</h3>
                    </div>
                </div>
            </div>
            <div class="container-fulid">
                <div class="row">
                    <div class="col-xs-12 summary_item_card"></div>
                    <div class="col-xs-12 summary_item_confirm_btn">
                        <h1>再次中考</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- js库 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
    <!--js脚本-->
    <script src="static/js/index.js?s=<?php echo time() ?>"></script>
    <script src="static/js/app.js?s=<?php echo time() ?>"></script>
    <script src="static/js/life.js?s=<?php echo time() ?>"></script>
</body>

</html>