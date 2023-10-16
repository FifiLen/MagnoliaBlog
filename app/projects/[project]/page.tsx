import { getProject } from "@/sanity/sanity-utils";
import { getProjects } from "@/sanity/sanity-utils";

import { PortableText } from "@portabletext/react";

import Image from "next/image";
import Link from "next/link";


type Props = {
    params: {project: string}
}




export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    const projects = await getProjects();

    return (
      <div className="max-w-6xl mx-auto my-24 md:my-40 flex justify-between">
        

        <div className="p-6 border-x flex-1">
        <p className=" text-gray-700 mb-4 font-playfair text-3xl">{project.publication}</p>
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

          <div className=" p-4 border border-black rounded-sm mb-3 mt-4 bg-slate-100">
            <a href={project.link} download={true}  className=" font-semibold">Pobierz pdf →</a>
          </div>

          <Link href="/">
            <div className=" border p-4 mt-5 rounded-sm">
            <p className=" font-semibold">Powrót na stronę główną →</p>
          </div>
          </Link>
        </div>
        <aside className="hidden md:block w-60 bg-white overflow-y-auto border-r">
        <h3 className="font-bold text-2xl mb-5 font-playfair px-8 mt-2">Inne wpisy ⤵</h3>
        {  projects.map((project) => (
    <div key={project.slug} className=" px-6 ml-1">  {/* Dodaj klucz dla unikalności */}
       
        <ul>
            <Link href={`/projects/${project.slug}`}>
                <p className=" mb-3 text-[13px] font-playfair">{project.name} ↓</p>
                <Image src={project.image} alt={project.name} width={180} height={180} className=" rounded-md mb-4" />
            </Link>
        </ul>
    </div>
))}

        </aside>
      </div>
    );
}
