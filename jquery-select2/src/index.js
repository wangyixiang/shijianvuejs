/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';
Vue.config.devtools = true;
import $ from 'jquery';
import select2 from 'select2';


Vue.component('VueSelect2', {
    template: '#vue-select2',
    props: [
        'options',
        'value'
    ],
    mounted: function () {
        let self = this;
        $(this.$el).select2();
        // 在VNode挂载到了Dom tree中后, jquery就可以登场了
        for (let option of this.options) {
            console.log(option);
            $(this.$el).append(`<option value=${option.value}>${option.name}</option>`);
        }
        $(this.$el).on('change', function () {
            // 这里的this真得是容易和外面的this相混淆,这个this不是
            // Vue的instance, 也不是别的函数的上下文, 而是jquery里面的
            // 与函数绑定的Dom对象, 而不是jquery对象哦.
            console.log('mounted change');
            self.$emit('input', this.value);
        });
    },
    watch: {
        // 这里加了value的watch后, 花花绕还不少.
        // select2默认在设置的不存在的值, 会把value设为null, 所以在绑定的父组件的selected就会被set为null.
        value: function (value) {
            console.log('step1', value);
            $(this.$el).select2('val', value);
            // $(this.$el).select2().val(value);
            console.log('step3', $(this.$el).val());
        }
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
    },
    watch: {
        selected: function (selected) {
            console.log('parent select: ', selected, ' ', typeof selected);
        }
    }
});

