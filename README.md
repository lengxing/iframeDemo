### iframeDemo
通过iframe进行页面跨域处理

#### 安装依赖

```
npm i
```

#### 启动服务

安装gulp启动本地服务

分别在两个目录下启动本地服务

```
gulp
```

本地host进行绑定

```
127.0.0.1 www.test.cn
127.0.0.1 top.test.cn
```

访问 `www.test.cn:1025/a.html`

#### 核心处理

通过iframe+domain进行同主域下的跨域处理。

#### 业务场景

主站页面通不过iframe进行子站页面的展示和交互。
