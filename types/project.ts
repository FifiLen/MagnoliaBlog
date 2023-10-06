import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string,
    publication: string;
    subtitle: PortableTextBlock[];
    slug: string,
    image: string,
    url: string,
    content: PortableTextBlock[];
}