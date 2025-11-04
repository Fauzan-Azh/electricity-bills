# 🔧 Fix Database Authentication Error

## ❌ Error yang Muncul

```
Authentication failed against database server, the provided database credentials for `postgres` are not valid.
```

## 🔍 Penyebab

Password PostgreSQL di `.env.local` tidak sesuai dengan password yang sebenarnya di pgAdmin.

## ✅ Solusi

### Langkah 1: Cek Password PostgreSQL

Buka pgAdmin dan cek password untuk user `postgres`. Biasanya:
- Default password: `1234` (sesuai yang disebutkan sebelumnya)
- Atau password yang Anda set sendiri

### Langkah 2: Update File `.env.local`

Edit file `.env.local` di root project dan ubah `DATABASE_URL` sesuai password PostgreSQL Anda:

#### Jika Password = `1234`:
```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/electricity?schema=public"
```

#### Jika Password = `postgres`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/electricity?schema=public"
```

#### Jika Password kosong (tidak ada password):
```env
DATABASE_URL="postgresql://postgres@localhost:5432/electricity?schema=public"
```

#### Format Umum:
```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"
```

### Langkah 3: Restart Server

Setelah update `.env.local`:
1. Stop server (Ctrl+C)
2. Jalankan lagi: `npm run dev`

## 🔍 Cara Cek Password PostgreSQL

### Via pgAdmin:
1. Klik kanan pada server PostgreSQL
2. Pilih "Properties"
3. Tab "Connection"
4. Lihat field "Password" (atau input password saat connect)

### Via Command Line:
Coba connect dengan password berbeda:
```bash
# Coba tanpa password
psql -U postgres -h localhost -d electricity

# Coba dengan password 1234
psql -U postgres -h localhost -d electricity -W
# (akan prompt password, coba: 1234, postgres, atau kosong)
```

## 📝 Contoh File `.env.local` Lengkap

```env
NODE_ENV=development

POSTGRES_USER=postgres
POSTGRES_PASSWORD=1234
POSTGRES_DB=electricity
DATABASE_URL="postgresql://postgres:1234@localhost:5432/electricity?schema=public"

JWT_SECRET=9f2c1d1d2e1b9f7c0b72c8dbd53e6adcb17422bb4fa67c51b93e24dcb2a9c8f9
```

## ⚠️ Troubleshooting

### Jika masih error setelah update password:

1. **Cek PostgreSQL service running:**
   ```powershell
   # Windows
   Get-Service -Name postgresql*
   ```

2. **Cek port 5432 tidak digunakan:**
   ```powershell
   netstat -an | findstr 5432
   ```

3. **Cek database `electricity` sudah dibuat:**
   ```sql
   -- Jalankan di pgAdmin
   SELECT datname FROM pg_database WHERE datname = 'electricity';
   ```

4. **Test connection langsung:**
   ```bash
   psql -U postgres -h localhost -d electricity
   ```

5. **Cek file `.env.local` benar-benar terbaca:**
   - Pastikan file ada di root project
   - Pastikan tidak ada typo
   - Restart VS Code/Editor
   - Restart terminal

## 💡 Tips

- **Jangan commit `.env.local`** ke git (sudah di .gitignore)
- **Selalu restart server** setelah update `.env.local`
- **Gunakan password yang sama** di semua tempat (pgAdmin connection, .env.local)

