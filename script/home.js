/**
 * Created by jiwei on 25/06/2018.
 */

var header_nav = new Vue({
    el: '#menu',
    data: {
        nav_list: [
            { message: '首页' },
            { message: '我的相册' },
            { message: '我的日志' },
            { message: '我的书籍' },
            { message: '我的相册' },
            { message: '我的介绍' },
            { message: '留言本' }
        ]
    }
});

var nav_dots = new Vue({
    el: '#carousel-indicators',
    data: {
        nav_dots: [
            { index: '0',active:'active'},
            { index: '1'},
            { index: '2'},
            { index: '3'}
        ]
    }
});

var scroll_img = new Vue({
    el: '#scroll',
    data: {
        scroll_imgs: [
            { scroll_img: "./images/family0.jpg"},
            { scroll_img: "./images/family1.jpg"},
            { scroll_img: "./images/family2.jpg"},
        ]
    }
});
//卡片模块组件
Vue.component('card-module-a', {
    props:{
        link : String,
        img_url:String,
        title:String,
        sub_title:String
    },
    data:function () {
        return{
            card_title:{
            'font-size':'24px'
        },
            card_sub:{
            'font-size':'16px',
                'color':'#919191'
            }
        }
    },

    template: '<div><a href="link" class="card_module"><div><img :src="img_url"></div><h3 :style="card_title">{{title}}</h3><p :style="card_sub">{{sub_title}}</p></a></div>'
});

var card_module_a = new Vue({
    el: '#card-module-a'
});

//卡片模块标题组件
Vue.component('card-module-title',{
    props:{
        title:String,
        sub_title:String
    },
    template: '<div style="text-align: center"><p style="font-size: 30px">{{title}}</p><p style="font-size: 16px;color:#919191">{{sub_title}}</p></div>'
});
var card_module_title = new Vue({
    el: '#card-module-title'
});