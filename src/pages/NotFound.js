import React from "react";
import {Col, Container, Row} from "reactstrap";

export default function NotFound(){
    return(
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="notFound d-flex justify-content-center align-content-center">
                            <img
                                src="https://pdp.uz/assets/images/404/WMF.svg"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
