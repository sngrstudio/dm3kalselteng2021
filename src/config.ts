const devUrl = 'http://localhost:8888'
const prodUrl = 'https://https://dm3kalselteng2021.netlify.app'

const isProd = process.env.NODE_ENV === 'production' ? true : false

export const site = {
    name: 'DM3 KAMMI Kalsel-Kalteng 2021',
    url: isProd ? prodUrl : devUrl,
    logo: '/images/logo.png'
}

export const menus = [
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
        url: '#'
    }
]