PORTOFOLIO RINDANG NAUFAL AGANTA
=================================
Layout diperbarui agar mengikuti gambar referensi: navbar 66px, hero 370px dengan visual workspace di kanan, baris profil + keahlian, lalu proyek dan kontak dalam satu baris.

Jalankan:
1. Ekstrak ZIP.
2. Masuk folder portfolio_rindang.
3. Jalankan: python3 -m http.server 8000
4. Buka http://127.0.0.1:8000

Ganti email dan tautan sosial contoh dengan akun asli sebelum dipublikasikan.
CV awal juga perlu diperiksa dan dilengkapi.

LOGO KEAHLIAN
Logo teknologi menggunakan file SVG brand dari Simple Icons CDN dan memerlukan koneksi internet saat halaman dibuka.

UPDATE VISUAL HERO
Background hero dibersihkan dari tulisan yang sempat ikut terpotong pada gambar referensi. Judul nama tetap teks HTML yang tajam; foto profil tetap foto asli.

LOGO FIX
Wazuh, pfSense, dan Cisco menggunakan SVG lokal di folder assets agar tidak terpotong atau tertukar dengan logo Linux. Logo lain dimuat dari sumber brand SVG.

TAHAP PENYEMPURNAAN TAMPILAN
- Logo Kali Linux dan Penetration Testing diberi kontras cyan/putih agar terlihat jelas di kartu gelap.
- Ukuran logo Wazuh, pfSense, Cisco, dan logo bahasa pemrograman diseragamkan agar tidak terpotong.
- Kartu keahlian menjaga teks tetap di dalam kartu pada desktop dan layar kecil.

FIX LOGO FINAL: semua ikon keahlian sudah disimpan lokal di assets/*.svg; tidak perlu mengambil logo dari CDN eksternal.

LOGO BRAND UPDATE
Kartu keahlian sekarang memuat logo brand dari sumber vendor/Devicon CDN, bukan gambar SVG ilustrasi buatan. Koneksi internet diperlukan agar logo eksternal dapat dimuat.

LOGO FIX — LOCAL ASSETS
Semua gambar keahlian sekarang merujuk ke file lokal dalam assets/ agar tidak muncul teks alt karena CDN gagal.
Wazuh menggunakan wordmark (wazuh dengan titik biru); ikon lain menggunakan aset SVG lokal yang tersedia di project.
Catatan: file logo lokal yang berupa ilustrasi/wordmark bukan klaim bahwa seluruhnya adalah file master resmi vendor.

MANUAL LOGO REVISION
Kali, Wazuh, pfSense, dan Cisco SVG lokal dirapikan manual; alignment dan proporsi kartu keahlian diperbaiki.
