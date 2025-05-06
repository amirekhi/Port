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


// app/(Dash)/AddProject/actions.ts

export async function getProjectById(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Fetch the project by ID
    const project = await db.collection("projects").findOne({ _id: new ObjectId(id) });

    if (project) {
      // Return a new object with _id as a string and preserve other fields
      return { ...project, _id: project._id.toString() };
    }

    return null;  // If no project is found, return null
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch project");
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







export async function updateProject(id: string, projectData: any) {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Ensure that you're using the correct format for _id and data
    const result = await db.collection("projects").updateOne(
      { _id: new ObjectId(id) }, // Find the project by _id
      {
        $set: {
          title: projectData.title,
          des: projectData.des,
          img: projectData.img,
          link: projectData.link,
          iconLists: projectData.iconLists,
        },
      }
    );

    if (result.modifiedCount === 0) {
      throw new Error("Project not updated. Maybe no changes were made?");
    }

    return result;
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project");
  }
}
