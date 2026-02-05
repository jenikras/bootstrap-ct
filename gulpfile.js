//gulpfile.js

const gulp = require('gulp');
const purgecss = require('gulp-purgecss');

gulp.task('css:index', () => {
    return gulp.src('project_files/css/soft-ui-design-system.css')
        .pipe(purgecss({
            content: ['project_files/index.html'],
            safelist: {
                standard: [
                    'active',
                    'show',
                    'fade',
                    'collapse'
                ],
                deep: [
                    /^carousel/,
                    /^modal/,
                    /^dropdown/,
                    /^tooltip/,
                    /^popover/,
                    /^btn/
                ]
            }
        }))
        .pipe(rename('index.css'))
        .pipe(gulp.dest('project_files/dist/css'));
});

gulp.task('css:gallery', () => {
    return gulp.src('project_files/css/soft-ui-design-system.css')
        .pipe(purgecss({
            content: ['project_files/gallery.html'],
            safelist: {
                standard: [
                    'active',
                    'show',
                    'fade',
                    'collapse'
                ],
                deep: [
                    /^carousel/,
                    /^modal/,
                    /^dropdown/,
                    /^tooltip/,
                    /^popover/,
                    /^btn/
                ]
            }
        }))
        .pipe(rename('gallery.css'))
        .pipe(gulp.dest('dist/css'));
});