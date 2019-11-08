import CFButtom from './src/button';

CFButtom.install = function(Vue) {
    Vue.comonent(CFButtom.name,CFButtom);
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(CFButtom)
}

export default CFButtom;