import Post from "@/app/models/Post";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        await connect();
        const posts = await Post.find();
        return new NextResponse(posts, { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse("Database Error", { status: 500 });
    }
};
