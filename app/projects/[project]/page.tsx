import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: {project: string}
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
      <div className="max-w-5xl mx-auto my-40">
        {/* Wyświetlenie daty publikacji nad kafelkiem */}
        <p className="text-center text-gray-700 mb-4 font-playfair text-3xl">{project.publication}</p>

        <div className="p-6 border-x">
          <h1 className="text-4xl font-playfair mb-2">{project.name}</h1>
          <div className="italic text-sm text-gray-600 mb-4">
            <PortableText value={project.subtitle} />
          </div>
          <Image
            src={project.image}
            alt={project.name}
            width={1000}
            height={600}
            className="object-cover rounded-md mb-8"
          />
          <div className="content">
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    );
}
