// build/bin/build-entry.js

var Components = require("../../components.json");  //{组件名：组件路径} => {"button": "./packages/button/index.js"}
const fs = require('fs');
const render = require('json-templater/string');    //json 模板生成插件
var uppercamelcase = require('uppercamelcase'); // 驼峰
var path = require('path');
var endOfLine = require('os').EOL;

// 导出路径
const OUTPUT_PATH = path.join(__dirname, '../../src/index.js');

// 模板定义
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';'; //导入模板
var INSTALL_COMPONENT_TEMPLATE = '  {{installName}}';    //安装组件
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}

const components = [
{{install}}
];
  
const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
{{exportList}}
};`;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var exportListTemplate = [];


// 生成include导入模板列表
ComponentNames.forEach(name => {
    let componentName = uppercamelcase(name);

    includeComponentTemplate.push(render(IMPORT_TEMPLATE,{
        name: componentName,
        package: name
    }));

    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE,{
        installName: componentName
    }));

    exportListTemplate.push(`  ${componentName}`);
})

var mainTemplate = render(MAIN_TEMPLATE,{
    include: includeComponentTemplate.join(endOfLine),
    install: installTemplate.join(',' + endOfLine),
    exportList: exportListTemplate.join(',' + endOfLine)
})

fs.writeFileSync(OUTPUT_PATH, mainTemplate)
console.log('[build entry] DONE:', OUTPUT_PATH);





