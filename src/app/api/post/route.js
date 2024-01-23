import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const posts = await prisma.post.findMany();

        return new NextResponse(JSON.stringify(posts, { status: 200 }))
    } catch (err) {
        console.log(err);

        return new NextResponse(JSON > stringify({ message: "실패" }, { status: 900 }))
    }
}