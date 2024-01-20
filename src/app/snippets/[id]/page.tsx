import {db} from "@/db";
import Link from "next/link";
import {notFound} from "next/navigation";
import * as actions from "@/actions";

interface snippetShowPageProps{
    params:{
        id:string

    }
}

export default async function snippetShowPage(props:snippetShowPageProps) {

    const snippet = await db.snippet.findFirst({
        where:{id:parseInt(props.params.id)}
    })

    if(!snippet){
        return notFound();
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null,snippet.id);    

console.log(props);
  return (
    <div>
        <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex ">
        <Link className="p-2 border rounded" href={`/snippets/${snippet.id}/edit`}>Edit</Link>
        <form action={deleteSnippetAction}>
        <button className="p-2 border rounded">Delete</button>
        </form>
        
        </div>
        </div>

        <pre className="p-3 border rounded bg-gray-200">
            <code>
                {snippet.code}
            </code>
        </pre>
       
      
    </div>
  )
}
