'use client'
import { useFormState } from "react-dom";
import * as actions from '@/actions';


export const dynamic = 'force-dynamic';

export default function snippetCreatePage() {

    
    const [formState,action] = useFormState(actions.createSnippet,{message:''});
  return (
    <form action={action}>
        <h3 className="font-bold m-3">
                Create Snippet
        </h3>

        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">
                    Title
                </label>
                <input name="title" className="border rounded p-2 w-full" id="title"></input>
            </div>

            <div className="flex gap-4">
                <label className="w-12" htmlFor="code">
                    Code
                </label>
                <textarea name="code" className="border rounded p-2 w-full" id="code"></textarea>
            </div>
            {
                formState.message ? <div className="my-2 p-2 bg-violet-200 border rounded border-violet-300">
                {formState.message}
            </div>:null
            }

            

            <button type="submit" className="rounded p-2 bg-blue-200">
                Create
            </button>
        </div>
    </form>
  )
}
