# GitHub Integration Setup

## Cara Setup GitHub Token (Opsional - untuk rate limit lebih tinggi):

### 1. Generate GitHub Personal Access Token
- Buka [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens)
- Klik "Generate new token (classic)"
- Beri nama: `Portfolio Website`
- Pilih scope: **HANYA centang `public_repo`** (read-only access)
- Generate dan copy token

### 2. Tambahkan ke Environment Variables
Edit file `.env.local` dan tambahkan:
```
GITHUB_TOKEN=ghp_your_token_here
```

### 3. Restart Development Server
```bash
npm run dev
```

## Tanpa Token:
Website tetap berfungsi dengan fallback data, tapi dengan token rate limit lebih tinggi (5000 req/jam vs 60 req/jam).

## Fitur:
- ✅ Otomatis fetch pinned repositories dari GitHub
- ✅ Menampilkan language, stars, dan forks
- ✅ Loading state saat fetch data
- ✅ Fallback data jika API gagal
- ✅ Cache 1 jam (refresh otomatis setiap jam)
- ✅ Tombol "View All on GitHub" ke profile

## Pin Repository di GitHub:
1. Buka https://github.com/fiqihbadrian
2. Klik "Customize your pins"
3. Pilih maksimal 6 repository untuk ditampilkan
4. Save - otomatis muncul di website!
