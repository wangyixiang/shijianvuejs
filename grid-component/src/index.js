/**
 * Created by nemo on 2016/12/25.
 */
import Vue from 'vue';


var demo = new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        colnames: ['name', 'power'],
        gridData: [
            {name: 'Chuck Norris', power: Infinity},
            {name: 'Bruce Lee', power: 9000},
            {name: 'Jackie Chan', power: 7000},
            {name: 'Jet Li', power: 8000}
        ],
        sortOn: -1,
        reversed: 1,
    },
    computed: {
        colrecords: function () {
            let self = this;
            if (this.sortOn === -1) {
                return this.gridData.filter(
                    function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(self.searchQuery) > -1
                        });
                    }
                );
            } else {
                return this.gridData.filter(
                    function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(self.searchQuery) > -1
                        });
                    }
                ).sort(
                    function (a, b) {
                        a = a[self.colnames[self.sortOn]];
                        b = b[self.colnames[self.sortOn]];
                        return (a === b ? 0 : ( a > b ? 1 : -1 )) * self.reversed
                    }
                )
            }
        }
    },
    filters: {
        capitalize: function (str) {
            return String(str).toUpperCase();
        }
    },
    methods: {
        sortOnThisCol: function (colIndex) {
            if (colIndex === -1) {
                this.sortOn = colIndex;
            } else {
                if (this.sortOn === colIndex) {
                    this.reversed = this.reversed * -1;
                }
                this.sortOn = colIndex;
            }
        }
    }
});

console.log("start!");

