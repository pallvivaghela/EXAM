import axios from "axios"
import { useState } from "react"
import { Container } from "react-bootstrap"
import "./css/style.css"

export const API = () => {
    const [val,setval] = useState(["","",""])

    const handleClick = () => {
        const regex = /[a-z]+[0-9]+@[a-z]+\.[a-z]/i

        if(val[0]==="" || val[1]==="" || val[2]==="") {
            alert("All fields compulsory..!")
            return
        } else if(regex.test(val[1]) === false) {
            alert("Enter Valid Email..!")
            return
        } else if(val[2].length !== 10) {
            alert("Contact must be 10 digits..!")
            return
        }

        const fdata = new FormData()
        fdata.append("name",val[0])
        fdata.append("email",val[1])
        fdata.append("contact",val[2])

        axios.post("https://omcdmiweb.000webhostapp.com/exam.php",fdata)
            .then(function () {
                alert("Inserted Successfully..!")
                window.location.reload()
            })
            .catch(function (error) {
                alert("System Hacked..!")
            })
    }

    return (
        <>
            <div>
                <Container>
                    <table border="2" className="mx-auto">
                        <tr>
                            <td>
                                <h1>Name</h1>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Name :-" onChange={(i)=>{ let arr = val;arr[0]=i.target.value;setval([...arr]) }}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Email</h1>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Email :-" onChange={(i)=>{ let arr = val;arr[1]=i.target.value;setval([...arr]) }}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Contact</h1>
                            </td>
                            <td>
                                <input type="text" placeholder="Enter Contact :-" maxLength="10" onChange={(i)=>{ let arr = val;arr[2]=i.target.value;setval([...arr]) }}></input>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" value="Submit" onClick={handleClick}></input>
                            </td>
                        </tr>
                    </table>
                </Container>
            </div>
        </>
    )
}