const siteProdUrl = 'example.com' // please change this url
const isOnProduction = process.env.ELEVENTY_ENV === 'production'

module.exports = function() {
    return {
        name: 'DM3 KAMMI Kalsel-Kalteng 2021',
        slogan: 'Muslim Negarawan',
        logo: '',
        url: isOnProduction ? siteProdUrl : 'http://localhost:8080/',
        env: isOnProduction
    }
}