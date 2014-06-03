---
layout: post
title: Jekyll主题 &bull;JekyllPure
description: "Static Markdown (or Textile), Liquid, HTML & CSS go in. Static sites come out ready for deployment. Jekyll template guide,JekyllPure是一个基于jekyll主题,集成了各种方便的插件,以及简洁的页面"
category: Project
avatarimg: "http://liyouhai.com/images/lindachung.jpg"
tags : [ Jekyll ,静态博客,主题]
duoshuo: false
---

![](http://liyouhai.qiniudn.com/2014-05-11-opensource-jekyll-theme-jekyllpure.jpg/top)
> JekyllPure版本V0.5.0 <br>
> 最后更新:2014-05-27 16:00
<!-- more -->
Demo:[曾经不知你好'Blog](http://liyouhai.com/)

Github:[JekyllPure'github](https://github.com/liyouhai/JekyllPure)

##版本更新
----------
|版本   | 时间  | 说明|
| :-------- | :--------| :------ |
| V0.4.2| 2014-05-12 22:00|第一个版本  |
|V0.4.2.1| 2014-05-16 22:00|修复提交github生成的错误,错误原因rss.xml有全局变量|
|V0.5.0|2014-05-27 16:00|1.修复主页分页.标签与分类URL.<br>2.Font Awesome更新为4.1.0<br> 3.替换一些小图标为Font<br> 4.blockquote下的li增加数字前缀样式<br>5.一些导航html移到Public文件夹<br>6.Pure框架更新到V0.5.1|

##使用技术

----------
|项目基于   | 说明  | 版本 |
| :-------- | :--------| :--: |
|[Jekyll](http://jekyllrb.com/)  |静态博客| Version 2.0.2|
|[Pure](http://purecss.io/)     | 雅虎前端框架|Version 0.4.2|
|[Fontawesome](http://fontawesome.io/)     |字体图标| Version 4.1.0|
|[Jquery](http://jquery.com/)|javascript|Version 1.11.2|
|[NProgress.js](http://ricostacruz.com/nprogress/)|页面顶部加载条|Version 0.1.2|
|[TOC.js](http://projects.jga.me/toc)|文章目录生成|Version 0.2.0|
|[fancyBox](http://fancybox.net/)|图片盒子|Version 2.1.5|
|[qrcode](http://jeromeetienne.github.io/jquery-qrcode/)|网址生成二维码|Version 1.0.0|
|[tagcloud.js](http://addywaddy.github.io/jquery.tagcloud.js/)|标签云|Version 1.0.0|
|[tapirgo](http://tapirgo.com/)|全文搜索插件|Version 1.0.0|
|[Jwplayer](http://www.jwplayer.com/)|HTML5视频插件|Version 6.2.0|
|[Duoshuo](http://duoshuo.com/)|多说评论|Version 1.0.0|

----------
## 环境搭建

0. 小前提

1. 需了解使用版本控制Git

2. 需了解jekyll

3. 需了解使用Github、或GitCafe

4. 对html等熟悉.或程序员、或适合折腾的人

Mac/Linux下:

请使用如下命令（其中 gem 是 [Ruby](https://www.ruby-lang.org/)  的包管理工具）安装 jekyll（如果遇到权限问题请在前面加 sudo）：

    gem install jekyll

Windows下:

官方对 *winodws* 的支持程度很低，推荐使用 [Building portable Jekyll for Windows](http://www.madhur.co.in/blog/2013/07/20/buildportablejekyll.html)，附上网盘地址方便大家下载：[PortableJekyll 1.3.0[百度网盘]](http://pan.baidu.com/s/1dDqtzUT)

下边以 PortableJekyll 的解压目录为 `e:\jekyll` 介绍环境变量的配置：

1. 在环境变量中新建变量：
	JEKYLL_HOME 取值为 `e:\jekyll`

2. 为 PATH 变量添加如下内容：
	`%JEKYLL_HOME%\ruby\bin;%JEKYLL_HOME%\devkit\bin;%JEKYLL_HOME%\git\bin;%JEKYLL_HOME%\Python\App;%JEKYLL_HOME%\devkit\mingw\bin;%JEKYLL_HOME%\curl\bin`

4. 完成 jekyll 配置后，通过如下命令检查是否配置成功：`jekyll -h`

5. 以上为百度[FEX](https://github.com/fex-team/fex-team.github.io)提供的方法、本人使用的是`Ruby200-x64`原始安装、Jekyll新版本使用基本完美


完成 jekyll 的安装后，需要将[本项目](https://github.com/liyouhai/JekyllPure) clone 至本地环境，或Download zip按钮<br>
*cmd*下*cd*进去目录目录运行如下命令，就能在 localhost:4000 中预览了：

    jekyll serve -watch (或jekyll serve -w

关于Jekyll:

jekyll是一个简单的免费的Blog生成工具，类似WordPress。但是和WordPress又有很大的不同，原因是jekyll只是一个生成静态网页的工具，不需要数据库支持。但是可以配合第三方服务,例如多说评论。最关键的是jekyll可以免费部署在Github上，而且可以绑定自己的域名

1. Jekyll官网 [http://jekyllrb.com/](http://jekyllrb.com/)

2. Jekyll中文网 [http://jekyllcn.com/](http://jekyllcn.com/),

3. Jekyll Themes 主题 [http://jekyllthemes.org/](http://jekyllthemes.org/),

4. **Google搜索**site:github.io [github.io][http://203.208.46.148/#newwindow=1&q=site:github.io].

5. 如果你熟悉html等.完全可以自己弄首页与内容页模板就可以搭建博客了、也可以使用本主题.请尊重作者,保留footer主题地址


## 使用说明

详细连接博文:[曾经不知你好'Blog](http://liyouhai.com/project/opensource-jekyll-theme-jekyllpure.html)