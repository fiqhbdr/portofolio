# 📁 Data Konten

Semua isi konten diurus lewat file JSON di folder ini. Edit lalu push — sisanya otomatis.

## `projects.json`

Isi per project:

| Field       | Wajib? | Keterangan                                        |
|-------------|--------|---------------------------------------------------|
| `name`      | ✅     | Nama project                                      |
| `desc`      | ✅     | Deskripsi singkat                                 |
| `url`       | ✅     | Link repo/halaman project                         |
| `lang`      | ✅     | Nama bahasa/teknologi (ditampilkan di badge)      |
| `langColor` | ✅     | Warna dot bahasa (hex, contoh `#3178c6`)          |
| `stars`     | ✅     | Jumlah star (boleh 0)                             |
| `img`       | *      | Satu gambar preview — atau pakai `slides`         |
| `slides`    | *      | Array gambar preview (auto-slideshow) — atau `img` |

> **Pilih salah satu**: `img` (1 gambar) ATAU `slides` (banyak gambar). Foto taruh di `public/images/projects/` lalu isi path-nya (`/images/projects/nama-file.png`).

## `certificates.json`

Isi per sertifikat:

| Field    | Wajib? | Keterangan                                  |
|----------|--------|---------------------------------------------|
| `org`    | ✅     | Penerbit (HackerRank, Dicoding, dll)        |
| `title`  | ✅     | Judul sertifikat                            |
| `date`   | ✅     | Tanggal terbit / masa berlaku               |
| `year`   | ✅     | Tahun (muncul di samping org)               |
| `img`    | ✅     | Path gambar sertifikat (`public/images/Certified/`) |
| `url`    | ✳️     | **Link asli sertifikat** (Dicoding/HackerRank/InerCorp). Kosongkan (`""`) kalau belum punya — tombol akan buka gambar saja. |
| `tags`   | ✅     | Array tag/topik                             |

> Urutan dalam file = urutan tampil (paling atas = paling baru).
