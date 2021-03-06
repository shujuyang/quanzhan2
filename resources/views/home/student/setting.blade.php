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
    <link rel="stylesheet" href="/home/css/page-learing-setting.css" />
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
    <div class="container" style="background: #fff;">
        <div class="personal-nav pull-left">
            <div class="nav nav-stacked text-left">
                <div class="my-ico"><img src="/home/img/asset-myimg.jpg" alt=""></div>
                <div class="item">
                    <li><a href="{{url('/home/student/master')}}" class="glyphicon glyphicon-tower"> 我的课程<i class="pull-right">></i></a></li>
                    <li><a href="{{url('/home/student/allCourse')}}" class="glyphicon glyphicon-list-alt"> 全部课程<i class="pull-right">></i></a> </li>
                    <li class="active"><a href="{{url('/home/student/setting')}}" class="glyphicon glyphicon-cog"> 设置<i class="pull-right">></i></a></li>
                    <li><a href="{{url('/home/student/logout')}}" class="glyphicon glyphicon-log-out"> 退出<i class="pull-right">></i></a></li>
                </div>
            </div>
        </div>
        <div class="personal-content pull-right">
            <div class="learing-setting-cont">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#info" data-toggle="tab">个人信息</a></li>
                    <li><a href="#pho" data-toggle="tab">头像照片</a></li>
                    <li><a href="#password" data-toggle="tab">更改密码</a></li>
                </ul>
                <ul class="tab-content">
                    <li id="info" class="tab-pane active">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="name" class="col-sm-1 control-label text-center">昵称:</label>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" id="name" placeholder="请输入昵称">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-1 control-label">性别:</label>
                                <label class="checkbox-inline">
                        <input type="radio" name="six" value="option1" checked> 男
                    </label>
                                <label class="checkbox-inline">
                        <input type="radio" name="six" value="option2"> 女
                    </label>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-1 control-label addr">所在地:</label>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入居住地址">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-1 control-label">生日:</label>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="exampleInputName3" placeholder="请输入生日">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-1 control-label">职业:</label>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="exampleInputName4" placeholder="请输入职业">
                                </div>
                            </div>
                        </form>
                    </li>
                    <li id="pho" class="tab-pane">
                        <form action="" class="form-horizontal">
                            <div class="form-group">
                                <!--<label class="col-sm-2">当前头像：</label>-->
                                <div class="head-ico">
                                    <img src="/home/img/asset-logo.png" width="80" alt="">
                                    <div class="text-center">当前头像</div>
                                </div>
                                <div class="up-ico hv-poin">上传头像<input type="file"></div>
                            </div>
                        </form>
                    </li>
                    <li id="password" class="tab-pane change-pass">
                        <form action="" class="form-horizontal">
                            <div class="form-group">
                                <label for="old-password" class="col-md-1 control-label">当前密码:</label>
                                <div class="col-md-3">
                                    <input type="password" class="form-control" id="old-password" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="new-password" class="col-md-1 control-label">新密码:</label>
                                <div class="col-md-3">
                                    <input type="password" class="form-control" id="new-password" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="repassword" class="col-md-1 control-label">确认密码:</label>
                                <div class="col-md-3">
                                    <input type="password" class="form-control" id="repassword" placeholder="Password">
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
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
        $(function() {
            $(window).scroll(function() {
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