# 🔐 File Encryption & Decryption Web App

A secure, browser-based application for encrypting and decrypting files using **AES-GCM**, a modern industry-standard encryption algorithm. All cryptographic operations are performed locally in the browser using the **Web Crypto API**, ensuring your files and keys never leave your device.

📍 **Live Demo**: [https://file-encryptor-and-decryptor.vercel.app](https://file-encryptor-and-decryptor.vercel.app)

---

## ✨ Features

- ✅ Upload any file for encryption (supports all file types).
- 🔑 Enter a passphrase for encryption and decryption.
- 📥 Download encrypted files with `_Encrypted` suffix.
- 📁 Upload encrypted files to decrypt.
- 🔐 Decrypt with the correct passphrase.
- 📤 Download the original file with `_Decrypted` suffix.
- 🔒 Fully client-side; no data ever leaves your browser.

---

## 🛠️ Technologies Used

- **HTML5** – Structure and file inputs  
- **CSS3** – Styling and responsive design  
- **JavaScript (Vanilla)** – Core logic, file handling, encryption  
- **Web Crypto API** – AES-GCM encryption, PBKDF2 key derivation

---

## 🔐 Cryptographic Details

- **Algorithm**: AES-GCM (256-bit)
- **Key Derivation**: PBKDF2 with SHA-256
- **IV**: Randomly generated for each encryption
- **Authentication Tag**: Ensures data integrity
- **All operations performed locally** in the browser

---

## 📦 How It Works

1. Upload a file  
2. Enter a key (passphrase)  
3. File is encrypted using AES-GCM  
4. Download the encrypted file  
5. Upload an encrypted file and enter the key to decrypt it  
6. Download the decrypted file

> If the key is incorrect, decryption fails.

---
