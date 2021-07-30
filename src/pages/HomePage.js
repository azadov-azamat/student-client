import React from "react";
import NavbarJs from "../components/NavbarJs";
import {Container} from "reactstrap";
import StudentsList from "../components/StudentsList";

export default function HomePage(){
    return(
        <div className="Tab">
            <Container>
                <NavbarJs/>
                <div className="student">
                    <StudentsList/>
                </div>
            </Container>

        </div>
    )
}
