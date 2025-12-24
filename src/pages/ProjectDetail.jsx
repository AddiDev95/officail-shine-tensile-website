import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import ProjectTemplate from "../components/ProjectTemplate";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projectsData.find((p) => p.slug === slug);

  console.log("Slug from URL:", slug);
  console.log("Matched Project:", project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-[#03045e]">
          Project not found
        </h2>
      </div>
    );
  }

  return <ProjectTemplate project={project} />;
}
