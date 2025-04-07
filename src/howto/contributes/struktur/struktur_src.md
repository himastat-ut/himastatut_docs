---
title: Struktur Folder di src - Himastatut Docs
index: true
icon: fa-solid:file-alt
category:
  - How To
  - Docs
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Himastatut Docs"
    email: "himastatut@gmail.com"
    url: "https://himastatut.my.id/article/"
date: 2025-04-07
---

# Struktur Folder di `src` - Himastatut Docs

Halaman ini akan menjelaskan lebih lanjut tentang struktur folder yang ada di dalam folder `src` pada proyek Himastatut Docs. Di sini, Anda dapat menemukan berbagai subfolder yang menyimpan dokumentasi terkait berbagai program kerja (proker) dan topik yang berkaitan dengan Himpunan Mahasiswa Statistika Universitas Terbuka (HIMASTAT).

## Struktur Folder

Berikut adalah rincian dari folder `src` dan isi di dalamnya:

```markdown
src 
├── .vuepress → Konfigurasi dan file terkait VuePress 
│   ├── dist → Output build dari VuePress 
│   ├── public → File statis (gambar, js, css, dll.) 
│   ├── styles → File styling (CSS/SCSS) 
│   ├── config.ts → Konfigurasi VuePress 
│   └── ... → Folder lainnya terkait VuePress 
│ 
├── archived → Program kerja yang sudah tidak dijalankan 
│   └── bima → Misalnya program 'Bima' yang telah diarsipkan 
│   └── ... → Program lainnya yang telah diarsipkan 
│ 
├── courses → Informasi terkait mata kuliah di Statistika 
│   ├── semester1 → Mata kuliah di semester 1 
│   ├── semester2 → Mata kuliah di semester 2 
│   ├── ... → Semester lainnya 
│ 
├── gemas → Program penghargaan dan apresiasi HIMASTAT 
│   ├── gemas_01_penghargaan_himastat_12_2024.md → Penghargaan HIMASTAT 2024 
│   ├── gemas_02_inspiring_achievements_2025.md → Pencapaian inspiratif 2025 
│   └── ... → Dokumentasi penghargaan lainnya 
│ 
├── hangat → Program komunikasi mahasiswa Statistika 
│   ├── pendaftaran-grup-wag.md → Panduan pendaftaran grup WhatsApp 
│   ├── pendaftaran-komunitas.md → Panduan pendaftaran komunitas 
│   └── ... → Panduan atau informasi lainnya 
│ 
├── howto → Tips, cara, dan tutorial bagi mahasiswa 
│   ├── activities → Informasi kegiatan akademik dan lomba 
│   ├── contributes → Panduan kontribusi untuk Himastatut Docs 
│   ├── ... → Halaman lainnya untuk tutorial dan tips 
│ 
├── infodong → Informasi seputar HIMASTAT dan Universitas Terbuka 
│   ├── acaraKegiatan → Informasi acara dan kegiatan HIMASTAT 
│   ├── beritaAkademik → Pengumuman akademik 
│   └── ... → Informasi lainnya 
│ 
├── jepret → Program penghargaan pengurus HIMASTAT 
│   ├── jepret2023 → Dokumentasi penghargaan pengurus 2023 
│   └── ... → Dokumentasi lainnya 
│ 
├── link → Informasi lomba, pembiayaan, dan pelatihan statistik 
│   ├── linkJanuari2025 → Lomba, pembiayaan, dan pelatihan statistik Januari 2025 
│   └── ... → Lomba, pembiayaan, dan pelatihan lainnya 
│   
├── prodi → Program Studi Statistika (masih dalam pengembangan) 
│   └── README.md → Halaman pengantar untuk Prodi Statistika 
│ 
├── radar → Program evaluasi kinerja pengurus HIMASTAT 
│   ├── radar202407 → Evaluasi radar Juli 2024 
│   └── ... → Evaluasi lainnya 
│ 
├── sigma → Program SIGMA untuk membantu mahasiswa dalam mata kuliah sulit dari PRODI STATISTIKA
│   ├── SATS4220 → Materi SATS4220 
│   └── ... → Mata kuliah lainnya di SIGMA 
│ 
├── statgen → Program StatGen untuk pengembangan akademik dari HIMASTATUT
│   ├── SATS4111 → Materi SATS4111 
│   └── ... → Materi lainnya di StatGen 
│ 
└── temusapa → Program Temu Sapa Online 
    ├── series2023.md → Seri 2023 Temu Sapa 
    └── ... → Seri atau topik lainnya
```

---

Dengan struktur ini, Anda dapat melihat bagaimana folder di dalam `src` dikelompokkan berdasarkan program atau topik tertentu. Beberapa folder masih terbuka untuk pengisian lebih lanjut, seperti yang ditunjukkan dengan tanda `...`. Folder-folder ini akan diisi dengan informasi baru seiring berjalannya waktu atau ketika ada kegiatan baru yang relevan.

Jika Anda memerlukan perubahan atau penambahan detail, beri tahu saya!

<GitContributors />
<GitChangelog />
