import { NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(request: Request, content: any) {
    const singleComment = comments.filter((item) => item.id == content.params.id)
    return new Response(JSON.stringify(singleComment.length == 0 ? {result:"no data found",success:false}:{request:singleComment,success:true}));
}

export async function PATCH(request:Request,context:any){
    const body = await request.json()
    const {text} = body
    const index = comments.findIndex((comment)=>comment.id==parseInt(context.params.id))
    comments[index].text = text
    return NextResponse.json(comments[index])
}

export async function DELETE(request:Request,context:any){
    const index = comments.findIndex((comment)=>comment.id==parseInt(context.params.id))
    const deletedComment = comments[index]
    comments.splice(index,1)
    return NextResponse.json(deletedComment)
}