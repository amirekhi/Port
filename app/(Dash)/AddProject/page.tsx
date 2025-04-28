"use client";

import { useState, useTransition } from "react";
import { createProject } from "./actions";
import { uploadImage } from "@/lib/uploadImage";

export default function AddProjectPage() {
  const [file, setFile] = useState<File | null>(null);
  const [titleEn, setTitleEn] = useState("");
  const [titleFa, setTitleFa] = useState("");
  const [desEn, setDesEn] = useState("");
  const [desFa, setDesFa] = useState("");
  const [link, setLink] = useState("");
  const [icons, setIcons] = useState<string[]>([]);

  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    startTransition(async () => {
      try {
        const imageUrl = await uploadImage(file);

        await createProject({
          title: { en: titleEn, fa: titleFa },
          des: { en: desEn, fa: desFa },
          img: imageUrl,
          link,
          iconLists: icons,
        });

        setSuccess(true);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (err) {
        console.error(err);
        alert("Failed to create project");
      }
    });
  };

  return (
    <div className="w-full p-10 text-white light:text-[#3B3B3B] pt-[100px]">
      {/* Big H1 Title */}
      <h1 className="text-4xl font-bold mb-10 text-left dark:text-white light:text-[#3B3B3B]">
        Create a New Project 🚀
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-4xl gap-6"
      >
        {/* File Upload */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 transition-all duration-200 focus:border-purple-500 hover:border-purple-400 dark:focus:border-purple-500 dark:hover:border-purple-400"
          required
        />

        {/* Title EN */}
        <input
          type="text"
          placeholder="Project Title (EN)"
          value={titleEn}
          onChange={(e) => setTitleEn(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 transition-all duration-200 focus:border-purple-500 hover:border-purple-400 dark:focus:border-purple-500 dark:hover:border-purple-400"
          required
        />

        {/* Title FA */}
        <input
          type="text"
          placeholder="Project Title (FA)"
          value={titleFa}
          onChange={(e) => setTitleFa(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 transition-all duration-200 focus:border-purple-500 hover:border-purple-400 dark:focus:border-purple-500 dark:hover:border-purple-400"
          required
        />

        {/* Description EN */}
        <textarea
          placeholder="Project Description (EN)"
          value={desEn}
          onChange={(e) => setDesEn(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 min-h-[100px] transition-all duration-200 focus:border-purple-500 hover:border-purple-400 dark:focus:border-purple-500 dark:hover:border-purple-400"
          required
        />

        {/* Description FA */}
        <textarea
          placeholder="Project Description (FA)"
          value={desFa}
          onChange={(e) => setDesFa(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 min-h-[100px] transition-all duration-200 focus:border-purple-500 hover:border-purple-400 dark:focus:border-purple-500 dark:hover:border-purple-400"
          required
        />

        {/* Link */}
        <input
          type="url"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 transition-all duration-200 focus:border-purple-500 hover:border-purple-400 dark:focus:border-purple-500 dark:hover:border-purple-400"
          required
        />

        {/* Icons */}
        <input
          type="text"
          placeholder="Icon URLs (comma separated)"
          value={icons.join(",")}
          onChange={(e) => setIcons(e.target.value.split(","))}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 transition-all duration-200 focus:border-purple-500 hover:border-purple-400 dark:focus:border-purple-500 dark:hover:border-purple-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className={`rounded-md px-6 py-3 font-semibold transition-all duration-200 ${
            isPending
              ? "bg-white/20 text-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600 text-white"
          }`}
        >
          {isPending ? "Uploading..." : "Create Project"}
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-green-400 light:text-green-600 text-center mt-4 font-semibold animate-pulse">
            ✅ Project uploaded successfully!
          </p>
        )}
      </form>
    </div>
  );
}
