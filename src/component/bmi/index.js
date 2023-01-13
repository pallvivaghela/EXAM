import { useState } from "react"
import { Container } from "react-bootstrap"

export const BMI = () => {
    const [val,setval] = useState([])

    const handleBMI = () => {
        const w = val[0]
        let h = val[1]

        let arr = val

        arr[2]=(((w)/(h*h))*10000).toPrecision(3)

        arr[3] = ((arr[2] < 18.5) ? "Underweight" :
                  (arr[2] >= 18.5 && arr[2] < 24.9) ? "Healthy Weight" :
                  (arr[2] >= 25 && arr[2] < 29.9) ? "Overweight" : 
                  (arr[2] >= 30) ? "Obese" : "")

        setval([...arr])
    }

    return (
        <div>
            <Container>
                <div>
                    <input type="text" placeholder="Weight :-" onChange={(i)=>{ let arr = val;arr[0]=i.target.value;setval([...arr]) }}></input>
                </div>
                <div>
                    <input type="text" placeholder="Height :-" onChange={(i)=>{ let arr = val;arr[1]=i.target.value;setval([...arr]) }}></input>
                </div>
                <div>
                    <input type="button" value="Calculate BMI" onClick={handleBMI}></input>
                </div>
                <div>
                    <input type="text" value={val[2]} readOnly></input>
                </div>
                <div>
                    <input type="text" value={val[3]} readOnly></input>
                </div>
            </Container>
        </div>
    )
}