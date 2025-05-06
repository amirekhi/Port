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

  const [selectedIcon, setSelectedIcon] = useState(""); // dropdown selected value
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
        setTimeout(() => window.location.reload(), 1000);
      } catch (err) {
        console.error(err);
        alert("Failed to create project");
      }
    });
  };

  const iconOptions = [
    { label: "React", value: "/tech/reactjs.png" },
    { label: "Next.js", value: "/tech/nextjs.png" },
    { label: "Tailwind", value: "/tech/tailwind.png" },
    { label: "Node.js", value: "/tech/nodejs.png" },
    { label: "TypeScript", value: "/tech/typescript.png" },
    { label: "MongoDB", value: "/tech/mongodb.png" },
  ];

  const handleAddIcon = () => {
    if (selectedIcon && !icons.includes(selectedIcon)) {
      setIcons([...icons, selectedIcon]);
      setSelectedIcon("");
    }
  };

  const handleRemoveIcon = (url: string) => {
    setIcons(icons.filter((icon) => icon !== url));
  };

  return (
    <div className="w-full p-10 text-white light:text-[#3B3B3B] max-md:pt-[130px]">
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
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2"
          required
        />

        {/* Title FA */}
        <input
          type="text"
          placeholder="Project Title (FA)"
          value={titleFa}
          onChange={(e) => setTitleFa(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2"
          required
        />

        {/* Description EN */}
        <textarea
          placeholder="Project Description (EN)"
          value={desEn}
          onChange={(e) => setDesEn(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 min-h-[100px]"
          required
        />

        {/* Description FA */}
        <textarea
          placeholder="Project Description (FA)"
          value={desFa}
          onChange={(e) => setDesFa(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 min-h-[100px]"
          required
        />

        {/* Link */}
        <input
          type="url"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2"
          required
        />

        {/* Icons Dropdown */}
        <div>
          <label className="block font-semibold mb-1">Select Icon</label>
          <div className="flex gap-2 items-center">
            <select
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
              className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 w-full"
            >
              <option value="">-- Choose an icon --</option>
              {iconOptions.map((icon) => (
                <option key={icon.value} value={icon.value}>
                  {icon.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleAddIcon}
              disabled={!selectedIcon}
              className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-md"
            >
              Add
            </button>
          </div>

          {/* Preview Selected Icons */}
          <div className="flex flex-wrap gap-3 mt-3">
            {icons.map((iconUrl) => (
              <div key={iconUrl} className="relative group">
                <img src={iconUrl} alt="icon" className="w-8 h-8" />
                <button
                  type="button"
                  onClick={() => handleRemoveIcon(iconUrl)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 hidden group-hover:flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

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
