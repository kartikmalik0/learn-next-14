import { NextResponse } from "next/server";
import { comments } from "./data";

export async function GET() {
    return new Response(JSON.stringify(comments));
}

export async function POST(request: Request) {
    const payload = await request.json()
    console.log(payload)
    if(!payload.name || !payload.text){
        return NextResponse.json({result:"not required fields"},{status:400})
    }
    return NextResponse.json({text:"request send"})
}