"use server";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";





export async function createProject(data: {
  title: { en: string; fa: string };
  des: { en: string; fa: string };
  img: string;
  link: string;
  iconLists: string[];
}) {
  try {
    const client = await clientPromise;
    const db = client.db();

    await db.collection("projects").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to create project" };
  }
}



export async function getProjects() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const projects = await db.collection("projects").find({}).toArray();

    // Convert Mongo _id to string for each project
    const projectsWithStringId = projects.map((project) => ({
      ...project,
      _id: project._id.toString(), // Convert ObjectId to string
    }));

    return projectsWithStringId;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}









export async function deleteProject(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db();

    await db.collection("projects").deleteOne({ _id: new ObjectId(id) });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to delete project" };
  }
}