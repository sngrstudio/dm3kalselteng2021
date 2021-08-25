const { execSync } = require('child_process')
const minifier = require('html-minifier')

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/styles/')
    eleventyConfig.on('beforeBuild', () => {
        execSync('npx gulp styles', {stdio: 'inherit'})
    })
    eleventyConfig.addTransform('minify', function(content, outputPath) {
        if (outputPath.endsWith('.html') && (process.env.ELEVENTY_ENV === 'production')) {
            let result = minifier.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: {
                    level: {
                        1: {
                            specialComments: 0
                        }
                    }
                },
                minifyJS: true,
                processScripts: [
                    'text/javascript',
                    'application/ld+json'
                ]
            })
            return result
        }
        return content
    })
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'components',
            layouts: 'layouts',
            data: 'data'
        }
    }
}