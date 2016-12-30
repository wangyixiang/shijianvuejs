/**
 * Created by nemo on 2016/12/25.
 */
export default {
    output: {
        filename: 'client-bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/],
            },
            {
                test: /\.vue$/,
                loader: 'vue',
            }
        ],
        resolve: {
            extensions: ['', '.js', '.vue'],
        }
    },

}