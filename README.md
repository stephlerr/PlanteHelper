# 🌱 PlanteHelper

Application mobile pour identifier les plantes et leur donner des conseils de soin.

## 🎯 Fonctionnalités

- 📸 **Identifier les plantes** par photo
- 🏥 **Analyser la santé** (maladie, carences, nutriments)
- 💡 **Donner des conseils** pour soigner et faire croître les plantes
- 📚 **Historique** des plantes analysées

## 🛠️ Stack technique

- **React Native** avec Expo (iOS + Android)
- **Navigation**: React Navigation
- **API**: Expo Camera, Axios pour appels API

## 📱 Installation

### 1. Prérequis
- Node.js installé sur Windows
- npm (vient avec Node.js)

### 2. Setup du projet

```bash
# 1. Clone le repo
git clone https://github.com/stephlerr/PlanteHelper.git
cd PlanteHelper

# 2. Installe les dépendances
npm install

# 3. Lance l'app
npm start
```

### 3. Pour tester sur ton téléphone

- **Android**: Scanne le QR code avec l'app Expo
- **iOS**: Scanne le QR code avec Camera

## 📂 Structure du projet

```
PlanteHelper/
├── src/
│   └── screens/
│       ├── CameraScreen.js      # Écran caméra
│       └── HistoryScreen.js     # Historique
├── App.js                        # Point d'entrée
├── package.json                  # Dépendances
└── app.json                      # Config Expo
```

## 🚀 Prochaines étapes

1. Configurer une API d'identification de plantes
2. Ajouter la persistance des données
3. Améliorer l'UI/UX
4. Ajouter des conseils détaillés

## 📝 Notes

C'est un projet en développement. Toutes les fonctionnalités sont à implémenter progressivement.
