import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import BackgroundText from "@/components/magnolia";


export default async function Home() {

const projects = await getProjects();
console.log("Aktualny stan projects po aktualizacji:", projects);


  return (
  <div className=" max-w-5xl mx-auto my-20">
    <BackgroundText />
    <div className="h-20"></div>
    <h1 className=" hero text-center text-4xl md:text-8xl mb-2 "><span className=" font-playfair">Magnolia</span> <br /><span className=" font-playfair">Blog o</span> <span className="highlighted font-playfair italic">uzależnieniach</span></h1>
    <Link href="about"><p className=" text-center hero"><span className=" underline font-light">O poradni</span>↩</p></Link>

    <p className=" font-semibold mt-20 md:mt-40 pl-10 md:pl-0">Artykuły⤵</p>
    <div className="mt-10 grid grid-cols-2 gap-12">
      
    { projects.map((project) => (
      <div key={project.name} className=" border-x p-10">
        <p className=" text-sm font-bold">{project.publication}</p>
        <h2 className=" font-playfair text-4xl mb-3">{project.name}</h2>
        <div className=" italic text-sm text-slate-500 mb-3"><PortableText value={project.subtitle}/></div>

        <Image
        src={project.image}
        alt={project.name}
        width={1000}
        height={200}
        className=" object-cover rounded-md"
        ></Image>


        <Link
        className=" "
        href={`/projects/${project.slug}`}
        key={project._id}
        >
        
        <p className=" font-semibold text-gray-600 p-4 border mt-2 menu">Przeczytaj artykuł →</p>

        </Link>

      
        
        </div>
        
    )) }
    </div>
  </div>
  );
}
