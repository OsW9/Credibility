# Hub de Crédibilité Professionnelle 🚀

Une plateforme de présentation personnelle hautement performante, structurée et orientée sur **la preuve par la réalisation**. Conçu avec une approche d'ingénierie système inspirée du cadre d'architecture d'entreprise **TOGAF**, ce projet vise à maximiser la transparence et la vérifiabilité des compétences techniques auprès des recruteurs et partenaires.

---

## 📐 Principes Fondamentaux & Architecture (Approche TOGAF/INCOSE)

* **Décomposition Système (BR-01)** : Les compétences professionnelles sont traitées comme des entités interconnectées à un graphe de projets (preuves tangibles).
* **Temps-vers-la-Preuve (Time-to-Proof)** : L'interface est conçue pour qu'un visiteur accède à une preuve vérifiable (lien GitHub, démonstration en direct, étude de cas) en moins de 3 clics.
* **Architecture Jamstack & Git-Based CMS** : Aucun serveur de base de données à gérer. La persistance repose entièrement sur Git à travers des fichiers Markdown structurés (Astro Content Collections), garantissant une vitesse de chargement instantanée, une sécurité maximale et un hébergement gratuit.

---

## 🛠️ Stack Technique

* **Framework principal** : [Astro v7+](https://astro.build) (génération de site statique ultra-rapide avec hydratation sélective).
* **Styles & Design** : [Tailwind CSS v4](https://tailwindcss.com) (compilé nativement via le plugin Vite `@tailwindcss/vite`).
* **Gestionnaire de contenu (CMS)** : [Decap CMS](https://decapcms.org) (anciennement Netlify CMS) intégré de manière 100% statique (sans impact sur les performances).
* **Environnement** : Docker & VS Code DevContainers (pour un environnement de développement reproductible et isolé).

---

## 📂 Structure du Projet

```text
platform/
├── public/                 # Assets statiques du site
│   └── admin/              # Point d'entrée et config de Decap CMS
├── src/
│   ├── components/         # Composants interactifs (Filtres, Recherche, Badges)
│   ├── content/            # Votre base de données de fichiers Markdown (.md)
│   │   ├── blog/           # Réflexions et articles techniques
│   │   ├── competencies/   # Fiches de compétences (Niveaux Expert/Proficient...)
│   │   └── projects/       # Portfolio et défis techniques résolus
│   ├── layouts/            # Layout global (En-tête, Pied de page collé, ClientRouter)
│   ├── lib/                # Logique de résolution du graphe de compétences
│   ├── pages/              # Routes et pages du site (Astro Pages)
│   └── styles/             # Styles CSS globaux (Tailwind CSS v4 imports)
├── Makefile                # Raccourcis pour les tâches courantes
└── package.json            # Dépendances Node.js
```

---

## 🚀 Commandes de Développement

Toutes les tâches de développement peuvent être lancées localement ou depuis le conteneur Docker.

### Raccourcis Makefile (Recommandé)

* **Installer les dépendances** :
  ```bash
  make install
  ```
* **Lancer le serveur de développement** :
  ```bash
  make dev
  ```
* **Compiler le site pour la production** :
  ```bash
  make build
  ```
* **Nettoyer les fichiers temporaires et builds** :
  ```bash
  make clean
  ```

---

## ✍️ Administration Visuelle (Decap CMS)

Pour gérer, modifier ou ajouter du contenu (projets, compétences, articles de blog) via l'interface d'administration visuelle :

1. **Lancez le proxy local de Decap** pour lui permettre d'écrire des fichiers sur votre disque dur :
   ```bash
   npx decap-cms-proxy-server
   ```
2. **Démarrez le serveur Astro** (dans un autre terminal) :
   ```bash
   make dev
   ```
3. Rendez-vous sur **`http://localhost:4321/admin/`** dans votre navigateur pour éditer votre contenu de manière visuelle et interactive.

---

## 🔒 Sécurité et Déploiement en Production

* **En local** : L'accès à `/admin/` utilise le proxy local sans authentification nécessaire.
* **En production** : L'authentification est déléguée à **GitHub OAuth** (via Git Gateway sur Netlify ou Vercel). Seuls les utilisateurs possédant des droits d'écriture sur votre dépôt GitHub pourront se connecter à l'espace `/admin` et enregistrer des modifications.
