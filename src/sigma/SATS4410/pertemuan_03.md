--- 
title: SATS4410 - Pertemuan 3
date: 2023-12-12
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
--- 

# SIGMA – Pengantar Statistika Matematis I (SATS4410) Pertemuan 3

## Detail Pertemuan

- **Hari/Tanggal**: Selasa, 12 Desember 2023  
- **Jam**: 19.30–21.00 WIB  
- **Topik**: Evaluasi Pengujian Hipotesis & Penduga Selang  
- **Pemateri Utama**: Adelin Vinda Septiani

--- 

## Ringkasan Materi

Pada pertemuan ketiga **Pengantar Statistika Matematis I (SATS4410)**, kita membahas dua topik utama:

--- 

### 1) Evaluasi Pengujian Hipotesis

1. **Kesalahan Jenis I dan Jenis II**  
   - **Kesalahan Jenis I**: Menolak $H_0$ padahal $H_0$ benar, dilambangkan sebagai $\alpha$.  
   - **Kesalahan Jenis II**: Menerima $H_0$ padahal $H_1$ benar, dilambangkan sebagai $\beta$.

2. **Fungsi Kuasa (Power Function)**  
   - Didefinisikan sebagai peluang menolak $H_0$ untuk setiap nilai parameter $\theta$.  
   - Dalam notasi matematis:

   $$
   \beta(\theta) \;=\; P(\text{Tolak } H_0 \,\big|\; \theta).
   $$

   - Uji yang baik diharapkan memiliki fungsi kuasa besar (meminimalkan kesalahan jenis II) dan terkendali pada kesalahan jenis I (taraf $\alpha$).

3. **Uji Paling Kuasa Seragam (UPKS / UMP)**  
   - Menerapkan **Lemma Neyman–Pearson** untuk kasus sederhana vs. sederhana.  
   - Menentukan daerah kritis dengan membandingkan peluang di bawah hipotesis nol dan satu:

   $$
   \left\{\,x : \frac{f(x \mid \theta_0)}{f(x \mid \theta_1)} < k \right\}.
   $$

   - Contoh penerapan pada distribusi **Bernauli**, **Uniform**, **Eksponensial**, atau **Beta**.

--- 

### 2) Penduga Selang (Confidence Interval)

1. **Konsep Penduga Selang**  
   - Berbeda dengan penduga titik, penduga selang memberikan interval $[L, U]$ yang diharapkan mengandung parameter $\theta$ dengan probabilitas $1 - \alpha$.  

2. **Metode Pembalikan Statistik Uji**  
   - Jika kita memiliki daerah penolakan $H_0$ untuk taraf $\alpha$, maka komplemen (daerah penerimaan) dapat dibalik menjadi **selang kepercayaan**.  
   - Contoh: Gunakan *Likelihood Ratio Test* (LRT) atau *Uji Paling Kuasa Seragam* (UPKS), lalu “balik” kriteria tolak/terima $H_0$ guna membangun interval bagi $\theta$.

3. **Metode Pivot**  
   - Mencari fungsi $Q(X,\theta)$ yang memuat $\theta$, namun distribusinya tidak bergantung pada $\theta$. Fungsi semacam itu disebut *Pivot*.  
   - Dengan Pivot, kita dapat menyusun selang kepercayaan $[L(X), U(X)]$ yang memenuhi

   $$
   P\bigl(L(X) \le \theta \le U(X)\bigr) \;=\; 1 - \alpha.
   $$

   - Contoh: Pada distribusi **Beta($\theta$, 1)**, transformasi $T = X^\theta$ bisa dijadikan Pivot bila $T$ tidak lagi bergantung pada $\theta$.

--- 

### Video Rekaman Kelas

Tonton rekaman **SIGMA – Pengantar Statistika Matematis I (SATS4410) Pertemuan 3** di tautan berikut untuk mempelajari contoh penerapannya:

<VidStack
  src="https://www.youtube.com/watch?v=OzMECNiqIGc"
  title="SIGMA - Pengantar Statistika Matematis I (SATS4410) Pertemuan 3"
/>

--- 

> *“Dengan memahami kesalahan jenis I ($\alpha$), kesalahan jenis II ($\beta$), serta konstruksi selang kepercayaan, kita memperoleh perangkat inferensi statistik yang lebih komprehensif.”*


<GitContributors />
<GitChangelog />