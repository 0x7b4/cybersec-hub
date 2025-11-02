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
├────────────────────────────────────────────┤
│                                            │
│        █▀▀ █▄█ █▄▄ █▀▀ █▀█ █▀ █▀▀ █▀▀     │
│        █▄▄  █  █▄█ ██▄ █▀▄ ▄█ ██▄ █▄▄     │
│                                            │
│   Penetration Testing | Security Research │
│              | Ethical Hacking             │
│                                            │
│   > Exploring vulnerabilities...          │
│   > Professional security tools            │
│   > Learning through doing                 │
│                                            │
└────────────────────────────────────────────┘
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
```

**Dépendances installées :**
- `express` : Framework web minimaliste
- `ejs` : Moteur de template
- `nodemon` : Auto-reload en développement (dev dependency)

#### Étape 3 : Configuration (optionnel)

Créer un fichier `.env` pour personnaliser :

```bash
PORT=3000
NODE_ENV=development
```

#### Étape 4 : Lancer l'application

**Mode développement** (avec hot-reload) :
```bash
npm run dev
```

**Mode production** :
```bash
npm start
```

---

## 💻 Utilisation

### Commandes disponibles

```bash
# Démarrer en mode développement (auto-reload)
npm run dev

# Démarrer en mode production
npm start

# Installer les dépendances
npm install

# Tester (si tests configurés)
npm test
```

### Accéder à l'application

Une fois lancée, l'application est accessible sur :
- **Local** : http://localhost:3000
- **Réseau** : http://<votre-ip>:3000

### Navigation

- `/` - Page d'accueil
- `/tools` - Liste des outils de sécurité
- `/blog` - Articles de blog
- `/about` - À propos du projet

---

## 📂 Structure du projet

```
cybersec-hub/
├── 📄 server.js                 # Serveur Express principal
├── 📄 package.json              # Configuration npm et dépendances
├── 📄 README.md                 # Documentation (ce fichier)
├── 📄 LICENSE                   # Licence MIT
├── 📄 .gitignore                # Fichiers à ignorer par Git
│
├── 📁 public/                   # Fichiers statiques
│   └── 📁 css/
│       └── 📄 style.css         # Styles CSS principaux
│
└── 📁 views/                    # Templates EJS
    ├── 📄 index.ejs             # Page d'accueil
    ├── 📄 tools.ejs             # Page outils
    ├── 📄 blog.ejs              # Page blog
    ├── 📄 about.ejs             # Page à propos
    ├── 📄 404.ejs               # Page erreur 404
    ├── 📄 layout.ejs            # Layout principal (non utilisé)
    │
    └── 📁 partials/             # Composants réutilisables
        ├── 📄 navbar.ejs        # Barre de navigation
        └── 📄 footer.ejs        # Pied de page
```

### Description des fichiers clés

| Fichier | Description |
|---------|-------------|
| `server.js` | Point d'entrée de l'application, configuration Express et routes |
| `views/*.ejs` | Templates HTML avec syntaxe EJS pour le rendu dynamique |
| `public/css/style.css` | Styles CSS avec thème cybersécurité |
| `views/partials/` | Composants réutilisables (navbar, footer) |

---

## 🛠️ Modification en CLI

### Édition avec vim/nano

```bash
# Éditer le serveur principal
vim server.js
nano server.js

# Modifier la page d'accueil
vim views/index.ejs

# Personnaliser les styles
vim public/css/style.css
```

### Ajouter une nouvelle page

#### 1. Créer le template

```bash
cat > views/contact.ejs << 'EOF'
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Contact - CyberSec Hub</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <%- include('partials/navbar', {page: 'contact'}) %>
    <main>
        <h1>Contactez-nous</h1>
    </main>
    <%- include('partials/footer') %>
</body>
</html>
EOF
```

#### 2. Ajouter la route dans `server.js`

```bash
# Ouvrir server.js et ajouter avant le handler 404
vim server.js
```

Ajouter :
```javascript
app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact - CyberSec Hub',
        page: 'contact'
    });
});
```

#### 3. Ajouter le lien dans la navbar

```bash
vim views/partials/navbar.ejs
```

Ajouter :
```html
<li><a href="/contact" class="<%= page === 'contact' ? 'active' : '' %>">Contact</a></li>
```

### Recherche et remplacement en masse

```bash
# Remplacer du texte dans tous les fichiers EJS
find views -name "*.ejs" -exec sed -i 's/CyberSec Hub/VotreName/g' {} +

# Changer une couleur dans le CSS
sed -i 's/#00ff41/#00ffff/g' public/css/style.css

# Remplacer l'email dans tous les fichiers
grep -rl "example@email.com" . | xargs sed -i 's/example@email.com/your@email.com/g'
```

### Personnaliser les couleurs

Éditer les variables CSS dans `public/css/style.css` :

```bash
vim public/css/style.css
```

Modifier les variables :
```css
:root {
    --bg-primary: #0a0e27;      /* Fond principal */
    --bg-secondary: #1a1f3a;    /* Fond secondaire */
    --text-primary: #00ff41;    /* Texte principal (vert) */
    --text-secondary: #39ff14;  /* Texte secondaire */
    --accent: #00d9ff;          /* Couleur d'accent (cyan) */
    --danger: #ff0055;          /* Couleur erreur (rouge) */
}
```

### Ajouter un outil dans la page Tools

```bash
vim views/tools.ejs
```

Ajouter dans la `tools-grid` :
```html
<div class="tool-card">
    <h3>🔧 Votre Outil</h3>
    <p>Description de l'outil</p>
    <code>commande --options</code>
