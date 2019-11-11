import CfButton from './src/button';

CfButton.install = function(Vue) {
    Vue.component(CfButton.name,CfButton);
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(CfButton)
}

export default CfButton;