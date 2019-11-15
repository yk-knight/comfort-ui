<template>
    <div class="nav-list">
        <ul class="nav-ul">
            <li class="nav-li">
                <h3>概览</h3>
                <ul>
                    <li class="nav-li"></li>
                </ul>
            </li>
            <li class="nav-li">
                <h3>组件</h3>
                <ul>
                    <li class="nav-li">
                        <router-link to="/button">Button 按钮</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus" scope>
@import "../../src/styles/index.styl"
    .nav-list{
        background:#FFF; height:100%; width:18%;
    }
    .nav-ul{
        padding-top:30px;
    }
    .nav-li {
        text-indent:20px;
        .nav-li{
            text-indent:20px;
        }
        h3{
             padding:20px 0 10px; border-bottom:solid 1px #ccc; margin:0 20px; color:#333;
        }
        a {
            display:inline-block; text-indent:20px; font-size:14px; height:40px; line-height:40px;
        }
    }
</style>