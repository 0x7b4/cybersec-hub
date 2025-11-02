const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`🚀 CyberSec Hub est en cours d'exécution sur http://${HOST}:${PORT}`);
    console.log(`📅 Démarré le: ${new Date().toLocaleString('fr-FR')}`);
});

// Gestion des erreurs non capturées
process.on('uncaughtException', (err) => {
    console.error('❌ Erreur non capturée:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Promesse rejetée non gérée à:', promise, 'raison:', reason);
    process.exit(1);
});
