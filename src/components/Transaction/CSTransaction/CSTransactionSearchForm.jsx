import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    Col,
    Row,
    Button
  } from "reactstrap";
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { BsArrowClockwise, BsSearch, BsXCircle } from "react-icons/bs";


const CSTransactionSearchForm = () => {
    return (
        <Row className="mt-3">
            <div className="col">
                <AvForm>
                    <Card className="shadow">
                        <CardBody>
                            <h6 className="heading-small text-muted mb-4">
                                Giao Dịch Giữa Người Thu Mua - Người Bán
                            </h6>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Mã Giao Dịch
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Người Bán
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Người Bán
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Địa chỉ 
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="textarea"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Người Thu Gom
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="4">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Người Thu Gom
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="text"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Từ Ngày
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="date"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Đến Ngày
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="date"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Từ Giờ
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="time"
                                            />
                                        </AvGroup>
                                    </Col>
                                    <Col lg="3">
                                        <AvGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Đến Giờ
                                            </label>
                                            <AvInput
                                                className="form-control-alternative"
                                                name="name"
                                                type="time"
                                            />
                                        </AvGroup>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="pl-4">
                                <Row>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" block>
                                            <BsSearch/>
                                            &nbsp;
                                            Tìm Kiếm
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                block>
                                            <BsArrowClockwise/>
                                            &nbsp;
                                            Làm Mới
                                        </Button>
                                    </Col>
                                    <Col lg="3">
                                        <Button className="my-4" color="primary" 
                                                type="button" size="lg" 
                                                block>
                                            <BsXCircle/>
                                            &nbsp;
                                            Xóa
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                    </CardFooter>
                    </Card>
                </AvForm>
            </div>      
        </Row>
    );
}

export default CSTransactionSearchForm;
