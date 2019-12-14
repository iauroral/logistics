# 物流运输平台

声明：本系统不再维护，仅供《河北工业大学》学生学习交流使用。

## 河北工业大学 软件工程`2016`级 软件设计与编程实践 作品

**勤慎公忠**

**完成人：张喜硕 曽斯维 刘超 刘振飞**

![河北工业大学](images/hebut.png)

## 软件架构

![architecture](images/architecture.png)

## 项目启动

### 开发环境

[NGINX](http://nginx.org/en/download.html)
[Chrome](https://www.google.cn/intl/zh-CN/chrome/)

### 前台启动

前台采用`Grunt`管理项目(`Grunt`现在已被开源社区弃用，以后的项目中会考虑使用`gulp`与`webpack`等更流行的工具)。

```
cd webApp
npm install
bower install
grunt live
```

`npm`与`bower`的配置文件维护的不好，所以可能缺少一些包，如果前台无法启动，请找到`data`目录下的`template.zip`文件，解压，并拷贝其中的`node_modules`与`bower_components`。

### 后台启动

```
cd api
mvn spring-boot:run
```
