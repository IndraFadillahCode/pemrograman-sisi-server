# 🧾 Inventory Management API - UTS Backend Proyek

Aplikasi backend ini dibangun untuk mengelola sistem inventaris pada suatu toko, mencakup pengelolaan barang, kategori, pemasok, dan admin yang bertanggung jawab terhadap perubahan data.

---

## 🚀 Tech Stack
- **Node.js** + **Express.js**
- **PostgreSQL** (via Docker)
- **Sequelize** (ORM)
- **Docker + docker-compose**

---

## 🏗️ Struktur Folder
```
project-root/
├── src/
│   ├── app.js               # Entry point Express
│   ├── routes/              # Routing untuk API
│   └── controllers/         # Logic untuk setiap endpoint
├── public/                  # HTML frontend
│   ├── index.html
│   ├── admins.html
│   ├── items.html
│   ├── categories.html
│   ├── suppliers.html
│   └── summary.html
├── models/                  # Sequelize models
├── migrations/              # DB migrations
├── seeders/                 # Data dummy
├── config/                  # Konfigurasi Sequelize
├── docker-compose.yml       # Docker environment
├── Dockerfile               # Container image
├── .env                     # Environment variable
└── README.md                # Dokumentasi proyek ini
```

---

## ⚙️ Setup & Menjalankan Project

### 1. Clone & Install
```bash
git clone <repo-url>
cd inventory-backend
npm install
```

### 2. Jalankan via Docker
```bash
docker-compose up --build
```

### 3. Jalankan Migrasi & Seeder
```bash
docker-compose exec app npx sequelize-cli db:migrate
docker-compose exec app npx sequelize-cli db:seed:all
```

---

## 📦 API Endpoint Summary

### 🔐 Admins
- `GET /api/admins` - List admin
- `POST /api/admins` - Buat admin baru

### 🗂️ Categories
- `GET /api/categories` - List kategori
- `POST /api/categories` - Tambah kategori
- `GET /api/categories/summary` - Ringkasan per kategori
- `GET /api/categories/report` - Laporan barang berdasarkan kategori

### 🧾 Suppliers
- `GET /api/suppliers` - List supplier
- `POST /api/suppliers` - Tambah supplier
- `GET /api/suppliers/summary` - Ringkasan stok per supplier

### 📦 Items
- `GET /api/items` - List barang
- `POST /api/items` - Tambah barang
- `GET /api/items/summary` - Ringkasan stok keseluruhan
- `GET /api/items/summary/system` - Ringkasan sistem total
- `GET /api/items/low-stock?threshold=5` - Barang dengan stok rendah
- `GET /api/items/by-category/:category_id` - Barang berdasarkan kategori

---

## 🌐 Akses Frontend (HTML)
Setelah backend berjalan, kamu bisa buka tampilan antarmuka lewat browser di:

- `http://localhost:3000/index.html` - Halaman utama
- `http://localhost:3000/admins.html` - Kelola admin
- `http://localhost:3000/categories.html` - Kelola kategori
- `http://localhost:3000/suppliers.html` - Kelola supplier
- `http://localhost:3000/items.html` - Kelola barang
- `http://localhost:3000/summary.html` - Ringkasan inventaris

Setiap halaman mendukung:
- Form input
- Tabel data
- Tampilan JSON respon dari API

---

## 🤪 Testing API
Gunakan tools seperti **Postman** atau **curl** untuk mencoba endpoint.
Pastikan database sudah dimigrasi dan terisi seeder.

---

## 🧠 Catatan Tambahan
- Pastikan ID yang dikirim ke `created_by`, `category_id`, dan `supplier_id` valid
- Jangan lupa restart server setelah mengubah controller atau relasi

---

## 📖 Alur Pengerjaan Proyek

Berikut adalah langkah-langkah yang dilakukan selama pengerjaan proyek ini:

1. **Inisialisasi Proyek**:
   - Membuat struktur folder awal menggunakan `Express.js`.
   - Mengatur konfigurasi `Sequelize` untuk koneksi ke database PostgreSQL.

2. **Setup Docker**:
   - Membuat file `Dockerfile` dan `docker-compose.yml` untuk menjalankan aplikasi dan database dalam container.

3. **Membuat Model dan Migrasi**:
   - Membuat model untuk `Admins`, `Categories`, `Suppliers`, dan `Items`.
   - Menulis migrasi database untuk membuat tabel-tabel yang dibutuhkan.

4. **Menambahkan Seeder**:
   - Membuat data dummy untuk setiap tabel menggunakan `Sequelize Seeder`.

5. **Membangun API Endpoint**:
   - Menulis route dan controller untuk setiap fitur CRUD.
   - Menambahkan validasi input dan error handling.

6. **Membuat Frontend HTML**:
   - Membuat halaman HTML sederhana untuk mengakses API secara visual.
   - Menambahkan form input dan tabel data untuk setiap entitas.

7. **Testing API**:
   - Menggunakan Postman untuk menguji setiap endpoint.
   - Memastikan semua fitur berjalan sesuai dengan spesifikasi.

8. **Dokumentasi**:
   - Menulis README.md untuk menjelaskan proyek, termasuk setup, struktur folder, dan daftar endpoint.

9. **Finalisasi**:
   - Melakukan review kode dan memastikan semua fitur berjalan dengan baik.

---

## 👨‍💻 Dibuat Oleh
Indra Fadillah A11.2022.14186