/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';
import $ from 'jquery';

const apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';

new Vue({
    el: '#app',
    data: {
        getDataMethods: {},
        getDataMethod: null,
        branches: ['master', 'dev'],
        currentBranch: 'master',
        commits: []
    },
    created: function () {
        this.getDataMethods["fetchData"] = this.fetchData;
        this.getDataMethods["fetchData$"] = this.fetchData$
        this.getDataMethod = Object.keys(this.getDataMethods)[1]
        this.getDataMethods[this.getDataMethod]()
    },
    watch: {
        currentBranch: function () {
            this.getDataMethods[this.getDataMethod]();
        }
    },
    methods: {
        fetchData: function () {
            let xhr = new XMLHttpRequest();
            let self = this
            xhr.open('GET', apiURL + this.currentBranch);
            xhr.onload = function () {
                self.commits = JSON.parse(xhr.responseText);
                console.log(self.commits)
            };
            xhr.send();
            console.log("using fetchData.")
        },
        fetchData$: function () {
            let self = this;
            $.get(apiURL + this.currentBranch, function (data) {
                // self.commits.splice(data.length);
                // for (let i = 0; i < data.length; i++) {
                //     Vue.set(self.commits, i, data[i]);
                // }
                // 在Vue的数组操作中有两个限制, 一个是对array的index操作, 还有一个就是为数组设置新长度, Observer观察不到
                // 所以上面测试一下.
                console.log(data);
                self.commits = data;
                console.log(self.commits);
            }, 'json');
            console.log("using fetchData$");
        }
    }
});

