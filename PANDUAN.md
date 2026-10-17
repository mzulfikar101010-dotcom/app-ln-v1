# Laporan Pesanan — Panduan Pasang (±10 menit)

## 1. Backend (Google Sheet + Apps Script)
1. Buat Google Sheet baru (nama bebas).
2. Menu **Extensions › Apps Script** → hapus isi bawaan → tempel seluruh isi `Code.gs`.
3. Ganti di bagian `CONFIG`: `SANDI_INVESTOR`, `SANDI_ADMIN`, `SECRET` (teks acak panjang).
4. **Deploy › New deployment › Web app** → Execute as: **Me** · Who has access: **Anyone** → Deploy → izinkan akses.
5. Salin link yang berakhiran **/exec**.

## 2. Aplikasi (GitHub Pages)
1. Buka `config.js`, isi `API_URL` dengan link /exec tadi.
2. Upload semua file di folder ini ke repository GitHub (root).
3. Settings › Pages › Branch `main` / root → Save. Link aplikasi muncul beberapa menit kemudian.

## 3. Pemakaian
- **Investor**: buka link → masukkan SANDI_INVESTOR (sekali per perangkat) → Pasang ke layar utama.
- **Anda (admin)**: masuk dengan SANDI_ADMIN → tab **Unggah** → pilih file .xlsx mingguan → Simpan.
  Order ID yang sama otomatis diperbarui mengikuti file terbaru.

## Catatan
- Salah sandi 5× berturut-turut → terkunci 15 menit (ubah di CONFIG).
- Mengganti sandi di Code.gs lalu deploy ulang (Manage deployments › Edit › New version) otomatis mengeluarkan semua perangkat lama.
- Setiap kali Code.gs diubah, deploy ulang dengan "New version"; link /exec tetap sama.
- Harga, diskon, dan uang cair tidak pernah dikirim ke Sheet maupun aplikasi. Nama/alamat pembeli juga tidak disimpan.
- Pasang di iPhone: Safari › Bagikan › Tambah ke Layar Utama. Android: tombol "Pasang aplikasi" di halaman Ringkasan.
