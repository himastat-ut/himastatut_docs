---
title: SATS4324 - Pertemuan 1; Pengantar Inferensi Bayesian
date: 2025-04-29
icon: chart-line
category: 
  - STATGEN
  - Inferensi Bayesian
layout: SlidePage
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Himastatut Docs"
    email: "himastatut@gmail.com"
    url: "https://himastatut.my.id/article/"
tags:
  - inferensi bayesian
  - statistika
  - statgen
image: "./../statgen.png"
description: "StatGen Class 4.0 - Pengantar Inferensi Bayesian (SATS4324) adalah program untuk memperkenalkan mahasiswa pada konsep dasar inferensi bayesian dan aplikasinya dalam analisis data."
index: false
---

@slidestart

## SATS4324 - Pertemuan 1: Pengantar Inferensi Bayesian

**Andi Rosilala**  
*Mahasiswa Statistika UPBJJ Surakarta*

---

## Siapa itu Thomas Bayes?

- **Lahir**: Sekitar tahun 1702, London, Inggris  
- **Ayah**: Joshua Bayes, pendeta Presbyterian  
- **Pendidikan**: University of Edinburgh (1719–1722), fokus pada logika dan matematika  
- **Karya Utama**: "Essay Towards Solving a Problem in the Doctrine of Chances" (1763)  
- **Meninggal**: 1761, sekitar usia 60 tahun

<small> 
Bayes adalah pendeta dan matematikawan yang terkenal dengan teori probabilitas terbalik (posterior), pertama kali diformulasikan dalam karyanya yang terbit setelah wafat.
</small>

---

## Teorema Bayes

Teorema Bayes menyatakan bagaimana kita dapat memperbarui peluang suatu hipotesis berdasarkan bukti atau informasi baru yang kita dapatkan.

$$P(H | E) = \frac{P(E | H) \cdot P(H)}{P(E)}$$

- **Prior Belief**: Keyakinan awal terhadap hipotesis
- **Posterior Distribution**: Probabilitas hipotesis setelah melihat bukti baru

---

## Probabilitas Bersyarat

- **Contoh**: Di sebuah asrama dengan 30 mahasiswa, 9 wanita dan 12 mahasiswa jurusan statistika, berapa peluang seorang mahasiswa wanita berasal dari jurusan statistika?

$$
P(W | S) = \frac{P(W \cap S)}{P(S)}
$$

---

## Bayesian vs Frequentist
<small>

### **Pendekatan Frequentist**
- Fokus pada frekuensi kejadian dalam data.
- Pengujian hipotesis biner: Tolak atau tidak tolak H₀.

### **Pendekatan Bayesian**
- Memperbarui keyakinan berdasarkan data dan prior.
- Menyediakan interval yang lebih intuitif: **Credible Interval**.

Bayesian lebih fleksibel dan memungkinkan pernyataan probabilistik langsung tentang parameter yang tidak diketahui.
</small>

---

## Contoh Kasus: Tes Kanker Serviks

**Kasus**: Seorang wanita mengikuti tes kanker serviks dengan akurasi 90%. Meski tes positif, prevalensi penyakit hanya 1%. Dengan Bayesian, kita menghitung peluang sebenarnya memiliki kanker setelah tes positif.

---

## Update Keyakinan Seiring Waktu

### **Contoh**: Prediksi Cuaca

- **Pagi**: 50% kemungkinan hujan.
- **Siang**: 60% berdasarkan awan mendung.
- **Sore**: 75% setelah melihat pengendara motor memakai jas hujan.

---

## Quiz Interaktif: Frequentist vs Bayesian

**Pernyataan**: Seorang wanita tanpa gejala hasil tes kanker serviks positif. Prevalensi kanker serviks 1%, dan akurasi tes 90%. Peluang dia benar-benar mengidap kanker setelah tes positif adalah?

<small>Pilihan: 80%, 90%, 22%, 8%, 1%</small>

---

## Penerapan Teori Bayesian dalam Kehidupan Sehari-hari

- **Skenario Kehidupan Sehari-hari**: Membantu memperbarui keyakinan terhadap peristiwa berdasarkan data baru.

---

## Bayes dalam Praktik

- **Contoh**: Penggunaan Bayesian untuk memperbarui keyakinan pada proporsi BPR sehat.

$$
P(p > 0.80 | data) = 1 - CDF\_Beta(35, 10)(0.80)
$$

---

## Keunggulan Bayesian

1. **Keterbukaan dan Reproducibility**: Semua asumsi, termasuk prior, dicatat secara eksplisit.
2. **Fleksibilitas**: Bayesian memperbolehkan pembaruan keyakinan seiring bertambahnya data.
3. **Penggunaan Informasi Sebelumnya**: Bayesian memanfaatkan data sebelumnya yang lebih relevan.

---

### **Thanks for Learning!**

Untuk informasi lebih lanjut:
- 🌐 [Website Universitas Terbuka](https://www.ut.ac.id)
- 📱 Follow kami di [Instagram](https://instagram.com/ut_official)

@slideend
