class HomeView extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            listener: {
                'data_update': function(data) {
                    console.warn('自定义事件', data);
                }
            },
            events: {
                'click #clickMe': 'onClick'
            },
            data: [{
                id: 1,
                name: '张三'
            }, {
                id: 2,
                name: '李四'
            }]
        };
        Object.assign(options, opts);
        super(options);
    }
    render() {
        let options = this.options;
        let vDom = hx `<div>
          ${options.data.map((model, index) => {
            return hx`<a href="#" style="display:block;">${model.name}</a>`;
          })}
          <button type="button" id="clickMe">点击我</button>
        </div>`;
        return vDom;
    }
    onClick(event) {
        event.stopPropagation();
        Lego.Eventer.trigger('data_update', {
            aa: 1
        });
    }
}
export default HomeView;
