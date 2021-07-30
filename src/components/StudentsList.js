import React, {useEffect, useState} from "react";
import {Button, Col, Modal, ModalBody, Row} from "reactstrap";
import axios from "axios";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {toast} from "react-toastify";
import Loader from "react-loader-spinner";


let headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json"
}


export default function StudentsList() {

    const url = "https://student-azamat-app.herokuapp.com/student"

    useEffect(() => {
        StudentsList();
    },[]);

    const [students, setStudents] = useState([])
    const [currentStudent, setCurrentStudent] = useState('')
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    function openModal() {
        setModal(true)
    }
    function closeModal() {
        setModal(false)
        setCurrentStudent('')
    }

    function currentStudents(value) {
        setCurrentStudent(value)
        openModal();
        console.log(value);
    }


    function StudentsList() {
        setLoading(true)
        axios({
            url: url + "/getAllStudents",
            method: "GET",
            header: headers
        }).then(res => {
            setStudents(res.data)
            console.log(res);
            setLoading(false)
        }).catch(err => {
            setLoading(false);
            console.log(err);
            toast.dark("😂 Server ishlamayabdi")
        })
    }

    function saveStudent(e, v) {
        const student = {
            id: currentStudent ? currentStudent.id : null,
            firstName: v.firstName,
            lastName: v.lastName,
            address: v.address
        }
        axios({
            url:  url + "/saveStudent",
            method: "POST",
            data: student,
            header: headers
        }).then(res => {
            StudentsList();
            toast.success(currentStudent ? "Edited " + student.firstName + '  👍' : '🥳 ' + res.data.message)
        }).catch(err => {
            toast.error("😑 Tizimda xatolik")
        })
        closeModal();
    }

    function deleteStudent(value) {
        console.log(value)
        closeModal();
        axios({
            url:  url + "/deleteStudent/" + value,
            method: "DELETE",
            header: headers
        }).then(res => {
            StudentsList();
            toast.dark('😕 ' + res.data.message)
        }).catch(err => {
            toast.error("😑 Tizimda xatolik")
        })
    }

    return (
        <>
            <Row>
                <Col md={6}>
                    <div className="">
                        <div className="list-student ">
                            <table className="table table-hover mt-3">
                                {loading === false ? (
                                    <>
                                        <thead className="navStudent">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Ismi</th>
                                            <th scope="col">Familyasi</th>
                                            <th scope="col">O`chirish</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {students.map((value, index) =>
                                            <tr>
                                                <td onClick={() => currentStudents(value)}>{index + 1}</td>
                                                <td onClick={() => currentStudents(value)}>{value.firstName}</td>
                                                <td onClick={() => currentStudents(value)}>{value.lastName}</td>
                                                <td>
                                                    <Button color="link nav-link " onClick={() => deleteStudent(value.id)}
                                                            className="text-danger">Delete</Button>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </>
                                ): (
                                        <div className="d-flex justify-content-center mt-5 align-items-center">
                                            <Loader
                                                type="ThreeDots"
                                                color="rgba(9,166,0,0.98)"
                                                height={80}
                                                width={80}
                                                timeout={3000}
                                            />
                                        </div>
                                    )
                                }
                            </table>

                        </div>
                        <div className="btnStudent d-flex justify-content-end position-fixed ">
                            <Button color="link nav-link" className="float-end" onClick={openModal}>Add Student</Button>
                        </div>
                    </div>
                </Col>
                <Modal isOpen={modal}>
                    <ModalBody className="">
                        <AvForm onValidSubmit={saveStudent}>
                            <AvField
                                label='Name'
                                name='firstName'
                                placeholder='Ex: Ivan'
                                defaultValue={currentStudent.firstName}
                                validate={{
                                    required: {value: true, errorMessage: "Iltimos ismni kiriting"}
                                }}

                            />
                            <AvField
                                label='last name'
                                name='lastName'
                                defaultValue={currentStudent.lastName}
                                placeholder="Ex: Ivanov"
                                validate={{
                                    required: {value: true, errorMessage: "Iltimos familyani kiriting"}
                                }}

                            />
                            <AvField
                                label='Address'
                                name='address'
                                defaultValue={currentStudent.address}
                                placeholder="Ex: 55 dom, 2 kv, Cilonzor tumani, Toshkent shaxri, O`zbekiston"
                                validate={{
                                    required: {value: true, errorMessage: "Iltimos addressni kiriting"}
                                }}

                            />
                            <div className="btnStudent d-flex justify-content-between">
                                <Button color="link" className="nav-link">{currentStudent ? "Edited" : "Added"}</Button>
                                <Button color="link" style={{color: 'red'}} className="nav-link "
                                        onClick={closeModal}>Close</Button>
                            </div>
                        </AvForm>
                    </ModalBody>
                </Modal>
            </Row>
        </>
    )
}
