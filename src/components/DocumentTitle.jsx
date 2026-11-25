import useDocumentTitle from "../Hook/useDocumentTitle";
import { useState } from "react";
export default function DocumentTitle(){
    const [title,setTitle]=useState("My React App")
    useDocumentTitle(title)
    return(<div>
        <h2>{title}</h2>
        <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
    </div>)

}