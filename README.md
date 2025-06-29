# 📰 Notion to RSS Feed Generator

Generate a live RSS feed (`rss.xml`) from a Notion database using Notion API + GitHub Actions.

> Powered by [@rasawarnajiwa](https://rasawarnajiwa.github.io)

---

## 🚀 Fitur
- 🔁 Sinkronisasi otomatis dari database Notion setiap hari
- 📝 Menyaring hanya catatan yang berstatus "publik"
- 🌐 Output langsung tampil di `https://rasawarnajiwa.github.io/rss.xml`

---

## 🧱 Struktur Database Notion

| Kolom               | Tipe            | Keterangan                             |
|---------------------|------------------|-----------------------------------------|
| Judul               | Title            | Judul artikel                           |
| Link                | URL              | Link Notion publik (bukan notion.so!)   |
| Deskripsi           | Rich text        | Cuplikan singkat isi                    |
| Tanggal Publikasi   | Date             | Tanggal posting                         |
| Status              | Select (publik)  | Untuk menyaring konten yang ditampilkan |

Contoh template bisa kamu gunakan [di sini](www.https://www.notion.site/rasawarnajiwa/Sudut-Kecil-1e380cf2ce2580298732eddf7e920a4c

---

## 🔐 Secrets yang Dibutuhkan

Masukkan ke `Settings > Secrets and variables > Actions`

- `NOTION_TOKEN` – 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
- `DATABASE_ID` – 21c80cf2ce2580ecbe3bf790ae81db22

---

## 🛠️ Menjalankan Manual

- Masuk ke tab **Actions** → pilih workflow → klik **Run workflow**

---

## 📂 Struktur Folder

