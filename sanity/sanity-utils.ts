import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import  clientConfig from "./config/client-config"

export async function getProjects(): Promise<Project[]> {

    
    return createClient(clientConfig).fetch(
        groq`*[_type == 'blog']{
            _id,
            _createdAt,
            name,
            publication,
            subtitle,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            link,
        }`
    );
}


export async function getProject(slug:string): Promise<Project> {

    
    return createClient(clientConfig).fetch(
        groq`*[_type == 'blog' && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            publication,
            subtitle,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            link,
        }`,
        { slug } 
    );
}
