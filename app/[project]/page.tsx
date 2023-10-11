import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";


type Props = {
    params: {project: string}
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
      <div className="max-w-5xl mx-auto my-24 md:my-40">
        {/* Wyświetlenie daty publikacji nad kafelkiem */}
        <p className="text-center text-gray-800 mb-4 font-playfair">{project.publication}</p>
        

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
          <Link href="/">
            <div className=" border p-4 mt-5 rounded-sm">
            <p className=" font-semibold">Powrót na stronę główną →</p>
          </div>
          </Link>
          
        </div>
      </div>
    );
}
