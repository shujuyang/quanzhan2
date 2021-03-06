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
    <link rel="stylesheet" href="..//home/plugins/bootstrap-Validator/bootstrapValidator.css" />
    <link rel="stylesheet" href="/home/css/page-learing-teacher-register.css" />
</head>

<body>
    <!-- 页面 -->
    <div class="register">
        <div class="register-head">
            <div class="wrap">
                <a href="javascript:;" class="logo">
                <img src="/home/img/asset-logoico.png" alt="logo" width="200">
            </a>
                <div class="gologin">我有账号 去<a href="javascript:;">登录</a></div>
            </div>
        </div>
        <div class="register-body">
            <img src="/home/img/page-register_img.jpg" alt="" class="register-ico">
            <form class="form-horizontal" id="regStudentForm">
                <ul class="r-position teacher">
                    <li>
                        <div class="page-header">
                            <h3>欢迎注册在线教育</h3>
                        </div>
                    </li>
                    <li>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">姓名</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" name="s" placeholder="请输入真实姓名">
                                <span class="verif-span">请输入5-25个字符</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">昵称</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" name="verif" placeholder="请输入昵称">
                                <span class="verif-span">请输入5-25个字符</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">性别</label>
                            <div class="col-sm-9">
                                <div class="radio">
                                    <label>
                                    <input type="radio" name="sex">女
                                </label>
                                    <label>
                                    <input type="radio"  name="sex">男
                                </label>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group select2">
                            <label class="col-sm-3 control-label">所在地</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                <option>省</option>
                            </select>
                                <select class="form-control">
                                <option>市</option>
                            </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group select3">
                            <label class="col-sm-3 control-label">生日</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                <option>1991</option>
                            </select>
                                <select class="form-control month-day">
                                <option>12</option>
                            </select>
                                <select class="form-control month-day">
                                <option>12</option>
                            </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">就职院校</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                <option>职业</option>
                            </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">职称</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                <option>教授</option>
                            </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">专业</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                <option>计算机编程</option>
                            </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">手机号码</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" name="phone" placeholder="请输入真实姓名">
                                <span class="verif-span">请输入5-25个字符</span>
                            </div>
                        </div>
                    </li>
                    <li class="mag-left">
                        <div class="checkbox">
                            <label>
                            <input type="checkbox">同意协议并注册
                            <a href="javascript:;">《学成网注册协议》</a>
                        </label>
                        </div>
                    </li>
                    <li class="mag-left">
                        <button name="register" type="button" class="btn btn-primary">提交申请</button>
                    </li>
                </ul>
            </form>
        </div>
        <div class="register-footer">
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

        </div>
    </div>
    <!--验证框架-->
    <!-- 页面 css js -->
    <script type="text/javascript" src="/home/plugins/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="/home/plugins/bootstrap/dist/js/bootstrap.js"></script>
    <script src="/home/plugins/bootstrap-Validator/bootstrapValidator.js"></script>
    <script src="/home/plugins/bootstrap-Validator/zh_CN.js"></script>
    <script src="/home/js/page-learning-teacher-register.js"></script>
    <script>
        $(document).ready(function() {
            /**
             * 下面是进行插件初始化
             * 你只需传入相应的键值对
             * */
            $("#defaultForm").submit(function(ev) {
                ev.preventDefault();
            });
            $('[name=button]').on("click", function() {
                var bootstrapValidator = $("#defaultForm").data('bootstrapValidator');
                bootstrapValidator.validate();
                if (bootstrapValidator.isValid())
                    $("#defaultForm").submit();
                else return;
            });
            $('#defaultForm').bootstrapValidator({
                message: 'This value is not valid',
                feedbackIcons: { /*输入框不同状态，显示图片的样式*/
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: { /*验证*/
                    username: { /*键名username和input name值对应*/
                        message: 'The username is not valid',
                        validators: {
                            notEmpty: { /*非空提示*/
                                message: '用户名不能为空'
                            },
                            stringLength: { /*长度提示*/
                                min: 6,
                                max: 30,
                                message: '用户名长度必须在6到30之间'
                            } /*最后一个没有逗号*/
                        }
                    },
                    password: {
                        message: '密码无效',
                        validators: {
                            notEmpty: {
                                message: '密码不能为空'
                            },
                            stringLength: {
                                min: 6,
                                max: 30,
                                message: '用户名长度必须在6到30之间'
                            }
                        }
                    }
                }
            });
        });
    </script>
</body>