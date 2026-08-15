import { NextResponse } from "next/server";
import { getSheetData } from "@/lib/sheetData";

export async function GET() {
	const data = await getSheetData();
	return NextResponse.json(data);
}
