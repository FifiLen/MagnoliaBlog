'use client'


import { NextStudio } from 'next-sanity/studio';
import  config from '@/sanity.config';
console.log(config);


export default function AdminPage(){
    return <NextStudio config={config}/>
}