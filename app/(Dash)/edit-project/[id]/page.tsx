"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProjectById, updateProject } from "../../AddProject/actions";
import { uploadImage } from "@/lib/uploadImage";

const iconOptions = [
  { label: "React", value: "/tech/reactjs.png" },
  { label: "Next.js", value: "/tech/nextjs.png" },
  { label: "Tailwind", value: "/tech/tailwind.png" },
  { label: "Node.js", value: "/tech/nodejs.png" },
  { label: "TypeScript", value: "/tech/typescript.png" },
  { label: "MongoDB", value: "/tech/mongodb.png" },
];

const EditProject = () => {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState("");

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await getProjectById(id as string);
          setProject(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleAddIcon = () => {
    if (selectedIcon && !project.iconLists.includes(selectedIcon)) {
      setProject({ ...project, iconLists: [...project.iconLists, selectedIcon] });
      setSelectedIcon("");
    }
  };

  const handleRemoveIcon = (url: string) => {
    setProject({ ...project, iconLists: project.iconLists.filter((icon: string) => icon !== url) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;
    setIsSubmitting(true);

    try {
      let imageUrl = project.img;
      if (file) {
        imageUrl = await uploadImage(file);
      }

      const updatedProject = await updateProject(id as string, {
        ...project,
        img: imageUrl,
      });

      if (updatedProject) {
        router.push(`/Projects`);
      }
    } catch (error) {
      console.error("Error updating project:", error);
      setIsSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-800/50">
        <div className="relative w-16 h-16 mr-4">
          <div className="absolute inset-0 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-4 border-t-transparent border-purple-500 rounded-full animate-spin animation-delay-200"></div>
        </div>
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold animate-bounce-letter">L</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-100">o</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-200">a</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-300">d</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-400">i</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-500">n</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-600">g</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-700">.</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-800">.</span>
          <span className="text-white text-xl font-semibold animate-bounce-letter delay-900">.</span>
        </div>
      </div>
    );

  return (
    <div className="w-full p-10 text-white light:text-[#3B3B3B] max-md:pt-[130px]">
      <h1 className="text-4xl font-bold mb-10 text-left dark:text-white light:text-[#3B3B3B]">
        Edit Project: {project.title.en}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-4xl gap-6">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2"
        />

        <input
          type="text"
          placeholder="Project Title (EN)"
          value={project.title.en}
          onChange={(e) => setProject({ ...project, title: { ...project.title, en: e.target.value } })}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2"
          required
        />

        <input
          type="text"
          placeholder="Project Title (FA)"
          value={project.title.fa}
          onChange={(e) => setProject({ ...project, title: { ...project.title, fa: e.target.value } })}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2"
          required
        />

        <textarea
          placeholder="Project Description (EN)"
          value={project.des.en}
          onChange={(e) => setProject({ ...project, des: { ...project.des, en: e.target.value } })}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 min-h-[100px]"
          required
        />

        <textarea
          placeholder="Project Description (FA)"
          value={project.des.fa}
          onChange={(e) => setProject({ ...project, des: { ...project.des, fa: e.target.value } })}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2 min-h-[100px]"
          required
        />

        <input
          type="url"
          placeholder="Project Link"
          value={project.link}
          onChange={(e) => setProject({ ...project, link: e.target.value })}
          className="bg-transparent border light:border-black/60 dark:border-white/30 rounded-md px-4 py-2"
          required
        />

        {/* Icons Dropdown with Preview (Copied from Add Page) */}
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

          <div className="flex flex-wrap gap-3 mt-3">
            {project.iconLists.map((iconUrl: string) => (
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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`rounded-md px-6 py-3 font-semibold transition-all duration-200 ${
            isSubmitting
              ? "bg-white/20 text-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600 text-white"
          }`}
        >
          {isSubmitting ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
};

export default EditProject;
