<p align="center">
  <h1 align="center">⚡ TAHA MD — Facebook Messenger Bot ⚡</h1>
  <p align="center">
    <b>A Fast, Modular & AI-Powered Facebook Chatbot Framework</b><br>
    <i>Built on GoatBot V2 Architecture | Created by TAHA KHAN</i>
  </p>
</p>
<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-v18%2B-brightgreen?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  </a>
  <a href="https://github.com/tahachandia84/Bot.babu">
    <img src="https://img.shields.io/badge/Framework-GoatBot%20V2-blue?style=for-the-badge&logo=github&logoColor=white" alt="GoatBot V2">
  </a>
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>
---
## 📌 Overview
**TAHA MD** ek advanced, lightweight aur highly optimized Facebook Messenger Bot hai jo **GoatBot V2** architecture par tayar kiya gaya hai. Isme 3-Layer AI Uptime Fallback System, Automatic Media Downloading, Pinterest HD Image Scraping, Custom Video Searching, aur Roast/Base Replies include hain.
---
## 📋 Table of Contents
- [Features](#-features)
- [Project Architecture](#-project-architecture)
- [Module Highlights](#-module-highlights)
- [Deployment & Setup](#-deployment--setup)
- [Configuration Guide](#-configuration-guide)
- [Developer & Owner](#-developer--owner)
- [License & Credits](#-license--credits)
---
## 🔥 Features

| Feature | Description |
| :--- | :--- |
| **🤖 AI Chat Persona** | Natural Roman Urdu & Multi-language AI Chatbot (Khushi / Dewani) |
| **🎵 YouTube Downloader** | Fast MP3 (Audio) & MP4 (Video) downloading with auto file-size guard |
| **📌 Pinterest HD Search** | High-definition image downloader with limit parameters via `.taha` |
| **🎥 Chrome Video Search** | Direct web video downloader via `.video` / `.chrome` using Azad API |
| **💬 Base Roast Replies** | Dedicated fun/roast handler for exact `"bot"` trigger |
| **⚙️ VIP Cyber Help Menu** | Auto-collapsing 3-column grid menu card with owner branding |
| **🛡️ Anti-Conflict Logic** | Smart trigger separation to prevent duplicate AI responses |

---
## 📁 Project Architecture
```text
TAHA-MD/
├── config.json             # Global Bot Settings (Prefix, Admin UID, Bot Name)
├── account.txt             # Facebook AppState / Cookie Storage
├── index.js                # Main Entry Point & Server Handler
├── package.json            # Node.js Dependencies & Scripts
└── scripts/
    └── cmds/
        ├── bot.js          # Base/Roast Replies (Trigger: "bot")
        ├── khushi.js       # AI Chatbot & YT Downloader
        ├── taha.js         # Pinterest Search (Uzair Rajput API)
        ├── videosearch.js  # Chrome & Web Video Search (Azad API)
        └── help.js         # VIP Cyber Help Menu
