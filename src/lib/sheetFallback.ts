// Données de secours Médoucine, sans aucune dépendance serveur : importables
// par un composant client (MedoucineBadge) sans y entraîner le code de
// lecture du Google Sheet (src/lib/sheetData.ts).
//
// Seule valeur de repli pour cette donnée dans tout le projet. Utilisée
// uniquement quand aucune donnée Médoucine valide du Sheet n'est disponible ;
// elle ne remplace jamais une donnée valide du Sheet.
//
// Valeurs lues dans la feuille via /api/sheet en production le 27/11/2026.
export const FALLBACK_MEDOUCINE: {
	rating: number;
	reviewCount: number;
	lastUpdated: string;
} = {
	rating: 4.95,
	reviewCount: 201,
	lastUpdated: "21/08/2026",
};
