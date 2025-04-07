---
title: Memanfaatkan SAS Studio & SAS OnDemand for Academics untuk Mahasiswa Statistika UT
date: 2025-04-07
category:
  - How To
  - Tutorials
icon: book-open
index: true
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Himastatut Docs"
    email: "himastatut@gmail.com"
    url: "https://himastatut.my.id/article/"
---

# Tutorial 05: Memanfaatkan SAS Studio & SAS OnDemand for Academics (ODA)

SAS Studio adalah lingkungan pengembangan berbasis web milik SAS® yang memungkinkan kita **menulis kode, menjalankan *task* point‑and‑click, hingga mengotomasi alur data** langsung dari peramban. Melalui layanan **SAS OnDemand for Academics (ODA)**, mahasiswa dapat mengakses SAS Studio *gratis* di cloud – cukup daftar, verifikasi email, dan mulai menganalisis data tanpa instalasi software [^1].

## 1  Apa itu SAS Studio?

- **IDE berbasis web**: editor kode dengan auto‑complete, highlight sintaks, Git integration, serta *task* visual yang menghasilkan kode SAS otomatis [^5].
- **No‑code → low‑code → full‑code**: pemula bisa memakai 150+ *task* siap pakai; pengguna mahir dapat menulis SAS atau Python, lalu menyatukannya dalam *Flow* grafis.
- **Orkestrasi end‑to‑end**: *Flow canvas* memetakan seluruh pipeline – mulai *import* data, transformasi, analisis statistik, hingga publikasi output.

## 2  Mengapa Penting bagi Mahasiswa Statistika UT?

1. **Akses alat industri secara legal & gratis** – SAS dipakai di > 80 000 organisasi dunia; menguasainya menambah daya saing lulusan [^1].
2. **Komputasi cloud 5 GB per akun** – cukup untuk dataset kuliah, tugas akhir, atau riset ringan tanpa repot instalasi [^1].
3. **Fitur statistik lengkap** – prosedur `PROC MEANS`, `PROC REG`, `PROC GLM`, uji survival, sampai *high‑performance modeling* tersedia di SAS Studio.
4. **Kolaborasi riset** – platform terpusat memudahkan berbagi kode & data lintas departemen, mempercepat publikasi ilmiah [^7].

## 3  Bagaimana SAS Studio Membantu Saat Digunakan?

| Kebutuhan                 | Fitur SAS Studio                                         |
|---------------------------|-----------------------------------------------------------|
| Analisis cepat tanpa kode | Drag‑and‑drop *task* statistik, visualisasi, data prep [^5] |
| Pemrograman efisien       | Auto‑complete, snippet, debugger, Git [^5]               |
| Pipeline terkelola        | *Flows* grafis + penjadwalan job                          |
| Integrasi Python/R        | Editor Python bawaan & *step* Python di *Flow* [^5]      |
| Berbagi hasil             | Ekspor hasil ke PDF, Excel, atau repositori Git          |

## 4  Syarat & Ketentuan Akun SAS OnDemand for Academics

| Area              | Ketentuan Utama                                                                    |
|-------------------|------------------------------------------------------------------------------------|
| **Kelayakan**     | Mahasiswa, dosen, staf, peneliti, atau *independent learner*; pemakaian non‑komersial [^2] |
| **SAS Profile**   | Wajib punya SAS Profile (gratis) & email aktif                                     |
| **Home Region**   | Pilih region terdekat saat registrasi (tidak bisa diubah) [^2]                     |
| **Kuota Cloud**   | 5 GB personal + ekstra 3 GB untuk instruktur kursus [^1]                           |
| **Session Limit** | Otomatis logout jika idle 3 jam; sesi apa pun berakhir 6 jam [^3]                  |
| **Lisensi Klik**  | Harus menyetujui *click‑license* saat login pertama [^2]                           |

## 5  Tutorial Membuat Akun ODA

1. **Buka** `welcome.oda.sas.com` → klik **Sign In**.  
2. **Buat SAS Profile** jika belum ada; verifikasi email.  
3. **Login** lagi, pilih jalur *Student* / *Independent Learner*.  
4. **Isi formulir** (nama, institusi, negara) & pilih **home region**.  
5. **Centang** persetujuan lisensi → **Register**.  
6. Tunggu email konfirmasi ± 10 menit; dashboard akan menampilkan tautan **SAS Studio**.  

> **Tips:** Jika dosen memberi *course code*, masukkan pada langkah 4 agar langsung terhubung ke kelas.

## 6  Why People Use SAS Studio

- **All‑in‑one browser IDE** – tak perlu VPN/lab kampus.  
- **Belajar & riset** – prosedur statistik yang diuji industri memudahkan replikasi hasil penelitian.  
- **Open‑source friendly** – bisa menjalankan Python, memanggil R lewat SASPy, atau ekspor data ke pandas.  
- **Governance** – kontrol hak akses & *audit trail* cocok untuk tugas akhir yang melibatkan data sensitif.  

## 7  Typical Workflow for a Data Project di SAS Studio

1. **Data Prep**  → *Import* CSV/Excel, bersihkan data dengan *Filter/Branch Rows*.  
2. **Exploratory Analysis**  → Gunakan *Summary Statistics* & *Correlation* tasks.  
3. **Modeling**  → `PROC REG`, *Regression* task, atau Python scikit‑learn di *step* Python.  
4. **Automation**  → Susun node di *Flow*, jadwalkan via scheduler.  
5. **Share & Deploy**  → Ekspor laporan PDF/HTML, commit kode ke Git, atau panggil lewat API.  

## 8  Learning Resources

- **SAS Studio Help Center** – dokumentasi interaktif setiap rilis [^6].  
- **Video *Getting Started with SAS Studio*** (support.sas.com) [^6].  
- **Free e‑learning**: *Programming 1* & *Statistics 1* tersedia di dashboard ODA [^1].  
- **Community & Blog**: *SAS Software for Learning* Community, artikel teknik terbaru [^6].  

---

## Referensi

[^1]: SAS Institute, "SAS OnDemand for Academics – Access SAS software in the cloud – for free." Available: https://www.sas.com/en_my/software/on-demand-for-academics.html. Accessed: Apr. 7, 2025.
[^2]: SAS Support, "SAS OnDemand for Academics FAQ – General Questions." Available: https://support.sas.com/ondemand/caq_new.html. Accessed: Apr. 7, 2025.
[^3]: SAS Support, "Do SAS sessions expire?" SAS OnDemand for Academics FAQ". Available: https://support.sas.com/ondemand/caq_new.html#:~:text=SAS%20sessions%20are%20established%20when,do%20in%20my%20SAS%20sessions?. Accessed: Apr. 7, 2025.
[^4]: SAS Institute, SAS License Agreement (click‑license). Available: https://support.sas.com/ondemand/pdf/click_license.pdf. Accessed: Apr. 7, 2025.
[^5]: SAS Institute, "SAS Studio Features." Available: https://www.sas.com/en_my/software/studio/features-list.html. Accessed: Apr. 7, 2025.
[^6]: SAS Support, "SAS Studio – Learn & Support." Available: https://support.sas.com/en/software/studio-support.html. Accessed: Apr. 7, 2025.
[^7]: SAS Institute, "Academic Research – Why choose SAS for academic research?" Available: https://www.sas.com/en_sg/industry/education/solution/higher-ed/academic-research.html. Accessed: Apr. 7, 2025.

## Bagikan
<Share colorful />
<GitContributors />
<GitChangelog />
