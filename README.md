## 物流运输平台

**河北工业大学 软件设计与编程实践**

勤慎公忠

 - 软件工程专业 `162`班 `301`宿舍作品

![河北工业大学](images/hebut.png)

# 软件架构

采用前后台分离架构，前台在`webApp`下，采用`AngularJS`开发。

后台在`api`下，采用`SpringBoot`、`JPA`、`Hibernate`等框架开发。

# 项目架构

# 项目启动

## 反向代理

将本项目的`nginx.conf`引入到本机`nginx`配置文件中。

**示例**

```
include C:/Users/Administrator/github/logistics/nginx.conf;
```

项目中使用

## 前台启动

前台采用`Grunt`管理项目(`Grunt`现在已被开源社区弃用，以后的项目中会考虑使用`gulp`与`webpack`等更流行的工具)。

```
cd webApp
npm install
bower install
grunt live
```

`npm`与`bower`的配置文件维护的不好，所以可能缺少一些包，如果前台无法启动，

## 后台启动


