'use server';

import { redirect } from "next/navigation";
import {db} from "@/db";


export async function  editSnippet(id:number,code:string){
    await db.snippet.update({
        where:{
            id
        },
        data:{code}
    });

    redirect(`/snippets/${id}`);


}

export async function deleteSnippet(id:number){
    await db.snippet.delete({
        where:{id}
    })

    redirect("/")
}


export async function createSnippet(formState:{message:string},formData : FormData){



    // this needs to be server action

    'use server';

    // checks the input 

    const title = formData.get('title') ;
    const code = formData.get("code") ;

    if(typeof title !== 'string' || title.length < 3){
        return {
            message:"Title Should longer"
        };
    }

    if(typeof code !== 'string' || code.length <5){
        return {
            message:"Code should be longer"
        }
    }



    // create the new record
    try{
        const snippet = await db.snippet.create({
            data:{
                title,
                code
            }
        });
    
    }
    
   catch(err:unknown){
        if(err instanceof Error){
            return{
                message:err.message,
            }
        }
        else{
            return {
                message:'Something'
            }
        }
    }

    // redirect to the homepage

    redirect("/");


}