import '../asset/index.scss';
import Menu from './menu';

class Viewport extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            components: [{
                el: '#menuId'
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        const tmpl = hx`
        <div class="viewport">
            <link rel="stylesheet" type="text/css" href="dist/index/app.css" />
            <menu id="menuId"></menu>
            <div id="app-container"></div>
        </div>
        `;
        return tmpl;
    }
}
export default Viewport;
