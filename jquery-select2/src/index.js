/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';

Vue.component('VueSelect2', {
    template: '#vue-select2',
    props: [
        'options'
    ],
    data: function () {
        return {selectedValue:null};
    },
    watch: {
        selectedValue: function () {
            console.log(this.selectedValue);
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
    }
});