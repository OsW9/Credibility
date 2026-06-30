---
id: "togaf-sankofa-architecture"
title: "Modéliser une infrastructure de connaissances patrimoniales avec TOGAF ADM"
type: "Analysis"
published_at: 2026-06-30
project_id: "sankofa"
tags: ["architecture", "togaf", "sankofa", "system-engineering"]
---

## Introduction : L'Architecture d'Entreprise au service de la mémoire

Dans le cadre du **Projet Sankofa**, l'objectif n'est pas de concevoir une simple application de diffusion culturelle, mais de bâtir une **infrastructure nationale de continuité des connaissances patrimoniales** (Burkina Faso). Face à la fragilité des sources orales, documentaires et linguistiques, l'approche empirique ("code first") montre rapidement ses limites. 

Pour garantir la pérennité, l'évolutivité et la souveraineté éthique des savoirs, nous avons appliqué le cadre d'architecture d'entreprise **TOGAF ADM (Architecture Development Method)**. Cet article détaille la déconstruction méthodique de la vision cible (Phase A) et des couches d'architecture associées.

---

## 1. Pourquoi TOGAF pour un système non-commercial ?

Le mot *« Enterprise »* dans TOGAF ne désigne pas uniquement une entreprise commerciale à but lucratif. Il définit tout ensemble organisé d'acteurs, de processus, de technologies et de services visant une mission commune. Dans le cadre de **Sankofa**, l'entreprise englobe les communautés détentrices des savoirs, les collecteurs, les chercheurs, les comités de validation et les institutions étatiques.

L'utilisation du cycle ADM permet de :
1. **Séparer les capacités métier de la technique** : Ne pas choisir une base de données ou un langage de programmation avant d'avoir qualifié la dynamique des connaissances et les règles éthiques de diffusion.
2. **Gérer la complexité systémique** : Structurer la subsidiarité patrimoniale (qui détient quoi, qui valide quoi, et sous quelles contraintes linguistiques).
3. **Assurer l'interopérabilité future** : Aligner les futurs modèles applicatifs sur des capacités robustes et standardisées.

---

## 2. Phase 0 & Phase A : De la raison d'être à la Vision d'Architecture

### La Phase 0 (Foundation)
Elle a permis de définir le cadre de gouvernance éthique et la justification écosystémique du projet. La question centrale était : *Pourquoi ce programme doit-il exister ?* Les livrables ont validé la nécessité d'une souveraineté numérique sur les corpus de données et les actifs linguistiques.

### La Phase A (Architecture Vision)
Elle a traduit cette fondation en une vision organisationnelle cible : *Quelle structure de capacités devons-nous construire ?* 

Pour y répondre, la Phase A de **Sankofa** a formalisé **12 capacités métier (Business Capabilities)** prioritaires, parmi lesquelles :
* **BC-04 (Préserver)** : Stockage immuable des originaux bruts (archives sonores, manuscrits).
* **BC-05 (Structurer)** : Modélisation des savoirs sous forme de graphes sémantiques.
* **BC-07 (Valider & Arbitrer)** : Processus de validation plurielle (communautaire pour l'éthique, scientifique pour l'exactitude).
* **BC-08 (Diffuser & Transmettre)** : Mécanismes d'accès filtrés selon le niveau de sensibilité des savoirs.

---

## 3. L'Architecture Conceptuelle en 5 Couches

La Vision d'Architecture du projet Sankofa s'articule autour d'un modèle conceptuel strict en 5 couches indépendantes :

| Couche | Nom de la Couche | Composants & Services Cibles | Objectif & Portée |
| :---: | :--- | :--- | :--- |
| **5** | **Transmission & Valorisation** | Éducation, Recherche, API gouvernées, Assistants IA | Restitution et réutilisation responsable des savoirs |
| **4** | **Services de Connaissance** | Moteur de recherche, Graphes sémantiques, Taxonomies, Traductions | Structuration, variantes et contextualisation des concepts |
| **3** | **Gouvernance Patrimoniale** | Processus de validation, Droits & consentements, Sensibilité | Contrôle éthique, classification et validation humaine |
| **2** | **Patrimoine Numérique** | Originaux immuables, Dérivés, Versions, Métadonnées de provenance | Stockage pérenne, traçabilité et intégrité de la donnée |
| **1** | **Sources Patrimoniales** | Détenteurs physiques, Communautés, Institutions, Collections | Identification et collecte de la matière brute terrain |

### Description des Couches
* **Couches 1 & 2 (Préservation)** : Garantissent que la donnée source brute (enregistrement vocal d'un conte traditionnel, par exemple) est conservée sans altération, avec des métadonnées strictes attestant de sa provenance et du consentement associé.
* **Couche 3 (Gouvernance)** : C'est le cœur éthique du système. Il catégorise les savoirs (publics, secrets sacrés, à diffusion restreinte) et soumet les fiches à une validation humaine avant toute diffusion.
* **Couches 4 & 5 (Valorisation)** : Permettent d'exploiter les connaissances nettoyées (moteurs de recherche multilingues, parcours éducatifs, requêtes IA assistées par RAG).

---

## 4. Des capacités métier aux phases de réalisation (B à F)

Une fois la Vision d'Architecture validée (Phase A), le cycle TOGAF s'est poursuivi à travers les étapes suivantes :
* **Phase B (Business Architecture)** : Conception des workflows de collecte et des règles d'arbitrage communautaire.
* **Phase C (Data/Application Architecture)** : Modélisation du graphe de connaissances et définition des APIs de transmission.
* **Phase D (Technology Architecture)** : Infrastructure résiliente en local/hors-ligne (PWA, réplication asynchrone) pour pallier les contraintes de connectivité du terrain.
* **Phase F (Migration Planning)** : Planification progressive en 4 horizons, débutant par une fondation opérationnelle minimale (Horizon 1) jusqu'à une intégration régionale et panafricaine (Horizon 4).

## Conclusion : Sankofa, un modèle réutilisable

Le Projet Sankofa démontre que les méthodes rigoureuses d'ingénierie système ne sont pas réservées aux systèmes industriels ou militaires. Appliqué aux connaissances traditionnelles, le cadre **TOGAF ADM** offre les outils nécessaires pour transformer des traditions orales fragiles en un patrimoine numérique indestructible et gouverné de manière souveraine.
