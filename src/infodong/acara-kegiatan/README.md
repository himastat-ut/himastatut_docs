--- 
title: Acara & Kegiatan - Info Kegiatan Mahasiswa
index: true
icon: calendar-days
image: "./acara-kegiatan.png"
description: "Halaman ini berisi informasi terkait berbagai acara, kegiatan, dan event penting yang diselenggarakan oleh atau berkaitan dengan Program Studi Statistika, Fakultas Sains dan Teknologi, Himpunan Mahasiswa Statistika UT, dan Universitas Terbuka."
tags:
  - Acara
  - Kegiatan
  - Event
  - Mahasiswa
  - HIMASTAT
  - Universitas Terbuka
date: 2025-04-22
category:
  - Acara & Kegiatan
  - Info Dong
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Himastatut Docs"
    email: "himastatut@gmail.com"
    url: "https://himastatut.my.id/article/"
--- 

# Acara & Kegiatan - Info Kegiatan Mahasiswa

Selamat datang di halaman **Info Kegiatan Mahasiswa**! Halaman ini berisi informasi terkait berbagai **acara**, **kegiatan**, dan **event penting** yang diselenggarakan oleh atau berkaitan dengan:
- **Program Studi Statistika**, 
- **Fakultas Sains dan Teknologi**,
- **Himpunan Mahasiswa Statistika UT**, dan
- **Universitas Terbuka**.

Tujuan utama dari halaman ini adalah untuk memberikan informasi yang berguna bagi mahasiswa dalam mengembangkan **soft skills**, memperluas jejaring sosial, dan meningkatkan pengalaman non-akademik di kampus.

## Apa yang Dapat Anda Temukan di Halaman Ini?

Berikut adalah beberapa kategori acara dan kegiatan yang dapat Anda temukan di halaman ini:

- **Seminar & Webinar Akademik**: Pelatihan dan seminar yang berkaitan dengan dunia akademik, seperti statistik terapan, data science, dan bidang relevan lainnya.
- **Workshop & Pelatihan**: Workshop untuk pengembangan diri, keterampilan teknis, dan keilmuan untuk mahasiswa.
- **Kompetisi & Lomba**: Lomba-lomba yang dapat meningkatkan kemampuan mahasiswa dalam berbagai bidang.
- **Kegiatan Sosial & Organisasi**: Kegiatan sosial, kegiatan kemahasiswaan, dan acara yang berkaitan dengan organisasi HIMASTAT atau Universitas Terbuka.

## Struktur Halaman

Halaman ini menggunakan komponen **Catalog** untuk menampilkan daftar lengkap acara dan kegiatan yang dapat Anda ikuti. Dengan komponen ini, Anda dapat mengakses berbagai informasi tentang acara yang sedang atau akan datang, beserta detail pendaftaran dan informasi lainnya.

<Catalog />

## Tips untuk Mengikuti Kegiatan

Kami sangat menganjurkan mahasiswa untuk aktif mengikuti acara yang relevan dengan minat dan tujuan pengembangan diri Anda. Berikut adalah beberapa tips untuk memaksimalkan partisipasi Anda:

::: tip
**Tetap Update:** Pastikan Anda selalu memeriksa halaman ini secara rutin untuk mengetahui kegiatan terbaru yang dapat Anda ikuti.
:::

::: warning
**Batas Pendaftaran:** Banyak acara dan kompetisi yang memiliki batas waktu pendaftaran. Jangan sampai ketinggalan!
:::

## 📊 Statistik Partisipasi
Berikut adalah statistik mengenai jumlah peserta yang telah berpartisipasi dalam kegiatan kami:

::: echarts Statistik Partisipasi

```json
{
  "legend": {
    "top": "bottom"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "Statistik Partisipasi",
      "type": "pie",
      "radius": [20, 100],
      "center": ["50%", "50%"],
      "roseType": "area",
      "itemStyle": {
        "borderRadius": 8
      },
      "data": [
        {
          "value": 30,
          "name": "Seminar"
        },
        {
          "value": 25,
          "name": "Workshop"
        },
        {
          "value": 20,
          "name": "Kompetisi"
        },
        {
          "value": 25,
          "name": "Kegiatan Sosial"
        }
      ]
    }
  ]
}
```
:::


## Struktur Halaman

<Catalog />


## Bagikan
<Share colorful />
<GitContributors />
<GitChangelog />