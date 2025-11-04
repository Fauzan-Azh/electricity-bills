# Instruksi Setup Environment Variables

## 🔧 Perbaikan Error Database Connection

### Error yang muncul:
```
Can't reach database server at `db:5432`
```

**Penyebab**: DATABASE_URL masih mengarah ke Docker container (`db:5432`) padahal menggunakan pgAdmin lokal.

---

## ✅ Solusi

### 1. Buat File `.env.local`

Buat file `.env.local` di root project dengan isi:

```env
NODE_ENV=development

POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_DB=electricity

# Koneksi tanpa password (untuk PostgreSQL lokal tanpa password)
DATABASE_URL="postgresql://postgres@localhost:5432/electricity?schema=public"

# Jika PostgreSQL Anda menggunakan password, gunakan:
# DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/electricity?schema=public"

JWT_SECRET=9f2c1d1d2e1b9f7c0b72c8dbd53e6adcb17422bb4fa67c51b93e24dcb2a9c8f9
```

### 2. Konfigurasi Database

**Untuk PostgreSQL tanpa password:**
```env
DATABASE_URL="postgresql://postgres@localhost:5432/electricity?schema=public"
```

**Untuk PostgreSQL dengan password:**
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/electricity?schema=public"
```

Ganti `YOUR_PASSWORD` dengan password PostgreSQL Anda.

### 3. Restart Development Server

Setelah membuat `.env.local`:

```bash
# Stop server (Ctrl+C)
npm run dev
```

---

## 🔐 Update: Enkripsi SHA-256

Aplikasi sekarang menggunakan **SHA-256** untuk enkripsi password dan username (jika diperlukan).

### Password Default Users

- **Password**: `1234`
- **SHA-256 Hash**: `03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4`

### Update Database

Jika database sudah terisi dengan hash bcrypt lama, jalankan script SQL berikut di pgAdmin:

```sql
-- Update password user yang ada dengan SHA-256 hash
UPDATE "User" 
SET "Password" = '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'
WHERE "Username" IN ('Facility management', 'student hausing');
```

Atau jalankan ulang file `database/insert_users.sql` yang sudah diupdate dengan SHA-256.

---

## 📝 Checklist Setup

- [ ] File `.env.local` sudah dibuat
- [ ] DATABASE_URL sudah dikonfigurasi sesuai setup PostgreSQL (dengan/tanpa password)
- [ ] Database `electricity` sudah dibuat di pgAdmin
- [ ] File `database/schema.sql` sudah dijalankan di pgAdmin
- [ ] Password user sudah diupdate ke SHA-256 hash (jika database sudah ada data lama)
- [ ] PostgreSQL service sedang running
- [ ] Development server sudah di-restart

---

## 🔍 Verifikasi

### Test Koneksi Database

Setelah setup, test dengan menjalankan aplikasi. Jika masih error, cek:

1. **PostgreSQL service running?**
   ```bash
   # Windows: Cek di Services atau
   psql -U postgres
   ```

2. **Database `electricity` sudah dibuat?**
   ```sql
   -- Di pgAdmin Query Tool
   SELECT * FROM "User";
   ```

3. **Port 5432 tidak digunakan aplikasi lain?**
   - Pastikan tidak ada konflik port

4. **Password PostgreSQL benar?**
   - Jika menggunakan password, pastikan di `.env.local` sesuai

---

## 📌 Catatan Penting

- File `.env.local` **TIDAK** di-commit ke git (sudah di `.gitignore`)
- File `.example.env.dev` adalah template, bukan file konfigurasi aktif
- Next.js akan membaca `.env.local` secara otomatis saat development

