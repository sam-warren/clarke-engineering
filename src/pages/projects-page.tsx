import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    id: "bastion-arch",
    title: "Bastion Square Arch",
    description: "Iconic archway restoration project in downtown Victoria. Involved intricate metalwork and structural reinforcement.",
    imagePlaceholder: "[Bastion Square Arch Photo]",
    tags: ["Restoration", "Structural Steel", "Public Art"],
  },
  {
    id: "marine-repair-01",
    title: "Commercial Vessel Hull Repair",
    description: "Extensive hull repairs and custom fabrication for a commercial fishing vessel, ensuring seaworthiness and longevity.",
    imagePlaceholder: "[Marine Vessel Repair Photo]",
    tags: ["Marine", "Welding", "Custom Fabrication"],
  },
  {
    id: "industrial-fab-02",
    title: "Custom Industrial Equipment",
    description: "Designed and fabricated specialized material handling equipment for a local manufacturing plant, improving operational efficiency.",
    imagePlaceholder: "[Industrial Equipment Photo]",
    tags: ["Industrial", "Fabrication", "Machining"],
  },
  {
    id: "residential-gate-03",
    title: "Artistic Residential Gate",
    description: "Custom designed and crafted ornamental steel gate for a private residence, blending security with aesthetic appeal.",
    imagePlaceholder: "[Residential Gate Photo]",
    tags: ["Residential", "Custom Design", "Ornamental Steel"],
  },
];

export function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        Showcasing a selection of our diverse and successfully completed work across various sectors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader>
              <Skeleton className="w-full h-56 rounded-t-md bg-gray-300 flex items-center justify-center text-gray-500">
                {project.imagePlaceholder}
              </Skeleton>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-gray-700 mb-4">
                {project.description}
              </CardDescription>
            </CardContent>
            <div className="p-6 pt-0">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="mr-2 mb-2 bg-red-100 text-red-700 border-red-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold">Have a project in mind?</h2>
        <p className="text-lg text-gray-600 mt-2">
          Let's discuss how Clarke Engineering can bring your vision to life.
        </p>
        {/* Placeholder for a Button that links to contact page or quote request */}
        {/* <Button size="lg" className="mt-4 bg-red-500 hover:bg-red-600">Get a Quote</Button> */}
      </div>
    </div>
  );
} 