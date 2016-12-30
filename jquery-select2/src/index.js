/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';
Vue.config.devtools = true;


Vue.component('VueSelect2', {
    template: '#vue-select2',
    props: [
        'options',
    ],
    methods:{
        // 在Dom上的原生事件是会以一个事件对象传给callback的, 这就是为什么这个input会有一个Event对象.
        log: function (event) {
            // 在Vue中父组件通过设置prop来来把其状态设置给子组件, 反之不推荐的, 也就是说子组件是不可以设置prop来把
            // 状态回置到父组件的. 总结叫做, prop down, event up.
            console.log(event);
            console.log(arguments);
            // 而自定义的事件,只会把extra data闯过来, 而这个自定义的input事件$emit后, 对应的handler只有extra data.
            this.$emit(event.type, event.target.value,'wangyixiang');
        }
    }
});


new Vue({
    el: '#app',
    data: {
        optiondata:[
            {name: 'name1', value: '1'},
            {name: 'name2', value: '2'},
            {name: 'name3', value: '3'}
        ],
        selected: 0
    },
    methods: {
        // 这个就是对应的自定义的input时间的处理
        valuechanged: function () {
            console.log(arguments);
            this.selected = arguments[0];
        }
    }
});

