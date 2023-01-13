import { useState } from "react"
import "./css/style.css"
import { Shot } from "./shot"

const dataSet = ["mountain","mount","mountains","moun","beac","beach","best beaches","best mountains","food","foo","best dishes","birds","bird","birds images","best food"]

export const Snapshot = () => {
    const [val,setval] = useState(0)

    return (
        <>
            <div>
                <h1 className="fs-1">Snapshot</h1>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" onChange={(i)=>{ setval((dataSet.includes(i.target.value))?i.target.value:0) }}></input>
            </div>
            <div className="btn-taker">
                <input type="button" value="Mountains" className="btn btn-dark m-4"
                onClick={()=>{ setval(1) }}></input>
                <input type="button" value="Beach" className="btn btn-dark m-4" onClick={()=>{ setval(2) }}></input>
                <input type="button" value="Bird" className="btn btn-dark m-4" onClick={()=>{ setval(3) }}></input>
                <input type="button" value="Food" className="btn btn-dark m-4" onClick={()=>{ setval(4) }}></input>
            </div>
            {
                ((val === 1) ? <Shot val={"Mountains"} ch={"m"}/> : 
                (val === 2) ? <Shot val={"Beach"} ch={"b"}/> : 
                (val === 3) ? <Shot val={"Birds"} ch={"p"}/> :
                (val === 4) ? <Shot val={"Food"} ch={"f"}/> : 
                (val !== 0) ? <Shot val={val} ch={val[0]}/> : "")
            }
        </>
    )
}
