import { Container } from "react-bootstrap"

export const Home = () => {
    return (
        <>
            <Container>
                <div className="d-flex justify-content-center" style={{columnGap:"20px"}}>
                    <a href="/bmi" className="btn btn-danger">BMI</a>
                    <a href="/stask" className="btn btn-danger">SECOND TASK</a>
                    <a href="/snapshot" className="btn btn-danger">Snapshot</a>
                </div>
            </Container>
        </>
    )
}