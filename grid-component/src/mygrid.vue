<template>
    <table>
        <thead>
        <tr>
            <th v-for="(colName, index) in colNames" @click="sortOnThisCol(index)">{{colName | capitalize}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="colRecord in colRecords">
            <td v-for="cellData in colRecord">{{cellData}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            data: Array,
            colNames: Array,
            filterString: String,
            caseSensitive: Boolean
        },
        data: function () {
            return {
                sortOn: -1,
                reversed: 1
            }
        },
        filters: {
            capitalize: function (str) {
                return String(str).toUpperCase();
            }
        },
        computed: {
            colRecords: function () {
                let self = this;
                let data = this.data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        if (self.caseSensitive) {
                            return String(row[key]).indexOf(self.filterString) > -1;

                        } else {
                            return String(row[key]).toUpperCase().indexOf(self.filterString.toUpperCase()) > -1;
                        }
                    })
                });
                if (this.sortOn >= 0) {
                    data = data.sort(function (a, b) {
                        a = a[self.colNames[self.sortOn]];
                        b = b[self.colNames[self.sortOn]];
                        return (a === b ? 0 : ( a > b ? 1 : -1)) * self.reversed;
                    });
                }
                return data;
            }
        },
        methods: {
            sortOnThisCol: function (index) {
                if (this.sortOn === index) {
                    this.reversed = this.reversed * -1;
                }
                this.sortOn = index;
            }
        }
    }
</script>

<style>

</style>