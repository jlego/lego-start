class ListData extends Lego.Data {
    constructor(opts = {}) {
        const options = {
            'test1': {
                url: './content.json'
                // reset: true
            },
            'test2': {
                url: './content.json'
            }
        };
        $.extend(true, options, opts);
        super(options);
    }
    test1(datas) {
        return datas.data;
    }
}
export default new ListData();
