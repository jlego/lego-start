// 加载核心
import Lego from 'lego-core';
// 加载UI库
import 'lego-ui';
import 'lego-ui/dist/css/legoui.css';

// 设置全局参数
Lego.init({
    version: (new Date()).getTime(), //版本号
    pageEl: '#app-container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: '/dist/', //根目录
});
