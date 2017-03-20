import homeView from './view/home';

Lego.router({
    '/home' () {
        Lego.create(homeView, {
            el: Lego.config.pageEl
        });
    },
    '/home/list' () {
        console.warn('列表');
    },
    '/home/detail/:id' (id) {
        console.warn('详情');
    }
});
