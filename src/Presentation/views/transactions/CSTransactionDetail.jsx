import React from 'react';
import {Card, CardHeader, CardBody, Container, Row, Col, Input, FormGroup, CardFooter, Button} from "reactstrap";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';


const CSTransactionDetail = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    return (
        <Container className="mt--7" fluid>
            <Row className="mt-5">
                <div className="col">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row>
                                <Col xs="9">
                                    <h3 className="mb-0">
                                        Thông Tin Chi Tiết Giao Dịch Giữ Người Thu Mua Và Người Bán
                                    </h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Mã Giao Dịch : 
                                            </label>
                                            <h4 className="mb-0">BC1707202111230003</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Thời Điểm Giao Dịch : 
                                            </label>
                                            <h4 className="mb-0">23/07/2021 12:34:56</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Địa Chỉ Giao Dịch : 
                                            </label>
                                            <h4 className="mb-0">Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh </h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Người Bán : 
                                            </label>
                                            <h4 className="mb-0">Huỳnh Văn Bánh</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Người Bán : 
                                            </label>
                                            <h4 className="mb-0">0943789321</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Tên Người Thu Mua : 
                                            </label>
                                            <h4 className="mb-0">Lê Thị A</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Số Điện Thoại Người Thu Mua : 
                                            </label>
                                            <h4 className="mb-0">0943784321</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Thời Điểm Đặt Lịch : 
                                            </label>
                                            <h4 className="mb-0">23/07/2021 12:34:56</h4>
                                        </FormGroup>
                                    </Col>  
                                    <Col lg="3">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                                htmlFor="input-username"
                                            >
                                                Điểm thưởng : 
                                            </label>
                                            <h4 className="mb-0">19</h4>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6"></Col>
                                    <Col lg="8">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-username"
                                        >
                                               Bảng Thông Tin Chi Tiết Từng Thành Phần: 
                                        </label>
                                        <table className="table table-hover" style={{marginTop: '20px'}}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Loại Phế Liệu Giao Dịch</th>
                                                    <th scope="col">Số Lượng</th>
                                                    <th scope="col">Tổng Tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sắt</td>
                                                    <td>5kg</td>
                                                    <td>120.000 VND</td>
                                                </tr>
                                                <tr>
                                                    <td>Sắt</td>
                                                    <td>5kg</td>
                                                    <td>120.000 VND</td>
                                                </tr>
                                                <tr>
                                                    <td>Sắt</td>
                                                    <td>5kg</td>
                                                    <td>120.000 VND</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <label
                                                            className="form-control-label"
                                                        >
                                                            Tổng Tiền : 
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <h4>340.000 VND</h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default CSTransactionDetail;
