# 🔒 CyberSec Hub

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18-blue?style=for-the-badge&logo=express)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

**Une plateforme Node.js dédiée à la cybersécurité avec une esthétique terminal/hacking**

[Demo](https://github.com/0x7b4/cybersec-hub) • [Report Bug](https://github.com/0x7b4/cybersec-hub/issues) • [Request Feature](https://github.com/0x7b4/cybersec-hub/issues)

</div>

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Aperçu](#-aperçu)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du projet](#-structure-du-projet)
- [Modification en CLI](#-modification-en-cli)
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)
- [Contribution](#-contribution)
- [Licence](#-licence)
- [Contact](#-contact)

---

## 🎯 À propos

**CyberSec Hub** est une application web Node.js conçue pour les professionnels de la cybersécurité, pentesters et passionnés de sécurité informatique. Elle propose une interface sombre avec une esthétique terminal/Matrix, offrant une expérience immersive pour présenter des outils, articles et ressources de sécurité.

### Pourquoi CyberSec Hub ?

- ✅ **Interface terminal authentique** : Design inspiré des terminaux Unix/Linux
- ✅ **Responsive** : Fonctionne sur desktop, tablette et mobile
- ✅ **Facile à modifier** : Architecture simple et modulaire
- ✅ **Prêt pour le dev** : Hot-reload avec nodemon
- ✅ **Open Source** : Licence MIT, libre d'utilisation

---

## ✨ Fonctionnalités

### 🎨 Design & Interface

- **Dark Mode natif** avec palette de couleurs cyberpunk
- **Effets visuels** : Glitch effect, animations de typing, terminal boxes
- **Typographie monospace** : Police Courier New pour l'authenticité
- **Navigation intuitive** avec highlighting des pages actives

### 📄 Pages incluses

| Page | Description |
|------|-------------|
| **Home** | Page d'accueil avec présentation et hero section |
| **Tools** | Liste des outils de pentesting (Nmap, Metasploit, etc.) |
| **Blog** | Articles sur la cybersécurité et les vulnérabilités |
| **About** | Présentation du projet et contacts |
| **404** | Page d'erreur personnalisée style terminal |

### 🛠️ Technologies

- **Backend** : Node.js + Express.js
- **Template Engine** : EJS (Embedded JavaScript)
- **Styling** : CSS3 avec variables CSS
- **Dev Tools** : Nodemon pour le hot-reload

---

## 🖼️ Aperçu

```
┌────────────────────────────────────────────┐
│ root@cybersec:~# cat welcome.txt           │
├──────────────────────────────────────────────┤
│                                            │
│        █▀▀ █▄█ █▄▄ █▀▀ █▀█ █▀ █▀▀ █▀▀     │
│        █▄▄  █  █▄█ ██▄ █▀▄ ▄█ ██▄ █▄▄     │
│                                            │
│   Penetration Testing | Security Research │
│              | Ethical Hacking              │
│                                           │
│   > Exploring vulnerabilities...          │
│   > Professional security tools            │
│   > Learning through doing                 │
│                                            │
└─────────────────────────────────────────────┘
```

---

## 🚀 Installation

### Prérequis

- **Node.js** : Version 14.x ou supérieure
- **npm** : Version 6.x ou supérieure (inclus avec Node.js)
- **Git** : Pour cloner le repository

### Installation rapide

```bash
# 1. Cloner le repository
git clone https://github.com/0x7b4/cybersec-hub.git
cd cybersec-hub

# 2. Installer les dépendances
npm install

# 3. Lancer en mode développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

### Installation détaillée

#### Étape 1 : Cloner le projet

```bash
git clone https://github.com/0x7b4/cybersec-hub.git
cd cybersec-hub
```

#### Étape 2 : Installer les dépendances

```bash
npm install

# Installer express-ejs-layouts (requis pour l'application)
npm install express-ejs-layouts
```

**Dépendances installées :**
- `express` : Framework web minimaliste
- `ejs` : Moteur de template
- `express-ejs-layouts` : Système de layouts pour EJS
- `nodemon` : Auto-reload en développement (dev dependency)
