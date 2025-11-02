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
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)
- [Contribution](#-contribution)
- [Roadmap](#-roadmap)
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
- ✅ **SEO optimisé** : Meta tags et structure sémantique
- ✅ **Performance** : Léger et rapide

---

## ✨ Fonctionnalités

### 🎨 Design & Interface

- **Dark Mode natif** avec palette de couleurs cyberpunk
- **Effets visuels** : Glitch effect, animations de typing, terminal boxes
- **Typographie monospace** : Police Courier New pour l'authenticité
- **Navigation intuitive** avec highlighting des pages actives
- **Animations fluides** : Transitions et hover effects

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
- **Architecture** : MVC Pattern
- **Version Control** : Git

---

## 🖼️ Aperçu

```
┌──────────────────────────────────────────────┐
│ root@cybersec:~# cat welcome.txt             │
├──────────────────────────────────────────────┤
│                                              │
│      ███ █║█ █║█ ███ █ █ ██▉ ██┈          │
│      █║█  █  █║█ █║█ ███ █ █ ║█           │
│                                              │
│   Penetration Testing | Security Research   │
│                | Ethical Hacking             │
│                                              │
│   > Exploring vulnerabilities...            │
│   > Professional security tools             │
│   > Learning through doing                  │
│                                              │
└──────────────────────────────────────────────┘
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

---

## 💻 Utilisation

### Mode développement

```bash
npm run dev
```

Le serveur se lance sur `http://localhost:3000` avec hot-reload automatique.

### Mode production

```bash
npm start
```

### Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm start` | Lance le serveur en mode production |
| `npm run dev` | Lance le serveur avec nodemon (hot-reload) |

---

## 📁 Structure du projet

```
cybersec-hub/
│
├── public/                 # Fichiers statiques
│   └── css/
│       └── style.css      # Styles principaux
│
├── views/                  # Templates EJS
│   ├── partials/          # Composants réutilisables
│   │   ├── navbar.ejs     # Barre de navigation
│   │   └── footer.ejs     # Pied de page
│   ├── layout.ejs         # Layout principal
│   ├── index.ejs          # Page d'accueil
│   ├── tools.ejs          # Page outils
│   ├── blog.ejs           # Page blog
│   ├── about.ejs          # Page à propos
│   └── 404.ejs            # Page d'erreur
│
├── app.js                  # Configuration Express
├── server.js              # Point d'entrée de l'application
├── package.json           # Dépendances et scripts
├── .gitignore            # Fichiers ignorés par Git
├── LICENSE               # Licence MIT
└── README.md             # Documentation
```

---

## ⚙️ Configuration

### Variables d'environnement (optionnel)

Créez un fichier `.env` à la racine :

```env
PORT=3000
NODE_ENV=development
```

### Personnalisation

#### Modifier les couleurs

Éditez les variables CSS dans `public/css/style.css` :

```css
:root {
    --primary-green: #00ff41;
    --dark-bg: #0a0e27;
    --matrix-green: #00ff41;
}
```

#### Ajouter une nouvelle page

1. Créez `views/ma-page.ejs`
2. Ajoutez la route dans `app.js` :

```javascript
app.get('/ma-page', (req, res) => {
    res.render('ma-page', { title: 'Ma Page', page: 'ma-page' });
});
```

3. Ajoutez le lien dans `views/partials/navbar.ejs`

---

## 🌐 Déploiement

### Heroku

```bash
# Installer Heroku CLI et se connecter
heroku login

# Créer une application
heroku create mon-cybersec-hub

# Déployer
git push heroku main

# Ouvrir l'application
heroku open
```

### Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build et run
docker build -t cybersec-hub .
docker run -p 3000:3000 cybersec-hub
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. Créez une **branche** pour votre feature (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Guidelines

- Suivez le style de code existant
- Testez vos modifications
- Mettez à jour la documentation si nécessaire
- Décrivez clairement vos changements dans la PR

---

## 🗺️ Roadmap

- [x] Interface de base avec design terminal
- [x] Pages principales (Home, Tools, Blog, About)
- [x] Navigation responsive
- [ ] Système de blog dynamique avec base de données
- [ ] Authentification utilisateur
- [ ] Section CTF challenges
- [ ] API REST pour les outils
- [ ] Dark/Light theme toggle
- [ ] Recherche avancée
- [ ] Intégration CI/CD
- [ ] Tests unitaires et E2E

---

## 📜 License

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License - Copyright (c) 2025 0x7b4

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📧 Contact

**0x7b4**

- 🌐 Website: [0x7b4.github.io/pentest](https://0x7b4.github.io/pentest/)
- 💻 GitHub: [@0x7b4](https://github.com/0x7b4)
- 📁 Repository: [cybersec-hub](https://github.com/0x7b4/cybersec-hub)

---

<div align="center">

**⚠️ Disclaimer**

Ce projet est destiné à des fins éducatives uniquement. Toujours obtenir une autorisation appropriée avant de tester la sécurité de tout système.

Made with 💚 by the cybersecurity community

</div>
