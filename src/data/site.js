const siteProdUrl = 'https://dm3kalselteng2021.netlify.app/' // please change this url
const isOnProduction = process.env.ELEVENTY_ENV === 'production'

const menu = [
    {
        name: 'Beranda',
        url: '/'
    },
    {
        name: 'Proses Seleksi',
        url: '/sop'
    },
    {
        name: 'Kata Mereka',
        url: '#'
    },
    {
        name: 'Daftar',
        url: '/daftar'
    }
]

module.exports = function() {
    return {
        name: 'DM3 KAMMI Kalsel-Kalteng 2021',
        slogan: 'Muslim Negarawan',
        logo: '',
        url: isOnProduction ? siteProdUrl : 'http://localhost:8888/',
        env: isOnProduction,
        menu
    }
}