import useWindowSize from "../Hook/useWindowSize";
export default function WindowSizeExample(){
   const size= useWindowSize()
    return(<div>
        <h1>width:  {size.width}</h1>
        <h1>height:  {size.height}</h1>
    </div>)

}