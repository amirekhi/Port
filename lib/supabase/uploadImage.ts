// lib/supabase/uploadImage.ts
import { createClient } from "./client";

const BUCKET_NAME = "mudit";

export async function uploadImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop();
  const filePath = `projects/${crypto.randomUUID()}.${ext}`;

  const client = createClient();

  const { data, error } = await client.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("UPLOAD ERROR:", error);
    throw error;
  }

  const { data: publicData } = client.storage
    .from(BUCKET_NAME)
    .getPublicUrl(data.path);

  return publicData.publicUrl;
}