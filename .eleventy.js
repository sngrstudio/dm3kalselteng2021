const { execSync } = require('child_process')

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/styles/')
    eleventyConfig.on('beforeBuild', () => {
        execSync('npx gulp styles', {stdio: 'inherit'})
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