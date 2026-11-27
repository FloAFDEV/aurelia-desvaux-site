import { NextResponse } from "next/server";
import { getSheetData } from "@/lib/sheetData";

// Réponse mise en cache et régénérée au plus une fois toutes les 30 minutes
// (ISR), comme les pages qui lisent le Sheet. Valeur à garder égale à
// REVALIDATE_SECONDS dans src/lib/sheetData.ts. getSheetData ne lève jamais
// d'erreur : la réponse contient toujours des données valides (dernière
// version valide du Sheet, ou repli).
export const revalidate = 1800;

export async function GET() {
	const data = await getSheetData();
	return NextResponse.json(data);
}
