<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/home/img/asset-favicon.ico">
    <title>在线教育网</title>
    <link rel="stylesheet" href="/home/plugins/normalize-css/normalize.css" />
    <link rel="stylesheet" href="/home/plugins/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="/home/css/page-learing-personal-all-course.css" />
</head>

<body>
    <!-- 页面头部 -->
    <!--头部导航-->
    <header>
        <div class=" learingHeader">
            <nav class="navbar container">
                <div class="navbar-left"><img src="/home/img/asset-logoIco.png" alt=""></div>
                <div class="navbar-left">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="travel.index.html" target="_blank">首页</a></li>
                        <li><a href="#">课程</a></li>
                        <li><a href="#">职业测评</a></li>
                        <li><a href="#">学习中心</a></li>
                    </ul>
                </div>
                <div class="navbar-left"><input type="text" class="input-search" placeholder="输入查询关键词"><input type="submit" class="search-buttom"></div>
                <div class="navbar-right"><a href="#">登录</a><a href="#">注册</a></div>
            </nav>
        </div>
    </header>
    <div class="personal-header" style="background-image: url(/home/img/asset-temp1.jpg);">
        <div class="personal-info">
            <p>
                <h1>吴雪</h1>
            </p>
            <p>Web前端工程师 学习时长 48小时35分</p>
        </div>
        <!--<div class="container">-->
        <!--<div class="col-lg-2"><img src="/home/img/logoIco.png" alt=""></div>-->
        <!--<div class="col-lg-4 title text-left">学习中心</div>-->
        <!--<div class="col-lg-6 text-right"><input type="text" class="input-search" placeholder="输入查询关键词"><input type="submit" class="search-buttom"></div>-->
        <!--</div>-->
    </div>

    <!-- 页面 -->
    <div class="container personal-content-box" style="background: #fff;">
        <div class="personal-nav pull-left">
            <div class="nav nav-stacked text-left">
                <div class="my-ico"><img src="/home/img/asset-myimg.jpg" alt=""></div>
                <div class="item">
                    <li><a href="{{url('/home/student/master')}}" class="glyphicon glyphicon-tower"> 我的课程<i class="pull-right">></i></a></li>
                    <li class="active"><a href="{{url('/home/student/allCourse')}}" class="glyphicon glyphicon-list-alt"> 全部课程<i class="pull-right">></i></a> </li>
                    <li><a href="{{url('/home/student/setting')}}" class="glyphicon glyphicon-cog"> 设置<i class="pull-right">></i></a></li>
                    <li><a href="{{url('/home/student/logout')}}" class="glyphicon glyphicon-log-out"> 退出<i class="pull-right">></i></a></li>
                </div>
            </div>
        </div>
        <div class="personal-content pull-right">
            <div class="table-responsive learing-list">
                <table class="table">
                    <tr>
                        <th class="control-label">方向：</th>
                        <td class="btn-group"><a href="#" class="btn active">全部</a><a href="#" class="btn">数据分析师</a><a href="#" class="btn">机器学习工程师</a><a href="#" class="btn">前端开发工程师</a><a href="#" class="btn">人工智能工程师</a>
                            <a href="#" class="btn">全栈工程师</a><a href="#" class="btn">iOS工程师</a><a href="#" class="btn">VR开发者</a><a href="#" class="btn">商业预测分析师</a>
                            <a href="#" class="btn">深度学习</a><a href="#" class="btn">Android开发工程师</a>
                        </td>
                    </tr>
                    <tr>
                        <th>院校 ：</th>
                        <td class="btn-group"><a href="#" class="btn active">全部</a><a href="#" class="btn">清华大学</a><a href="#" class="btn">厦门大学</a><a href="#" class="btn">复旦大学</a><a href="#" class="btn">人工智能工程师</a>
                            <a href="#" class="btn">武汉大学</a><a href="#" class="btn">中央财经大学</a><a href="#" class="btn">西安电子科技大学</a><a href="#" class="btn">哈尔滨工业大学</a>
                            <a href="#" class="btn">北京大学</a><a href="#" class="btn">中国人民大学</a><a href="#" class="btn">哈尔滨工业大学</a><a href="#" class="btn">清华大学</a>
                            <a href="#" class="btn">厦门大学</a><a href="#" class="btn">复旦大学</a><a href="#" class="btn">中央财经大学</a><a href="#" class="more">更多</a>
                        </td>
                    </tr>
                    <tr>
                        <th>分类 ：</th>
                        <td class="btn-group"><a href="#" class="btn active">全部</a><a href="#" class="btn">体系课程</a><a href="#" class="btn">大数据</a><a href="#" class="btn">云计算</a></td>
                    </tr>
                    <tr>
                        <th>等级 ：</th>
                        <td class="btn-group"><a href="#" class="btn active">全部</a><a href="#" class="btn">初级</a><a href="#" class="btn">中级</a><a href="#" class="btn">高级</a></td>
                    </tr>
                    <tr>
                        <th>证书 ：</th>
                        <td class="btn-group"><a href="#" class="btn active">全部</a><a href="#" class="btn">有</a><a href="#" class="btn">无</a></td>
                    </tr>
                </table>
            </div>
            <div class="list-cont-left">
                <div class="tit">
                    <ul class="nav nav-tabs ">
                        <li class="active"><a href="#">推荐</a></li>
                        <li><a href="#">最新</a></li>
                        <li><a href="#">热评</a></li>
                        <div class="page navbar-right">
                            <span class="">1/28</span>
                            <a href="#" class="prev">
                                <</a>
                                    <a href="#" class="next">></a>
                        </div>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="content-list">
                        <li class="">
                            <img src="/home/img/widget-1.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-2.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-3.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-4.png" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-5.png" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-2.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-3.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-1.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-4.png" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-5.png" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-2.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-3.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="">
                            <img src="/home/img/widget-1.jpg" alt="AA">
                            <div class="tit">程序设计语言 <span>高</span></div>
                            <div>武汉大学</div>
                            <div>1门课程</div>
                        </li>
                        <li class="clearfix"></li>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="go-problem-feedback">
                帮助和常见问题 <a href="#" class="">问题反馈</a>
            </div>
        </div>
    </div>
    <!-- 页面 css js -->
    <script type="text/javascript" src="/home/plugins/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="/home/plugins/bootstrap/dist/js/bootstrap.js"></script>
    <script>
        $('.table .btn').on('click', function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })


        $('.list-cont-left .nav-tabs li').on('click', function() {
            $(this).addClass("active").siblings().removeClass('active');
        })


        $(function() {
            $(window).scroll(function() {
                console.log($(this)[0].scrollY);
                if ($(this)[0].scrollY > 155) {
                    console.log(1);
                    $('.personal-nav').css({
                        'position': 'fixed',
                        'top': 10
                    });
                    $('.personal-nav img').css({
                        'width': '140',
                        'height': '140'
                    });
                } else if ($(this)[0].scrollY <= 155) {
                    $('.personal-nav').css({
                        'position': 'relative',
                        'top': -160
                    });
                    $('.personal-nav img').css({
                        'width': '180',
                        'height': '180'
                    });
                };
            })
        })
    </script>
</body>