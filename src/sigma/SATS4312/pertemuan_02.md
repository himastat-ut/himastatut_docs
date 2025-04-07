--- 
title: SATS4312 - Pertemuan 2
date: 2023-12-13
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

# SIGMA – Model Linear Terapan (SATS4312) Pertemuan 2

## Detail Pertemuan

- **Hari/Tanggal**: Rabu, 13 Desember 2023  
- **Jam**: 19.30–21.00 WIB  
- **Topik**: Regresi Linear dengan Variabel Indikator & Model Regresi dengan Variabel Respon Indikator  
- **Pemateri Utama**: Ibu Rafika Ovas Sibuuan (Tutor MLT UT)

--- 

### Ringkasan Materi

Pertemuan kedua mata kuliah **Model Linear Terapan (SATS4312)** membahas dua pokok utama:

1. **Regresi Linear dengan Variabel Indikator (Variable Dummy)**  
   - **Konsep**: Variabel bebas (independen) kadang berupa data kualitatif/kategori yang dapat dinyatakan dengan 0/1.  
   - **Contoh**: Sebuah penelitian ingin memodelkan *umur alat pemotong (y)* berdasarkan *kecepatan mesin (x1)* dan *tipe alat (x2)*, di mana tipe alat A = 0, tipe B = 1.  
   - **Model Umum**:
     $$
     y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \varepsilon
     $$
     di mana $(x_2 \in \{0,1\})$ bernilai **indikator** untuk kategori.  
   - **Estimasi Parameter** masih mengikuti prinsip *Ordinary Least Squares (OLS)* atau pendekatan matriks, dengan menyisipkan kolom dummy ke matriks desain $ $X$.

2. **Model Regresi dengan Variabel Respon Indikator**  
   - **Konsep**: Variabel terikat/respon $($y$)$ adalah bersifat biner (0 atau 1). Misalnya, “sukses-gagal”, “ya-tidak”, “mengenai sasaran-tidak mengenai sasaran.”  
   - **Masalah dalam Regresi Linear Biasa**:
     - Residual tidak berdistribusi normal  
     - Varians tidak konstan (heteroskedastis)  
     - Prediksi linear bisa di luar range $[0,1]$  
   - **Metode Kuadrat Terkecil Tertimbang (Weighted Least Squares, WLS)**  
     - Menangani kasus heteroskedastisitas untuk respon biner, dengan menambahkan bobot $ $w_i$.  
     - Pembobotan umumnya: $w_i = \frac{1}{\hat{p}_i (1 - \hat{p}_i)}$, di mana $\hat{p}_i$ adalah perkiraan probabilitas keberhasilan.  
   - **Regresi Logistik**:
     - Pendekatan lain yang lebih umum untuk variabel respon biner, memakai fungsi logit:
       $$
       \ln \left( \frac{p}{1-p} \right) \;=\; \beta_0 + \beta_1 x \quad\Longrightarrow\quad
       p(x) \;=\; \frac{ e^{\beta_0 + \beta_1 x} }{1 + e^{\beta_0 + \beta_1 x}}.
       $$
     - Contoh penerapan: Memodelkan *probabilitas kupon dikembalikan* berdasarkan nilai potongan harga.

--- 

### Poin-Poin Utama

1. **Regresi Linear dengan Dummy/Indikator**  
   - Bentuk umum sama dengan regresi berganda. Namun, kolom dummy (0/1) ditambahkan.  
   - Interpretasi koefisien pada dummy: perubahan intercept atau slope tergantung definisi dummy.

2. **Regresi dengan Respon Biner**  
   - Pemakaian *Metode Kuadrat Terkecil Tertimbang (WLS)* untuk memperbaiki asumsi varians konstan, karena $\mathrm{Var}(Y_i) = p_i(1 - p_i)$.  
   - Kadang lebih tepat menggunakan *Regresi Logistik* agar prediksi $\hat{p}$ selalu berada di $ $(0,1)$.

3. **Contoh Penerapan**  
   - Membentuk tabel, menentukan dummy untuk kategori, melakukan perhitungan manual OLS/matriks.  
   - Menentukan bobot $w_i$ untuk WLS: $w_i = 1 / \{\hat{p}_i (1 - \hat{p}_i)\}$, lalu menyusun ulang matriks desain.  
   - Regresi logistik menggunakan turunan metode *maximum likelihood*, di mana *output* lebih konsisten untuk data biner.

### Video Rekaman Kelas

Tonton rekaman **SIGMA – Model Linear Terapan (SATS4312) Pertemuan 2** di tautan berikut:

<VidStack
  src="https://www.youtube.com/watch?v=kQO9yR8yj40"
  title="Pert. ke 2 MLT (SATS4312) #Regresi Linear dgn Var.Indikator & Model Reg. dgn Var.Respon Indikator#"
/>

--- 

> *"Pemodelan dengan variabel indikator memudahkan kita menampung data kualitatif, sedangkan penanganan respon biner memerlukan pendekatan tersendiri, seperti Weighted Least Squares atau regresi logistik."*


## Bagikan
<Share colorful />
<GitContributors />
<GitChangelog />