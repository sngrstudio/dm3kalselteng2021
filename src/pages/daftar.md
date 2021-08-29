---
layout: form
title: Form Pendaftaran
alerts:
  - type: warning
    body: 'Pastikan antum telah membaca dan memperhatikan <a href="/sop">Panduan Seleksi!</a>'
form:
  - set: Data Pribadi
    items:
      - name: Nama Lengkap
        required: true
      - name: Asal PW KAMMI
        type: select
        options:
          - PW KAMMI Kalteng
          - PW KAMMI Kalsel
          - PW KAMMI Kalbar
          - PW KAMMI Kaltimtara
          - Lainnya
      - name: Asal PD KAMMI
      - name: Nomor HP/WhatsApp
        type: tel
      - name: Alamat Email
        type: email
  - set: Data Kelengkapan
    items: 
      - name: Tahun DM1
        required: true
      - name: Lokasi DM1
        required: true
      - name: Tahun DM2
        required: true
      - name: Lokasi DM2
        required: true
      - name: Tahun DPMK/TPN
        required: true
      - name: Lokasi DPMK/TPN
        required: true
      - name: Tahun TFI/TPN
      - name: Lokasi TFI/TPN
  - set: Unggah Berkas
    items: 
      - name: Curriculum Vitae (pdf/doc)
        type: file
      - name: Surat Rekomendasi Ketua Umum PW/PD (pdf/doc)
        type: file
      - name: Surat Keterangan Telah Tersertifikasi AB2 (pdf/doc)
        type: file
      - name: Surat Keterangan Telah Terbina (pdf/doc)
        type: file
      - name: Surat Pernyataan Kesediaan Menjadi Pimpinan PW/PD/Pengurus Pusat KAMMI (pdf/doc)
        type: file
      - name: Sertifikat DPMK/Surat Keterangan Pemandu (pdf/doc)
        type: file
      - name: Surat Keterangan Aktif (pdf/doc)
        type: file
      - name: Surat Rekomendasi Tokoh (pdf/doc)
        type: file
  - set: Developer's Note (deleted soon)
    items:
      - name: What to do next?
        type: textarea
        content: set up form validation with js >> set up localstorage/sessionstorage for temporarily save items >> set up google sheets api for backend >> set up twilio for registered user notification
---
