# Setup EmailJS untuk Contact Form

## Langkah-langkah Setup:

### 1. Daftar di EmailJS
- Buka [https://www.emailjs.com/](https://www.emailjs.com/)
- Klik "Sign Up" dan daftar (gratis)
- Verifikasi email Anda

### 2. Setup Email Service
- Login ke dashboard EmailJS
- Klik "Add New Service"
- Pilih email provider (Gmail recommended)
- Connect dengan email Anda
- Copy **Service ID** yang muncul

### 3. Buat Email Template
- Di dashboard, klik "Email Templates"
- Klik "Create New Template"
- Gunakan template ini:

**Subject:** New Contact from {{from_name}}

**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Message:
{{message}}
```

- Save dan copy **Template ID**

### 4. Get Public Key
- Klik "Account" di navbar
- Copy **Public Key** Anda

### 5. Setup Environment Variables
Buat atau edit file `.env.local` di root project:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Ganti `your_service_id`, `your_template_id`, dan `your_public_key` dengan credential yang sudah Anda copy dari EmailJS dashboard.

**Catatan:** File `.env.local` sudah ada di `.gitignore` sehingga credential Anda tidak akan ter-commit ke Git.

### 6. Restart Development Server
Setelah update `.env.local`, restart server:
```bash
npm run dev
```

### 7. Test Form
- Jalankan `npm run dev`
- Buka halaman contact
- Isi form dan klik "Send Message"
- Cek email Anda!

## Free Tier Limits:
- 200 emails per month
- Unlimited templates
- No credit card required

## Troubleshooting:
- Pastikan email service sudah connected
- Pastikan template field names match: `from_name`, `from_email`, `message`
- Cek console browser untuk error details
