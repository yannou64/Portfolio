# Projet de portfolio

Il s'agit de centraliser tous mes projets dans un style unique tout en pratiquant les technos :

- next
- react
- docker
- sqlite

# Préparer l'environnement

```bash
- git clone https://github.com/yannou64/Portfolio.git
- cd portfolio
```

- verifier que docker desktop est lancé
- créer une image locale

```bash
docker build -t portfolioImage -f Dockerfile.dev .
```

- créer une conteneur

```bash
docker run -it -p 3000:3000 -v .:/app -v /app/node_modules --name portfolioConteneur portfolioImage
```

# Travailler sur une nouvelle fonctionnalité

- créer une nouvelle branche à partir de **dev**

```bash
git switch dev
git fetch origin
git reset --hard origin/dev
git switch -c feat/nom-fonctionnalite
```

rappel : [[conventional branches]]

# Commit et push

```bash
git add .
git commit -m "feat: ajoute la page d'inscription"
git push origin feat/nom-fonctionnalite
```

rappel : [[Conventional commits]]

# Ajout d'une librairie

En raison de l’utilisation de Docker et de l’isolation du dossier node_modules (grâce au volume),
l’installation de nouvelles dépendances ne peut pas être faite directement depuis le conteneur.
**1. installer la librairie en local**

```bash
npm install <nom_librairie>
```

**2. Reconstruire l'image docker** pour que la dépendance soit prise en compte

```bash
docker build -t studio418-dev -f Dockerfile.dev .
```

3-**Relancer le conteneur**

```bash
docker run -it -p 5173:5173 \
-v .:/app \
-v /app/node_modules \
--name studio418-dev studio418-dev
```

# CI local

A chaque commit :
- Vérification automatique du message de commit via **Commitlint** :  
	→ s’assure qu’il respecte la convention [[Conventional commits]].
A chaque push :
- Refus du push direct vers **main** ou **dev** (branches protégées).
- Exécution automatique de :
	- **[[ESLint]]** → vérifie la qualité et la cohérence du code.
	- **[[Prettier]]** → applique la mise en forme uniforme.
	- Ces outils sont automatisés via **[[Husky]]** et **[[Lint-Staged]]**.
	- Si aucune erreur ESLint n’est détectée, Prettier formate le code et le push est autorisé.

# Dockerisatin en développement
```
