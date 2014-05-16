Jekyll主题:JekyllPure版本V0.4.2.1
==========
Demo:[曾经不知你好'Blog](http://liyouhai.com/)

最后更新时间:2014-5-16 22:00


----------
|版本   | 时间  | 说明|
| :-------- | :--------| :------ |
| V0.4.2| 2014-05-12 22:00|第一个版本  |
|V0.4.2.1| 2014-5-16 22:00|修复提交github生成的错误,错误原因rss.xml有全局变量|

----------
|项目基于   | 说明  | 版本 |
| :-------- | :--------| :--: |
|[Jekyll](http://jekyllrb.com/)  |静态博客| Version 2.0.2|
|[Pure](http://purecss.io/)     | 雅虎前端框架|Version 0.4.2|
|[Fontawesome](http://fontawesome.io/)     |字体图标| Version 4.0.3|
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

这个系统是基于 [jekyll](http://jekyllrb.com/) 搭建的，为了方便本地编辑和看效果，需要将本项目 clone 至本地环境，并在本机安装 jekyll 环境。

### Mac/Linux 下

请使用如下命令（其中 gem 是 [Ruby](https://www.ruby-lang.org/)  的包管理工具）安装 jekyll（如果遇到权限问题请在前面加 sudo）：

    gem install jekyll

如果在 Mac 下安装遇到编译报错，可以试试用 [Brew](http://brew.sh/) 安装新版 ruby

    brew install ruby

### Windows 下

jekyll 官方对 winodws 的支持程度很低，推荐使用 [Building portable Jekyll for Windows](http://www.madhur.co.in/blog/2013/07/20/buildportablejekyll.html)，另外这里附上网盘地址方便大家下载：[PortableJekyll 1.3.0[百度网盘]](http://pan.baidu.com/s/1dDqtzUT)

下边以 PortableJekyll 的解压目录为 `e:\jekyll` 介绍环境变量的配置：

1. 在环境变量中新建变量：
	JEKYLL_HOME 取值为 `e:\jekyll`

2. 为 PATH 变量添加如下内容：
	`%JEKYLL_HOME%\ruby\bin;%JEKYLL_HOME%\devkit\bin;%JEKYLL_HOME%\git\bin;%JEKYLL_HOME%\Python\App;%JEKYLL_HOME%\devkit\mingw\bin;%JEKYLL_HOME%\curl\bin`

完成 jekyll 配置后，通过如下命令检查是否配置成功：

	jekyll -h

### 本地预览

完成 jekyll 的安装后，在源码目录运行如下命令，就能在 localhost:4000 中预览了：

    jekyll serve --watch

## 如何编辑？

- 更改自己的多说id
- 全文搜索功能去tapirgo生成.提交`rss.xml`地址.会返回`token`
- 发布文章`duoshuo: false` 可关闭评论
- 发布文章`avatarimg: "http://liyouhai.com/images/lindachung.jpg"` 为首页文章小头像
