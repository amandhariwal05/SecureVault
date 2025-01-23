let fileData = null;
let fileName = null;
let fileExtension = null;

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light-theme");

  themeIcon.textContent = body.classList.contains("light-theme") ? "☀️" : "🌙";
});

document.getElementById("file-input").addEventListener("change", (event) => {
  const file = event.target.files[0];
  fileName = file.name.split(".").slice(0, -1).join(".");
  fileExtension = file.name.split(".").pop();

  const reader = new FileReader();
  reader.onload = () => {
    fileData = reader.result;
  };
  reader.readAsArrayBuffer(file);
  document.getElementById("file-name-display").style.display = "block";
  document.getElementById(
    "file-name-display"
  ).textContent = `Selected File: ${file.name}`;
});

function xorEncryptDecrypt(data, key) {
  const keyBytes = new TextEncoder().encode(key);
  const dataBytes = new Uint8Array(data);
  const result = new Uint8Array(dataBytes.length);

  for (let i = 0; i < dataBytes.length; i++) {
    result[i] = dataBytes[i] ^ keyBytes[i % keyBytes.length];
  }

  return result.buffer;
}

async function encryptFile() {
  const key = document.getElementById("key-input").value;

  if (!fileData || !key) {
    alert("Please provide a file and an encryption key.");
    return;
  }

  const encryptedData = xorEncryptDecrypt(fileData, key);

  const encryptedFileName = `${fileName}_Encrypted.${fileExtension}`;

  const blob = new Blob([encryptedData], {
    type: "application/octet-stream",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = encryptedFileName;
  link.click();

  document.getElementById("output").style.display = "block";
  document.getElementById("output").textContent =
    "File encrypted successfully!";

  resetState();
}

async function decryptFile() {
  const key = document.getElementById("key-input").value;

  if (!fileData || !key) {
    alert("Please provide a file and a decryption key.");
    return;
  }

  const decryptedData = xorEncryptDecrypt(fileData, key);
  const decryptedFileName = fileName.includes("_Encrypted")
    ? fileName.replace("_Encrypted", "_Decrypted") + `.${fileExtension}`
    : `${fileName}_Decrypted.${fileExtension}`;

  const blob = new Blob([decryptedData], {
    type: "application/octet-stream",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = decryptedFileName;
  link.click();

  document.getElementById("output").style.display = "block";
  document.getElementById("output").textContent =
    "File decrypted successfully!";

  resetState();
}

function resetState() {
  fileData = null;
  fileName = null;
  fileExtension = null;
  document.getElementById("file-input").value = "";
  document.getElementById("key-input").value = "";
  document.getElementById("file-name-display").style.display = "none";
}

document.getElementById("encrypt-btn").addEventListener("click", encryptFile);
document.getElementById("decrypt-btn").addEventListener("click", decryptFile);
