import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";

import {useParams} from "react-router-dom";
import Gender from '../../components/Commons/Gender';
import Role from '../../components/Commons/Role';
import UserStatus from '../../components/Users/UserStatus';
import UserStatusButton from '../../components/Users/UserStatusButton';


const UserDetail = () => {
    console.log("UserDetail");
    let { id } = useParams();
    console.log(id);
    return (
        <>
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                    <Card className="card-profile shadow">
                    <Row className="justify-content-center">
                        <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                                alt="..."
                                className="rounded-circle"
                                src={ 
                                    require("../../assets/img/theme/team-4-800x800.jpg").default
                                }
                            />
                            </a>
                        </div>
                        </Col>
                    </Row>
                    <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        <div className="d-flex justify-content-between"></div>
                    </CardHeader>
                    <CardBody className="pt-0 pt-md-4">
                        <Row>
                        <div className="col">
                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">                     
                            </div>
                        </div>
                        </Row>
                        <div className="text-center">
                        <h2>
                            Demo User
                        </h2>
                        <div className="h5 mt-1">
                            <div className="d-inline-flex p-2">
                                <UserStatus status={1}/>                               
                            </div>
                        </div>
                        <div className="h5 mt-1">
                            <div className="d-inline-flex p-2">
                                <Role role={2}/>                               
                            </div>
                        </div>
                        <div>
                            <i className="ni education_hat mr-2" />
                            Scrap Collecting Suport System
                        </div>
                        <hr className="my-4" />
                            <UserStatusButton id={id} status={1}/>
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                <Col className="order-xl-1" xl="8">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="9">
                                    <h3 className="mb-0">Th??ng Tin Chi Ti???t T??i kho???n </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    H??? V?? T??n
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={id}
                                                    id="input-username"
                                                    placeholder="Username"
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="3">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Sinh Nh???t
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={"20/07/1999"}
                                                    id="input-username"
                                                    placeholder="S??? ??i???n Tho???i"
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="3">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Gi???i T??nh
                                                </label>
                                                <div className="form-control-alternative disabled"
                                                    style={{paddingTop: 10, paddingBottom: 10, borderRadius: 5, backgroundColor: "#eee"}}
                                                >
                                                    <Gender gender={1}/>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col lg="9">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    ?????a Ch???
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={"???????ng 160, Ph?????ng T??ng Nh??n Ph??, QU???n 9"}
                                                    id="input-username"
                                                    placeholder="?????a ch???"
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="5">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    ?????a Ch??? Email
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={"BaothSE130731@fpt.edu.vn"}
                                                    id="input-username"
                                                    placeholder="?????a ch???"
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="5">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    S??? ??i???n Tho???i
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={"0939872902"}
                                                    id="input-username"
                                                    placeholder="?????a ch???"
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="5">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    S??? Ch???ng Minh Nh??n D??n
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={"0939872902"}
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col lg="5">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                >
                                                    Ng??y B???t ?????u
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={"20/08/2020"}
                                                    disabled={true}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>              
                </Row>
            </Container>
        </>
    );
}

export default UserDetail;
