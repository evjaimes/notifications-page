import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Notification from "../components/Notifications/Notification";

const NotificationsPannel = () => {
  const mockNotification = {
    name: "Hola",
    action: "react, follow, message, comment,join,left",
    target: {
      type: "group, post, message,picture",
      content: "name of group, post name, private message, image url",
    },
    readed: "true, false",
    date: "1m aja",
  };
  return (
    <Container fluid className="general-container">
      <Row>
        <Container fluid className="pannel-container">
          <Row>
            <Col>
              <Container fluid>
                <Row>
                  <Col lg={4} className="text-bold__title">
                    Notifications
                  </Col>
                  <Col lg={2} className="col-flex" style={{ marginLeft: "2%" }}>
                    <div className="number-container">3</div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="col-end">Mask as all read</Col>
          </Row>
          <Row>
            <Notification />
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default NotificationsPannel;
