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
    <link rel="stylesheet" href="/home/css/page-learing-problem-feedback.css" />
</head>

<body data-spy="scroll" data-target="#articleNavbar" data-offset="150">
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
    <div class="problem-head">
        <div class="container">

        </div>
    </div>
    <!--主体内容-->
    <div class="container">
        <div class="problem-feedback">
            <div class="top">首页 > 问题反馈</div>
            <div class="problem-form">
                <div class="tit">提交请求</div>
                <form action="#">
                    <table class="table">
                        <tr>
                            <th>反馈类型:</th>
                            <td>
                                <label>
                                <input type="radio" name="feedback-type" id="feed-type1" value="" checked>
                                课程问题
                            </label>
                                <label>
                                <input type="radio" name="feedback-type" id="feed-type2" value="" >
                                意见建议
                            </label>
                                <label>
                                <input type="radio" name="feedback-type" id="feed-type3" value="" >
                                信息纠错
                            </label>
                                <label>
                                <input type="radio" name="feedback-type" id="feed-type4" value="" >
                                其他问题
                            </label>
                            </td>
                        </tr>
                        <tr>
                            <th>留言内容:</th>
                            <td><textarea class="form-control content" name="content" rows="5" placeholder="请输入留言内容"></textarea></tr>
                        <tr>
                            <th>手机号码:</th>
                            <td><input type="text" class="form-control phone" name="phone" placeholder="请输入手机号"></td>
                        </tr>
                        <tr class="lase-bord">
                            <th>验证码:</th>
                            <td><input type="text" class="form-control Verification-Code" mame="Verification-Code" placeholder="请输入验证码"></td>
                        </tr>
                    </table>
                    <div class="text-center problem-botton"><input type="button" class="btn btn-primary" value="提 交" /></div>
                </form>
            </div>
            <!--<div class="problem-form">-->
            <!--<div class="prompt row">-->
            <!--<div class=" glyphicon glyphicon-ok-sign col-lg-2"></div>-->
            <!--<div class="col-lg-10">-->
            <!--<p>您的反馈已经被记录，感谢您的支持</p>-->
            <!--<p>将在3s后自动跳转到 <a href="#">首页</a></p>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
        </div>
    </div>
    </div>
    <!-- 页面底部 -->
    <!--底部版权-->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div>
                        <!--<h1 style="display: inline-block">学成网</h1>--><img src="/home/img/asset-logoIco.png" alt=""></div>
                    <div>学成网致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程。</div>
                    <div>© 2017年XTCG Inc.保留所有权利。-沪ICP备15025210号</div>
                    <input type="button" class="btn btn-primary" value="下 载" />
                </div>
                <div class="col-lg-5 row">
                    <dl class="col-lg-4">
                        <dt>关于学成网</dt>
                        <dd>关于</dd>
                        <dd>管理团队</dd>
                        <dd>工作机会</dd>
                        <dd>客户服务</dd>
                        <dd>帮助</dd>
                    </dl>
                    <dl class="col-lg-4">
                        <dt>新手指南</dt>
                        <dd>如何注册</dd>
                        <dd>如何选课</dd>
                        <dd>如何拿到毕业证</dd>
                        <dd>学分是什么</dd>
                        <dd>考试未通过怎么办</dd>
                    </dl>
                    <dl class="col-lg-4">
                        <dt>合作伙伴</dt>
                        <dd>合作机构</dd>
                        <dd>合作导师</dd>
                    </dl>
                </div>
            </div>
        </div>
    </footer>

    <!-- 页面 css js -->
    <script type="text/javascript" src="/home/plugins/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="/home/plugins/bootstrap/dist/js/bootstrap.js"></script>
</body>