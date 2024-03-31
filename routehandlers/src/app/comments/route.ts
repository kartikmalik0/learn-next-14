import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const filteredCommetns = query ?  comments.filter((comment)=>comment.text.includes(query)) : comments
    return new Response(JSON.stringify(filteredCommetns));
}

export async function POST(request: Request) {
    const payload = await request.json()
    console.log(payload)
    if(!payload.name || !payload.text){
        return NextResponse.json({result:"not required fields"},{status:400})
    }
    return NextResponse.json({text:"request send"})
}