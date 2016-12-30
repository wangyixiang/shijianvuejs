/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';


Vue.component('model', {
    template: '#model-template'
});

new Vue({
    el: '#app',
    data: {
        showModel: false
    }
});

