const devUrl = 'http://localhost:8888'
const prodUrl = 'https://https://dm3kalselteng2021.netlify.app'

const isProd = process.env.NODE_ENV === 'production' ? true : false

export const site = {
    name: 'DM3 KAMMI Kalsel-Kalteng 2021',
    url: isProd ? prodUrl : devUrl,
    logo: '/images/dm3.png'
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
        url: '/katamereka'
    },
    {
        name: 'Daftar DM3',
        url: '/daftar',
        newWindow: true
    }
]

export const links = [
    {
        name: 'Website PP KAMMI',
        url: 'https://www.kammi.id'
    },
    {
        name: 'Tentang KAMMI',
        url: 'https://kammi.id/website/organisasi/detail/4-tentang-kammi'
    },
    {
        name: 'Mars KAMMI',
        url: 'https://kammi.id/website/organisasi/detail/2-mars-kammi'
    },
    {
        name: 'Hymne KAMMI',
        url: 'https://kammi.id/website/organisasi/detail/3-hyme-kammi'
    },
    {
        name: 'KAMMI TV',
        url: 'https://www.youtube.com/channel/UCYXdwyAlPn6Mzb10Q7LJ89A'
    }
]

export const orgs = [
    {
        name: 'Pengurus Pusat \n Kesatuan Aksi Mahasiswa Muslim Indonesia',
        tel: '62 822-8142-0851',
        mail: 'kammipusat@gmail.com',
        address: 'Jl. Cikoko Barat IV No.27, RT.5/RW.5, Cikoko, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12770',
        url: 'https://www.kammi.id',
        logo: '/images/kammi.png'
    },
    {
        name: 'Pengurus Wilayah \n Kesatuan Aksi Mahasiswa Muslim Indonesia \n Kalimantan Tengah',
        tel: '62 813-4672-1720',
        mail: 'kammikalimantantengah@gmail.com',
        address: 'Palangka Raya',
        logo: '/images/kalteng.png'
    },
    {
        name: 'Pengurus Wilayah \n Kesatuan Aksi Mahasiswa Muslim Indonesia \n Kalimantan Selatan',
        tel: '62 822-5596-4107',
        mail: 'kammikalsel@gmail.com',
        address: 'Banjarmasin',
        logo: '/images/kalsel.png'
    },
]