const { src, dest } = require('gulp')
const { pipeline } = require('readable-stream')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const importcss = require('postcss-import-url')

const SRC = './src/styles/*.scss'
const DEST = './src/components/styles'

exports.default = function() {
    const processors = [
        importcss({ modernBrowser: true }),
        autoprefixer
    ]

    return pipeline(
        src(SRC),
        sass(),
        postcss(processors),
        dest(DEST)
    )
}