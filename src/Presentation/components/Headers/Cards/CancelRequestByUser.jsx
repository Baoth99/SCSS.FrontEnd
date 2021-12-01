import React from 'react';
import { Card, CardBody, CardTitle, Row, Col} from "reactstrap";


const Cancelrequestbyuser = ({amount}) => {
    return (
        <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                <Row>
                    <div className="col">
                    <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0">
                        Yêu cầu hủy bởi người dùng
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">{amount} yêu cầu</span>
                    </div>
                    <Col className="col-auto">
                    <div className="icon icon-shape bg-red text-white rounded-circle shadow">
                        <i className="fas fa-money-check-alt"></i>
                    </div>
                    </Col>
                </Row>
                <p className="mt-0 mb-0 text-muted text-sm">
                    <span className="text-nowrap">* Số liệu được tính trong ngày</span>
                </p>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Cancelrequestbyuser;
