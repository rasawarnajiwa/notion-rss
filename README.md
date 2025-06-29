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

🧩 Contoh template bisa kamu gunakan [di sini](https://rasawarnajiwa.notion.site/Sudut-Kecil-1e380cf2ce2580298732eddf7e920a4c)

---

## 🔐 Secrets yang Dibutuhkan

Masukkan ke `Settings > Secrets and variables > Actions` di GitHub repo:

- `NOTION_TOKEN` – token dari Notion integration (jangan dipublikasikan!)
- `DATABASE_ID` – ID dari database Notion kamu

> ⚠️ Jangan masukkan API Token ke README publik demi keamanan akun Notion-mu.

---

## 🛠️ Menjalankan Manual

- Masuk ke tab **Actions** → pilih workflow → klik **Run workflow**

---

## 📂 Struktur Folder

```
notion-rss/
├── notion-to-rss.js
├── rss.xml                # (akan dibuat otomatis)
└── .github/
    └── workflows/
        └── rss.yml
```

---

## 📎 License

MIT – Bebas digunakan untuk blog, refleksi, dokumentasi pribadi, atau komunitas 🌿
