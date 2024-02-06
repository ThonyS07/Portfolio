import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";



export const GET = async () => {
    try {
        const projects = await prisma.project.findMany();
        return NextResponse.json(projects);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                { status: 500 }
            );
        }
    }
}
export const POST = async (request: Request) => {
	try {
		const { name, description, images } = await request.json();
		console.log(request.json());
		const newProject = await prisma.project.create({
			data: {
				name,
				description,
				images,
			},
		});
		console.log(newProject);
		return NextResponse.json(newProject);
	} catch (error) {
		console.log(error);
		if (error instanceof Error) {
			return NextResponse.json(
				{
					message: error.message,
				},
				{ status: 500 }
			);
		}
	}
}
