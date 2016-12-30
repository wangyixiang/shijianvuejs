/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';
import MyGrid from './mygrid.vue';


new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        dataColNames: ['name', 'power'],
        gridData: [
            {name: 'Chuck Norris', power: Infinity},
            {name: 'Bruce Lee', power: 9000},
            {name: 'Jackie Chan', power: 7000},
            {name: 'Jet Li', power: 8000}
        ],
        caseSensitive: false
    },
    methods: {
        logIt: function () {
            console.log(this.caseSensitive);
        }
    },
    components: {
        MyGrid
    }
});

console.log("start!");

