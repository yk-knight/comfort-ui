import CfButtonGroup from './src/button';

CfButtonGroup.install = function(Vue) {
    Vue.component(CfButtonGroup.name,CfButtonGroup);
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(CfButtonGroup)
}

export default CfButtonGroup;