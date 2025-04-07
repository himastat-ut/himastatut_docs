---
title: Struktur Proyek Himastatut Docs
index: true
icon: fa-solid:project-diagram
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

# Struktur Proyek Himastatut Docs

Halaman ini akan menjelaskan mengenai struktur folder yang ada di dalam proyek Himastatut Docs. Memahami struktur folder ini sangat penting agar Anda dapat berkontribusi dengan lebih mudah dan mengelola proyek dengan efisien.

## Struktur Proyek

Berikut adalah struktur dasar proyek Himastatut Docs:

```markdown
. 
├── .github → Berisi file konfigurasi untuk GitHub 
│       ├── ISSUE_TEMPLATE → Template untuk membuat issue 
│       └── FUNDING.yml → File untuk mendukung commit dan pendanaan 
│ 
├── dist → Hasil build dari npm run docs:build 
│ 
├── node_modules → Tempat untuk dependensi Node.js berdasarkan package.json 
│ 
├── src → Tempat semua kode dan halaman dokumentasi 
│    ├── .vuepress → Konfigurasi VuePress 
│    │ ├── dist → Direktori output build (default) 
│    │ ├── public → Direktori untuk resource statis (optional) 
│    │ ├── styles → File-file yang terkait dengan styling (optional) 
│    │ ├── config.{js,ts} → File konfigurasi VuePress (optional) 
│    │ └── client.{js,ts} → File aplikasi klien VuePress (optional) 
│    │ 
|    ├── ... → Folder lainnya proyek dokumentasi ini
│    └── README.md → Halaman utama proyek dokumentasi 
│ 
├── .gitignore → Daftar folder dan file yang diabaikan oleh Git 
│ 
├── LICENSE → Informasi lisensi, saat ini menggunakan MIT License 
│ 
├── package-lock.json → Hasil dari npm install, sesuai dengan package.json 
│ 
├── package.json → File konfigurasi Node.js untuk dependensi 
│ 
└── tsconfig.json → Konfigurasi TypeScript untuk proyek ini
```

## Penjelasan Setiap Folder

### `.github`
Folder ini berisi konfigurasi untuk GitHub, termasuk template untuk issue dan file `FUNDING.yml` yang digunakan untuk mendukung pendanaan serta pengaturan commit otomatis.

### `dist`
Folder ini adalah hasil dari perintah `npm run docs:build`. Di dalam folder ini, akan terdapat file-file yang sudah dibangun dan siap untuk dipublikasikan sebagai dokumentasi.

### `node_modules`
Folder ini berisi semua dependensi Node.js yang digunakan dalam pengembangan Himastatut Docs, sesuai dengan file `package.json`.

### `src`
Folder utama tempat kode dan halaman-halaman yang membentuk dokumentasi proyek. Di dalam folder ini, terdapat sub-folder `.vuepress` yang berisi file konfigurasi VuePress dan file lainnya yang mendukung tampilan dan fungsionalitas situs.

- **.vuepress**: Tempat konfigurasi untuk VuePress, termasuk file build output dan file statis seperti gambar dan style.
- **README.md**: Halaman utama untuk dokumentasi proyek.

### `.gitignore`
File ini digunakan untuk mengatur file dan folder apa saja yang perlu diabaikan oleh Git saat melakukan commit, sehingga tidak semua file yang ada di proyek akan diupload ke GitHub.

### `LICENSE`
File ini berisi informasi lisensi untuk proyek Himastatut Docs. Saat ini, proyek ini menggunakan **MIT License**.

### `package-lock.json`
File ini dihasilkan saat menjalankan `npm install` dan berisi informasi tentang dependensi yang diinstal, memastikan bahwa penginstalan dependensi konsisten di berbagai lingkungan.

### `package.json`
File konfigurasi utama untuk proyek ini yang mendefinisikan dependensi dan skrip build yang digunakan untuk mengelola proyek.

### `tsconfig.json`
Konfigurasi TypeScript untuk proyek Himastatut Docs, yang mendefinisikan pengaturan kompilasi TypeScript untuk memastikan proyek ini dibangun dengan benar.

---

Dengan memahami struktur folder ini, Anda akan lebih mudah berkontribusi pada proyek Himastatut Docs. Jika Anda ingin tahu lebih lanjut tentang masing-masing folder dan fungsinya, Anda dapat melanjutkan ke halaman-halaman berikutnya yang akan membahas lebih detail.

<GitContributors />
<GitChangelog />