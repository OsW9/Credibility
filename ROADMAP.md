# Roadmap de Réalisation — Hub de Crédibilité

Ce document définit la trajectoire de développement du projet, depuis le socle technique actuel jusqu'à la mise en production.

## 🏁 Sprint 1 : La Validation du Contenu (Le "Proof of Concept")
*Objectif : Passer d'un site "vide" à un site "probant".*

- [ ] **Peuplement des Données :** Remplir `src/content/` avec les vrais projets, compétences et articles.
- [ ] **Finalisation des Pages Manquantes :**
    - `src/pages/about.astro` : Vision, valeurs et parcours.
    - `src/pages/contact.astro` : Formulaire de contact.
    - `src/pages/collaborate.astro` : Opportunités de collaboration.
- [ ] **Optimisation Typographique :** Ajustement final des espacements et des contrastes pour la lecture longue.

## ⚡ Sprint 2 : L'Expérience Utilisateur Avancée (The "Polish")
*Objectif : Rendre la navigation intuitive et fluide.*

- [ ] **Filtrage Dynamique :** Filtrage des projets par compétence sans rechargement de page.
- [ ] **Moteur de Recherche Interne :** Implémentation d'une recherche rapide (via Fuse.js).
- [ ] **Micro-Animations :** Entrées en fondu, transitions de pages et skeleton loading.
- [ ] **SEO & Meta :** Configuration OpenGraph et Meta pour la visibilité sociale.

## 🛠️ Sprint 3 : L'Infrastructure de Confiance (The "Guardian")
*Objectif : Garantir que la plateforme reste crédible et à jour.*

- [ ] **Automatisation du Link-Checker :** GitHub Action pour vérifier la validité des liens de preuves.
- [ ] **Système de Formulaires :** Intégration d'un service tiers (Formspree/Getform).
- [ ] **Administration Simplifiée :** Optimisation du workflow de publication Markdown.

## 🌐 Sprint 4 : Déploiement & Monitoring (The "Live")
*Objectif : Rendre la plateforme accessible au monde entier.*

- [ ] **Déploiement Production :** Mise en ligne sur Vercel/Netlify avec domaine personnalisé.
- [ ] **Audit de Performance :** Optimisation Lighthouse (Score 100/100).
- [ ] **Analyse de Conversion :** Installation d'un outil de tracking léger (Plausible).

---

## 💎 Synthèse de Valeur

| Phase | Focus | Résultat |
| :--- | :--- | :--- |
| **S1** | Contenu | Portfolio fonctionnel et crédible. |
| **S2** | UX | Expérience utilisateur "Premium". |
| **S3** | Rigueur | Système robuste sans liens cassés. |
| **S4** | Visibilité | Plateforme rapide, mesurable et accessible. |
