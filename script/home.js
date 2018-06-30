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
var card_module_a = Vue.component('card-module-a', {
    props:{
        link : String,
        img_url:String,
        title:String,
        sub_title:String
    },
    data:function () {
        return{
            card_title:{
            'font-size':'24px',
            'line-height':'2'
            },
            card_sub:{
            'font-size':'16px',
            'color':'#919191'
            }
        }
    },

    template: '<div class="active_module_1 card_module_a"><div class="card_module_a_in"><a href="#" class="card_module"><div style="overflow: hidden;height:170px"><img class="img_active" :src="img_url"></div><h3 :style="card_title">{{title}}</h3><p :style="card_sub">{{sub_title}}</p></a></div></div>'
});


//卡片模块标题组件
Vue.component('card-module-title',{
    props:{
        title:String,
        sub_title:String
    },
    template: '<div style="text-align: center"><h2 style="font-size: 30px">{{title}}</h2><h2 style="font-size: 16px;color:#919191">{{sub_title}}</h2></div>'
});
var card_module_title_1 = new Vue({
    el: '#card-module-title_1'
});
var card_module_title_2 = new Vue({
    el: '#card-module-title_2'
});
var card_module_title_3 = new Vue({
    el: '#card-module-title_3'
});
var card_module_title_4 = new Vue({
    el: '#card-module-title_4'
});
//更多按钮组件
Vue.component('more-button',{
    props:{
        more:String,
        more_link:String
    },
    data:function () {
        return{
            more_a:{
                'line-height':'40px',
                'font-size':'14px',
                'display':'inline-block',
                'color': '#333333',
                'background-color': '#e6e6e6',
                'border-color': '#adadad',
                'width':'120px',
                'height':'40px',
                'border-radius':'10px',
            },
            more_button:{
                'width':'120px',
                'height':'40px',
                'border':'none'

            },
            more_out:{
                'position':'relative',
                'overflow':'hidden',
                'text-align':'center',
                'margin':'0 auto',
                'padding':'15px',
                'width':'120px',
                'height':'40px'
            },
            more_symbol:{
                'position':'absolute',
                'height':'10px',
                'width':'10px',
                'top':'30px',
                'right':'30px',
                'line-height':'10px',
                'font-size':'20px'
            }
        }
    }
    ,
    template: '<div :style="more_out"><button type="button" :style="more_button"><a :style="more_a" :href="more_link">{{more}}</a></button><div :style="more_symbol"> ></div></div>'
});

var more_button_1 = new Vue({
    el:'#more-button_1'
});

//博客文章组件
var blog_content = Vue.component('blog-content',{
    props:{
        blog_title:String,
        blog_host:String
    },
    data:function () {
       return{
           blog_out:{
               'height':'40px',
               'line-height':'40px',
               'margin':'15px',
               'text-indent': '5px'
           },
           blog_title_a:{
               'width':'450px',
               'font-size': '16px',
               'font-weight': '400',
               'overflow': 'hidden',
               'text-overflow':'ellipsis',
               'white-space': 'nowrap',
               'word-wrap': 'normal',
               'color': '#616161',

           },
           blog_host_a:{
               'width':'80px',
               'display':'inline-block',
               'text-align':'center'
           }

       }
    },
    template: '<div :style="blog_out"><a class="blog_title_a" :style="blog_title_a">{{blog_title}}</a><a :style="blog_host_a">{{blog_host}}</a></div>'
});
//博客分类
var blog_category = Vue.component('blog-category',{
    props:{
        blog_category:String,
        blog_subtitle:String,
        blog_img_url:String
    },
    data:function(){
        return{
            blog_category_out:{
                'height':'70px',
                'width':'250px',
                'margin':'15px 0',
                'padding':'10px',
                'text-align':'center',
                'display':'inline-block'
            },
            blog_category_in:{
                'display':'inline-block'
            },
            blog_category_img:{
                'width':'60px',
                'height':'60px'
            }
        }
    },
    template: '<a :style="blog_category_out" href="#"><img :src="blog_img_url" :style="blog_category_img"><div :style="blog_category_in"><h2>{{blog_category}}</h2><h2>{{blog_subtitle}}</h2></div></a>'
});

