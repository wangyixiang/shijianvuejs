/**
 * Created by nemo on 2016/12/25.
 */
import gulp from 'gulp';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
    allSrcJs: 'src/**/*.js',
    gulpFile: 'gulpfile.babel.js',
    clientEntry: 'src/index.js',
    clientBundle: 'client-bundle.js',
    webpackFile: 'webpack.config.babel.js',
    distDir: 'dist',
};

gulp.task('clean', () =>
    del([paths.distDir]),
);

gulp.task('build', ['clean'], () =>
    gulp.src(paths.clientEntry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.distDir))
);

gulp.task('watch', ()=>
    gulp.watch(paths.allSrcJs, ['build'])

);

gulp.task('default', ['watch','build']);
