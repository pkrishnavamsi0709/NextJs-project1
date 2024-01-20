import {db} from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippets-edit-form';

interface SnippetEditPageProps{
    params:{
        id:string
    }
}
export default async function EditSnippet(props:SnippetEditPageProps) {

    const id = parseInt(props.params.id);

    const snippet = await db.snippet.findFirst({
        where:{
            id
        }
    })

    if(!snippet){
        return notFound();
    }

  return (
    <div>
      <div>
        <SnippetEditForm snippet={snippet}/>
      </div>
    </div>
  )
}