//博客外框架
var blog_container = Vue.component('blog_container',{
    props:{
        blog_content:String,
        child_component:null
    },
    // components:{'blog_content':blog_content,'blog_category':blog_category},
    data:function () {
        return{
            container_out: {
                'width': '550px',
                'height': '420px',
                'background-color':'#fff',
                'display': 'inline-block',
                'border': '1px solid #e4ecf3',
                'border-radius': '10px',
            },
            container_in:{
                'display':'inline-block',
                'width':'90%',
                'margin':'0 auto',
                'border-bottom':'1px solid #f5f5f5',
                'color':'#616161',
                'padding':'15px 0',
            },
            container_title:{
                'display':'inline-block',
                'width':'80%',
                'height':'40px',
                'line-height':'40px',
                'margin':'0',
                'text-align':'left'
            },
            container_more:{
                'float':'right',
                'display':'inline-block',
                'height':'40px',
                'width':'20%',
                'line-height':'40px',
                'text-align':'center',
                'font-size':'20px'
            },
        }
    },
    template: '<div :style="container_out"><div :style="container_in"><h2 :style="container_title">{{blog_content}}</h2><a href="#" :style="container_more">...</a></div></div>'

});

var blog_container_1 = new Vue({
    el:'#blog_content',
    components:{
        'blog_content':blog_content,
        'blog_container':blog_container
    },
    data:function () {
        return{
            blog_container_out:{
                'position':'relative',
                'width': '550px',
                'height': '420px',
                'background-color':'#fff',
                'display': 'inline-block',
                'margin':'20px'
            },
            blog_content_out:{
                'position':'absolute',
                'left':0,
                'top':'80px',
                'width':'550px'
            },
            blog_list:[
                {
                    title:'腾讯文档 & AlloyTeam招募不凡的你【Web工程师社招校招',
                    host:'jiwei'
                },
                {
                    title:'腾讯文档 & AlloyTeam招募不凡的你【Web工程师社招校招',
                    host:'jiwei'
                },
                {
                    title:'腾讯文档 & AlloyTeam招募不凡的你【Web工程师社招校招',
                    host:'jiwei'
                },
                {
                    title:'腾讯文档 & AlloyTeam招募不凡的你【Web工程师社招校招',
                    host:'jiwei'
                },
                {
                    title:'腾讯文档 & AlloyTeam招募不凡的你【Web工程师社招校招',
                    host:'jiwei'
                },
                {
                    title:'腾讯文档 & AlloyTeam招募不凡的你【Web工程师社招校招',
                    host:'jiwei'
                },


            ],
        }
    },
    template: '<div :style="blog_container_out"><blog_container blog_content="最新博客"></blog_container><div :style="blog_content_out"><blog_content v-for="item in blog_list" :blog_title="item.title" :blog_host="item.host"></blog_content></div></div>'
    });

var blog_container_2 = new Vue({
    el:'#blog_category',
    components:{
        'blog_category':blog_category,
        'blog_container':blog_container
    },
    data:function () {
        return {
            blog_container_out: {
                'position': 'relative',
                'width': '550px',
                'height': '420px',
                'background-color': '#fff',
                'display': 'inline-block',
                'margin':'20px'
            },
            blog_content_out: {
                'position': 'absolute',
                'left': 0,
                'top': '50px',
                'width': '550px'
            },
            blog_category:[
                {
                    category:'javascript',
                    subtitle:'没看过这些，怎么敢说懂js',
                    blog_img_url:'./images/family2.jpg'
                },
                {
                    category:'javascript',
                    subtitle:'没看过这些，怎么敢说懂js',
                    blog_img_url:'./images/family2.jpg'
                },
                {
                    category:'javascript',
                    subtitle:'没看过这些，怎么敢说懂js',
                    blog_img_url:'./images/family2.jpg'
                },
                {
                    category:'javascript',
                    subtitle:'没看过这些，怎么敢说懂js',
                    blog_img_url:'./images/family2.jpg'
                },
                {
                    category:'javascript',
                    subtitle:'没看过这些，怎么敢说懂js',
                    blog_img_url:'./images/family2.jpg'
                },
                {
                    category:'javascript',
                    subtitle:'没看过这些，怎么敢说懂js',
                    blog_img_url:'./images/family2.jpg'
                },

            ]
        }
    },
    template: '<div :style="blog_container_out"><blog_container blog_content="博客分类"></blog_container><div :style="blog_content_out"><blog_category v-for="item in blog_category" :blog_img_url="item.blog_img_url" :blog_category="item.category" :blog_subtitle="item.subtitle"></blog_category></div></div>'
});
//footer组件
Vue.component('footer_component',{
    props:{

    },
    data:function(){
        return{
            foot:{
                'text-align':'center',
                'height':'100px',
                'background-color':'#26282c',
                'color':'hsla(0,0%,100%,.7)',
                'line-height':'100px',
                'font-size':'16px'
            }

        }
    },
    template: '<div :style="foot">Copyright©2018LifelongLearning. All Rights Reserved.</div>'
});
var footer_component = new Vue({
    el:'#footer'
});

