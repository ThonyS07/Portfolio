import { NextResponse } from "next/server";
import { prisma } from "@/assets/libs/prisma";
import { Params } from "@/app/interfaces/Project";
import { Prisma } from "@prisma/client";

export const GET = async (request: Request, { params }: Params) => {
	const { id } = params;
	try {
		const projects = await prisma.project.findMany({
			where: {
				id: id,
			},
		});
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
};
export const PUT = async (request: Request, { params }: Params) => {
	const { id } = params;
	try {
		const { name, description, images } = await request.json();

		const updatedProject = await prisma.project.update({
			where: {
				id: id,
			},
			data: {
				name,
				description,
				images,
			},
		});

		return NextResponse.json(updatedProject);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2025") {
				return NextResponse.json(
					{
						message: "project not found",
					},
					{
						status: 404,
					}
				);
			}

			return NextResponse.json(
				{
					message: error.message,
				},
				{
					status: 500,
				}
			);
		}
	}
};
export const DELETE = async (request: Request, { params }: Params) => {
	const { id } = params;
	try {
		const deletedProject = await prisma.project.delete({
			where: {
				id: id,
			},
		});
		if (!deletedProject)
			return NextResponse.json(
				{ message: "project not found" },
				{ status: 404 }
			);
		return NextResponse.json(deletedProject);
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2025") {
				return NextResponse.json(
					{
						message: "project not found",
					},
					{
						status: 404,
					}
				);
			}

			return NextResponse.json(
				{
					message: error.message,
				},
				{
					status: 500,
				}
			);
		}
	}
};
