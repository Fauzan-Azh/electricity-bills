# 🔧 Cara Membuat File .env.local

## ⚠️ PENTING: File .env.local BELUM ADA!

File ini diperlukan agar aplikasi connect ke pgAdmin lokal, bukan Docker.

## 📝 Langkah Membuat File .env.local

### Cara 1: Manual (Disarankan)

1. **Buka folder project**: `d:\FILE\electricity-bills`
2. **Buat file baru** dengan nama: `.env.local` (dengan titik di depan, TANPA ekstensi)
3. **Copy-paste isi berikut** ke file tersebut:

```env
NODE_ENV=development

POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_DB=electricity
DATABASE_URL="postgresql://postgres@localhost:5432/electricity?schema=public"

JWT_SECRET=9f2c1d1d2e1b9f7c0b72c8dbd53e6adcb17422bb4fa67c51b93e24dcb2a9c8f9
```

4. **Save file**

### Cara 2: Menggunakan PowerShell

Jalankan command berikut di PowerShell (di folder project):

```powershell
@"
NODE_ENV=development

POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_DB=electricity
DATABASE_URL="postgresql://postgres@localhost:5432/electricity?schema=public"

JWT_SECRET=9f2c1d1d2e1b9f7c0b72c8dbd53e6adcb17422bb4fa67c51b93e24dcb2a9c8f9
"@ | Out-File -FilePath .env.local -Encoding utf8
```

### Jika PostgreSQL Menggunakan Password

Jika PostgreSQL Anda menggunakan password (misal: `1234`), ubah baris DATABASE_URL menjadi:

```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/electricity?schema=public"
```

## ✅ Setelah Membuat File

1. **Stop server** (jika sedang running): Tekan `Ctrl+C` di terminal
2. **Restart server**:
   ```bash
   npm run dev
   ```

## 🔍 Verifikasi

Setelah restart, aplikasi seharusnya sudah connect ke `localhost:5432` (pgAdmin) bukan lagi `db:5432` (Docker).

## ❌ Jika Masih Error

1. **Cek file `.env.local` benar-benar ada** di root project
2. **Cek nama file**: Harus `.env.local` (dengan titik di depan)
3. **Cek isi DATABASE_URL**: Harus `localhost:5432`, BUKAN `db:5432`
4. **Restart VS Code/Editor** setelah membuat file
5. **Restart terminal** dan jalankan `npm run dev` lagi

## 📍 Lokasi File

File harus berada di:
```
d:\FILE\electricity-bills\.env.local
```

Sama level dengan:
- `package.json`
- `next.config.ts`
- `.example.env.dev`

