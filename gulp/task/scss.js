import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import sourceMaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import replace from "gulp-replace"

const sass = gulpSass(dartSass)

export const scss = () => {
	return app.gulp.src(app.path.src.scss)
	.pipe(sourceMaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { grid: true, cascade: true }))
	.pipe(rename({extname: '.min.css'}))
	.pipe(sourceMaps.write('/'))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(app.plugins.browserSync.stream())
}

export const scssBuild = () => {
	return app.gulp.src(app.path.src.scss)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { grid: true, cascade: true }))
	.pipe(rename({extname: '.min.css'}))
	.pipe(sourceMaps.write('/'))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(app.plugins.browserSync.stream())
}