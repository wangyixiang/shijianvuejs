/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';
Vue.config.devtools = true;
import $ from 'jquery';


Vue.component('VueSelect2', {
    template: '#vue-select2',
    props: [
        'options',
        'value'
    ],
    mounted: function () {
        let self = this;
        // 在VNode挂载到了Dom tree中后, jquery就可以登场了
        for (let option of this.options) {
            console.log(option);
            $(this.$el).append(`<option value=${option.value}>${option.name}</option>`);
        }
        $(this.$el).on('change', function () {
            // 这里的this真得是容易和外面的this相混淆,这个this不是
            // Vue的instance, 也不是别的函数的上下文, 而是jquery里面的
            // 与函数绑定的Dom对象, 而不是jquery对象哦.
            self.$emit('input', this.value);
        });
    }
});


new Vue({
    el: '#app',
    data: {
        optiondata:[
            {name: 'name1', value: '1'},
            {name: 'name2', value: '2'},
            {name: 'name3', value: '3'},
        ],
        selected: 0
    }
});

