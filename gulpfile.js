{
    const { emitWarning } = process;
    process.emitWarning =
    (warning, type, code, ...extraArgs) =>
    code !== 'DEP0097' && emitWarning(warning, type, code, ...extraArgs);
}

var gulp = require('gulp');
var sass = require('gulp-sass'); //Sassコンパイル
var plumber = require('gulp-plumber'); //エラー時の強制終了を防止
var notify = require('gulp-notify'); //エラー発生時にデスクトップ通知する
var sassGlob = require('gulp-sass-glob'); //@importの記述を簡潔にする
var browserSync = require('browser-sync'); //ブラウザ反映
var postcss = require('gulp-postcss'); //autoprefixerとセット
var mqpacker = require("css-mqpacker");
var autoprefixer = require('autoprefixer'); //ベンダープレフィックス付与
var cssdeclsort = require('css-declaration-sorter'); //css並べ替え
var imagemin = require('gulp-imagemin');
var optipng = require('imagemin-optipng');
var mozjpeg = require('imagemin-mozjpeg');
var ejs = require("gulp-ejs");
var rename = require("gulp-rename"); //.ejsの拡張子を変更
var webpackStream = require("webpack-stream");
var webpack = require("webpack");
// webpackの設定ファイルの読み込み

var webpackConfig = require("./webpack.config");
// scssのコンパイル
gulp.task('sass', function () {
    return gulp
        .src('css/main.scss')
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))//エラーチェック
        .pipe(sassGlob())//importの読み込みを簡潔にする
        .pipe(sass({
            outputStyle: 'expanded' //expanded, nested, campact, compressedから選択
        }))
        .pipe(postcss([  //メディアクエリをまとめるプラグイン 不要ならコメントアウト
            require('css-mqpacker')(),
        ]))
        .pipe(postcss([autoprefixer(
            {
                // ☆IEは11以上、Androidは5以上
                // その他は最新2バージョンで必要なベンダープレフィックスを付与する
                "overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
                cascade: false
            }
        )]))
        .pipe(postcss([cssdeclsort({ order: 'smacss'})]))//プロパティをソートし直す(アルファベット順)
        .pipe(gulp.dest('css'));//コンパイル後の出力先
});

// 保存時のリロード
gulp.task('browser-sync', function (done) {
    browserSync.init({

        //ローカル開発
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
    done();
});

gulp.task('bs-reload', function (done) {
    browserSync.reload();
    done();
});
gulp.task('css-mqpacker', function (done) {
    browserSync.reload();
    done();
});
gulp.task("ejs", (done) => {
    gulp
        .src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))//エラーチェック
        .pipe(ejs())
        .pipe(rename({ extname: ".html" })) //拡張子をhtmlに
        .pipe(gulp.dest("./")); //出力先
    done();
});

// タスクの定義。 ()=> の部分はfunction() でも可
gulp.task("webpack", function(done) {
    // ☆ webpackStreamの第2引数にwebpackを渡す☆
    return webpackStream(webpackConfig, webpack)
      .pipe(gulp.dest("dist"));
  });

// 監視
gulp.task('watch', function (done) {
    gulp.watch('css/main.scss', gulp.task('sass')); //sassが更新されたらgulp sassを実行
    gulp.watch('css/main.scss', gulp.task('css-mqpacker')); //sassが更新されたらbs-reloadを実行
    gulp.watch('css/main.scss', gulp.task('bs-reload')); //sassが更新されたらbs-reloadを実行
    gulp.watch('./src/js/*.js', gulp.task('bs-reload')); //jsが更新されたらbs-relaodを実行
    gulp.watch('./ejs/**/*.ejs', gulp.task('ejs')); //ejsが更新されたらgulp-ejsを実行
    gulp.watch('./ejs/**/*.ejs', gulp.task('bs-reload')); //ejsが更新されたらbs-reloadを実行
});

// default
gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));

//圧縮率の定義
var imageminOption = [
    optipng({ optimizationLevel: 5 }),
    mozjpeg({ quality: 85 }),
    imagemin.gifsicle({
        interlaced: false,
        optimizationLevel: 1,
        colors: 256
    }),
    imagemin.mozjpeg(),
    imagemin.optipng(),
    imagemin.svgo()
];
// 画像の圧縮
// $ gulp imageminで./src/img/base/フォルダ内の画像を圧縮し./src/img/フォルダへ
// .gifが入っているとエラーが出る
gulp.task('imagemin', function () {
    return gulp
        .src('img/base/*.{png,jpg,gif,svg}')
        .pipe(imagemin(imageminOption))
        .pipe(gulp.dest('./img'));
});