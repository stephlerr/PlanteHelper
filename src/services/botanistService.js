// Service pour les conseils de botaniste expérimenté

export const getPlantAdvice = (plantName) => {
  const commonPlants = {
    tomato: {
      watering: 'Arroser régulièrement (2-3 fois par semaine). Environ 5-6 cm d\'eau par semaine.',
      frequency: 'Quotidien en été, tous les 2-3 jours en hiver',
      sunlight: '6-8 heures de soleil direct par jour',
      temperature: '20-25°C optimal',
      soil: 'Sol riche en nutriments, bien drainé',
      diseases: [
        {
          name: 'Mildiou',
          symptoms: 'Taches brunes/grises sur les feuilles',
          treatment: 'Fongicide soufré, espacer les arrosages',
        },
        {
          name: 'Pourriture apicale',
          symptoms: 'Taches noires sur les fruits',
          treatment: 'Arroser régulièrement, ajouter du calcium',
        },
        {
          name: 'Septoriose',
          symptoms: 'Petites taches noires avec halo jaune',
          treatment: 'Retirer les feuilles infectées, fongicide',
        },
      ],
      insects: [
        { name: 'Aleurodes', treatment: 'Savon insecticide, éliminer les mauvaises herbes' },
        { name: 'Acariens', treatment: 'Spray acaricide, augmenter l\'humidité' },
        { name: 'Vers de la tomate', treatment: 'Élimination manuelle, insecticide biologique' },
      ],
      fertilizer: 'Engrais tomate hebdomadaire (riche en potassium)',
      pruning: 'Éliminer les feuilles basses, tailler les gourmands',
      harvest: 'Récolter les fruits rouges mature, 60-80 jours après plantation',
    },
    rose: {
      watering: 'Arroser profondément 2 fois par semaine. 2.5 cm d\'eau minimum.',
      frequency: 'Tous les 2-3 jours',
      sunlight: '6 heures de soleil direct minimum',
      temperature: '15-25°C',
      soil: 'Sol riche, bien drainé, légèrement acide (pH 6-6.5)',
      diseases: [
        {
          name: 'Oïdium',
          symptoms: 'Poudre blanche sur les feuilles',
          treatment: 'Fongicide soufré, meilleure circulation d\'air',
        },
        {
          name: 'Tache noire',
          symptoms: 'Taches noires avec halo jaune',
          treatment: 'Retirer feuilles infectées, fongicide cuivre',
        },
      ],
      insects: [
        { name: 'Pucerons', treatment: 'Savon insecticide ou eau savonneuse' },
        { name: 'Araignée rouge', treatment: 'Spray acaricide, augmenter humidité' },
      ],
      fertilizer: 'Engrais rose spécifique mensuellement',
      pruning: 'Tailler au printemps, enlever fleurs fanées',
      harvest: 'Récolter tôt le matin quand la rose s\'ouvre',
    },
    lavender: {
      watering: 'Arroser modérément, laisser sécher entre arrosages',
      frequency: 'Une fois par semaine',
      sunlight: '6-8 heures de soleil direct',
      temperature: '15-30°C',
      soil: 'Sol bien drainé, même légèrement sec',
      diseases: [
        {
          name: 'Pourriture racinaire',
          symptoms: 'Feuilles jaunes, plante qui fane',
          treatment: 'Améliorer drainage, réduire arrosage',
        },
      ],
      insects: [
        { name: 'Cicadelles', treatment: 'Insecticide naturel, traitement précoce' },
      ],
      fertilizer: 'Peu d\'engrais, une fois au printemps',
      pruning: 'Tailler après floraison pour garder forme compacte',
      harvest: 'Récolter fleurs en début d\'été pour séchage',
    },
    basil: {
      watering: 'Arroser régulièrement, garder sol humide',
      frequency: 'Quotidien',
      sunlight: '6-8 heures de soleil',
      temperature: '20-25°C',
      soil: 'Sol riche, bien drainé',
      diseases: [
        {
          name: 'Fusariose',
          symptoms: 'Feuilles jaunes, plante qui fane',
          treatment: 'Retirer plante infectée, améliorer ventilation',
        },
      ],
      insects: [
        { name: 'Pucerons', treatment: 'Savon insecticide' },
        { name: 'Aleurodes', treatment: 'Spray insecticide naturel' },
      ],
      fertilizer: 'Engrais léger toutes les 2 semaines',
      pruning: 'Pincer régulièrement pour favoriser la croissance',
      harvest: 'Récolter les feuilles du haut régulièrement',
    },
  };

  const plantKey = plantName.toLowerCase().split(' ')[0];
  return commonPlants[plantKey] || getGenericAdvice();
};

const getGenericAdvice = () => ({
  watering: 'Arroser quand le sol est sec en surface. En moyenne 2-3 fois par semaine.',
  frequency: 'Adapter à la saison et au type de plante',
  sunlight: '4-6 heures de soleil par jour minimum',
  temperature: '15-25°C pour la plupart des plantes',
  soil: 'Sol riche en matière organique, bien drainé',
  diseases: [
    {
      name: 'Observation recommandée',
      symptoms: 'Examiner régulièrement les feuilles',
      treatment: 'Agir rapidement en cas de symptômes',
    },
  ],
  insects: [
    { name: 'Inspection régulière', treatment: 'Vérifier l\'envers des feuilles' },
  ],
  fertilizer: 'Engrais équilibré mensuellement pendant la croissance',
  pruning: 'Tailler les branches mortes et les feuilles jaunes',
  harvest: 'Dépend du type de plante',
});

export const getDiseaseLevel = (symptom) => {
  const criticalSymptoms = ['pourriture', 'fane', 'flétri'];
  const mediumSymptoms = ['tache', 'poudre', 'jaune'];
  
  for (let s of criticalSymptoms) {
    if (symptom.toLowerCase().includes(s)) return 'CRITIQUE';
  }
  for (let s of mediumSymptoms) {
    if (symptom.toLowerCase().includes(s)) return 'MOYEN';
  }
  return 'LÉGER';
};

export const getSuggestedActions = (symptoms) => {
  const actions = [];
  
  if (symptoms.includes('jaune')) {
    actions.push('Vérifier l\'arrosage (trop ou pas assez)');
    actions.push('Ajouter de l\'engrais équilibré');
  }
  if (symptoms.includes('sec')) {
    actions.push('Augmenter la fréquence d\'arrosage');
    actions.push('Vérifier le drainage du sol');
  }
  if (symptoms.includes('tache')) {
    actions.push('Retirer les feuilles affectées');
    actions.push('Appliquer un fongicide');
    actions.push('Améliorer la circulation d\'air');
  }
  if (symptoms.includes('insecte')) {
    actions.push('Inspecter régulièrement les feuilles');
    actions.push('Appliquer un insecticide naturel');
    actions.push('Isoler la plante si possible');
  }
  
  return actions.length > 0 ? actions : ['Observer attentivement', 'Documenter les symptômes'];
};