</div>
```

### Scripts utiles

#### Script pour backup

```bash
#!/bin/bash
# backup.sh - Créer une sauvegarde du projet

DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "cybersec-hub-backup-$DATE.tar.gz"     --exclude='node_modules'     --exclude='.git'     .
echo "✓ Backup créé : cybersec-hub-backup-$DATE.tar.gz"
```

#### Script pour déploiement rapide

```bash
#!/bin/bash
# deploy.sh - Déployer les changements

git add .
git commit -m "Update: $(date +%Y-%m-%d)"
git push origin main
echo "✓ Changements déployés sur GitHub"
```

---

## ⚙️ Configuration

### Variables d'environnement

Créer un fichier `.env` à la racine :

```bash
# Port du serveur
PORT=3000

# Environnement (development | production)
NODE_ENV=development

# Autres configurations
# SESSION_SECRET=your-secret-key
# DATABASE_URL=your-database-url
```

### Personnalisation du port

```bash
# Dans server.js
const PORT = process.env.PORT || 3000;
```

Ou en ligne de commande :
```bash
PORT=8080 npm start
```

### Configuration Express avancée

Éditer `server.js` pour ajouter des middlewares :

```javascript
// Body parser pour les formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sessions
const session = require('express-session');
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
```

---

## 🚀 Déploiement

### Déploiement sur Heroku

```bash
# 1. Installer Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# 2. Login
heroku login

# 3. Créer l'app
heroku create cybersec-hub

# 4. Déployer
git push heroku main

# 5. Ouvrir l'app
heroku open
```

### Déploiement sur Vercel

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
vercel

# 3. Suivre les instructions
```

### Déploiement sur VPS (Linux)

```bash
# 1. Installer Node.js sur le serveur
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Cloner le projet
git clone https://github.com/0x7b4/cybersec-hub.git
cd cybersec-hub

# 3. Installer les dépendances
npm install --production

# 4. Installer PM2 (process manager)
sudo npm install -g pm2

# 5. Lancer avec PM2
pm2 start server.js --name cybersec-hub

# 6. Configuration auto-start
pm2 startup
pm2 save
```

### Configuration Nginx (reverse proxy)

```nginx
# /etc/nginx/sites-available/cybersec-hub

server {
    listen 80;
    server_name votredomaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activer le site :
```bash
sudo ln -s /etc/nginx/sites-available/cybersec-hub /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

### 1. Fork le projet

```bash
# Cliquer sur "Fork" sur GitHub
```

### 2. Créer une branche

```bash
git checkout -b feature/AmazingFeature
```

### 3. Commit les changements

```bash
git commit -m 'Add: AmazingFeature'
```

### 4. Push vers la branche

```bash
git push origin feature/AmazingFeature
```

### 5. Ouvrir une Pull Request

Aller sur GitHub et créer une Pull Request.

### Guidelines de contribution

- Suivre le style de code existant
- Commenter le code complexe
- Tester avant de commit
- Écrire des messages de commit clairs

**Format des commits :**
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, CSS
- `refactor:` Refactorisation du code
- `test:` Ajout de tests
- `chore:` Maintenance

---

## 📜 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License

Copyright (c) 2025 0x7b4

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👤 Contact

**0x7b4**

- GitHub: [@0x7b4](https://github.com/0x7b4)
- Blog: [0x7b4 Pentest Blog](https://0x7b4.github.io/pentest/)
- Twitter: [@0x7b4](https://twitter.com/0x7b4) (si disponible)

**Projet**: [https://github.com/0x7b4/cybersec-hub](https://github.com/0x7b4/cybersec-hub)

---

## 🙏 Remerciements

- [Express.js](https://expressjs.com/) - Framework web minimaliste
- [EJS](https://ejs.co/) - Moteur de template
- [Node.js](https://nodejs.org/) - Runtime JavaScript
- Communauté cybersécurité pour l'inspiration

---

## ⚠️ Disclaimer

**Ce projet est à des fins éducatives uniquement.**

Tous les outils et techniques mentionnés doivent être utilisés uniquement sur des systèmes pour lesquels vous avez une autorisation explicite. L'utilisation non autorisée d'outils de pentesting est illégale et contraire à l'éthique.

**Utilisation responsable :**
- ✅ Sur vos propres systèmes
- ✅ Avec permission écrite
- ✅ Dans un environnement de test légal
- ❌ Sur des systèmes tiers sans autorisation

---

<div align="center">

**Fait avec ❤️ et ☕ par 0x7b4**

⭐ **Star le projet si vous l'aimez !** ⭐

[⬆ Retour en haut](#-cybersec-hub)

</div>
