--- 
title: SATS4421 - Pertemuan 3
date: 2023-12-14
icon: calculator
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Himastatut Docs"
    email: "himastatut@gmail.com"
    url: "https://himastatut.my.id/article/"
category:
  - SIGMA
tags:
   - HIMASTAT
   - SIGMA
   - Statistika
   - Multivariat
   - Uji Hipotesis
image: "./../sigma.png"
index: true
description: "SIGMA - Metode Statistika Multivariat SATS4421 adalah program untuk memperdalam pemahaman mahasiswa dalam mata kuliah Metode Statistika Multivariat, khususnya pada topik Uji Hipotesis Vektor Mean Populasi."
--- 

# SIGMA – Metode Statistika Multivariat (SATS4421) Pertemuan 3

## Detail Pertemuan

- **Hari/Tanggal**: Kamis, 14 Desember 2023  
- **Jam**: 19.30–21.00 WIB  
- **Topik**: Uji Hipotesis Vektor Mean Populasi  
- **Pemateri Utama**: Tutor SATS4421

--- 

### Ringkasan Materi

Pertemuan ketiga mata kuliah **Metode Statistika Multivariat (SATS4421)** membahas tentang uji hipotesis vektor mean pada data multivariat. Pokok-pokok pembahasan:

1. **Uji Hipotesis Vektor Mean Populasi (Kasus Satu Populasi)**  
   - Pendefinisian hipotesis nol $H_0: \boldsymbol{\mu} = \boldsymbol{\mu}_0$ vs. $H_1: \boldsymbol{\mu} \neq \boldsymbol{\mu}_0$.  
   - Asumsi: data berasal dari *multivariate normal distribution*, matriks kovariansi (diketahui/tidak diketahui).  
   - Statistik uji Hotelling’s $T^2$:  
     $$
     T^2 = n (\overline{\mathbf{X}} - \boldsymbol{\mu}_0)^\top \mathbf{S}^{-1} (\overline{\mathbf{X}} - \boldsymbol{\mu}_0),
     $$
     di mana $\overline{\mathbf{X}}$ adalah vektor rataan sampel, $\mathbf{S}$ adalah matriks kovariansi sampel.  

2. **Uji Hipotesis Kesamaan Dua atau Lebih Vektor Mean**  
   - Uji dua mean: perbandingan $T^2$ atau generalisasi dari dua populasi.  
   - MANOVA (Multivariate Analysis of Variance) untuk lebih dari dua populasi.  
     - Membagi total variasi ke dalam “*antara* (treatment)” dan “*dalam* (error)” secara multivariat.  
     - Statistik uji (eks. Wilks' Lambda, Pillai’s Trace, Hotelling-Lawley) dan perbandingannya dengan *F-distribution*.

3. **Kasus Matriks Kovariansi Lebih dari Satu**  
   - Uji kesamaan matriks kovariansi antar populasi (Box’s M Test).  
   - Pertimbangan ketidaksetaraan matriks kovariansi.

4. **Contoh dan Latihan**  
   - Perhitungan manual $T^2$ untuk sampel besar/kecil.  
   - Penggunaan tabel $F$ atau $\chi^2$ (tergantung asumsi dan *degree of freedom*).  
   - Manova sederhana dengan 2 variabel respon dan >2 perlakuan.

> **Kunci**: Pemahaman konsep $T^2$ Hotelling, notasi vektor, matrix invers, determinan, dan interpretasi hasil “tolak” / “terima” $H_0$ dalam konteks data multivariat.

--- 

### Poin-Poin Utama

1. **Hotelling’s $T^2$**  
   - Generalisasi $t$-Test (univariat) ke multivariat.  
   - Memerlukan *invers* dari matriks kovariansi sampel $\mathbf{S}^{-1}$.  

2. **Uji Kesamaan Beberapa Mean (MANOVA)**  
   - Membagi variasi total menjadi antar-perlakuan (between) dan dalam-perlakuan (within) sesuai jumlah variabel respon.  
   - Wilks’ Lambda, Pillai’s Trace, dsb. menilai apakah paling tidak satu vektor mean berbeda.

3. **Perlu Asumsi**  
   - Data berasal dari *multivariate normal distribution*.  
   - Matriks kovariansi homogen (terutama untuk MANOVA).  
   - Sampel acak independen.

--- 

### Video Rekaman Kelas

**Tautan Video Pertemuan 3**: [Uji Hipotesis Vektor Mean Populasi (SATS4421)](https://www.youtube.com/watch?v=jyMNUMEn7-s)

<VidStack
  src="https://www.youtube.com/watch?v=jyMNUMEn7-s"
  title="SIGMA - Pengantar Statistika Matematis I (SATS4410) Pertemuan 3"
/>

::: tip
Tonton untuk penjelasan lebih detail dan contoh perhitungan manual $T^2$ Hotelling.
:::

--- 

**Referensi Utama**  
- Haryatmi & Guritno. *(2019)*. **Metode Statistika Multivariat (Edisi 2)**. Universitas Terbuka.

> *“Uji $T^2$ Hotelling adalah analisis multivariat yang memperluas $t$-Test univariat ke dimensi lebih tinggi.”*



## Bagikan
<Share colorful />
<GitContributors />
<GitChangelog />