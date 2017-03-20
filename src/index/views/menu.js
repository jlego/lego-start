class Menu extends Lego.UI.Baseview {
    constructor(opts = {}) {
        let options = {};
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const tmpl = hx `
        <ul>
            <li><a href="javascript:Lego.startApp('home');">首页</a></li>
            <li><a href="#">示例</a></li>
        </ul>
        `;
        return tmpl;
    }
}
Lego.components('menu', Menu); //注册组件
export default Menu;
