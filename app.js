const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Configuration du moteur de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'CyberSec Hub - Accueil',
        page: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'À Propos - CyberSec Hub',
        page: 'about'
    });
});

app.get('/tools', (req, res) => {
    res.render('tools', { 
        title: 'Outils - CyberSec Hub',
        page: 'tools'
    });
});

app.get('/blog', (req, res) => {
    res.render('blog', { 
        title: 'Blog - CyberSec Hub',
        page: 'blog'
    });
});

// 404 Error Handler
app.use((req, res) => {
    res.status(404).render('404', { 
        title: '404 - Page Non Trouvée',
        page: '404'
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Une erreur est survenue!');
});

module.exports = app;
