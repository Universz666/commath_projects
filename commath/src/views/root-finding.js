import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getRootFinding } from "../functions/function";
import Navbar from "./Components/Navbar";

function RootFinding() {
  const navigate = useNavigate();
  const [a, seta] = useState();
  const [b, setb] = useState();
  const [dx, setdx] = useState();
  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };


  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };

  return (
    <div>
      <Navbar/>
      <div className="text-center" style={{ marginTop: "5%" }}>
            <h2 style={{ marginTop: "20px", marginRight: "20px" }}>
              Root-finding
            </h2>
          </div>
          <div className="text-center">
            <p>การหาคำตอบของสมการ f(x)=0 หมายถึงการหาค่า x ที่จำทำให้สมการ f(x) มีค่าเป็นศูนย์ คำตอบของสมการเรียกอีกอย่างว่า root ซึ่งแต่ละฟังก์ชันอาจมี 0, 1, หรือ หลายคำตอบก็ได้</p>
          </div>
      <Row style={{ marginTop: "3%" }}>
        <Col sm="3"></Col>
        <Col sm="6">

          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>a:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a}
                    onChange={(e) => seta(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>b:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b}
                    onChange={(e) => setb(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>dx:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={dx}
                    onChange={(e) => setdx(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>Result : {result}</h4>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="success">
                  <div style={{ width: 300 }}>
                    <h3 style={{ marginTop: "10px" }}>Let's go !</h3>
                  </div>
                </Button>
              </Col>
              <Col sm="4">
                <Button onClick={back} color="secondary">
                  <div style={{ width: 100 }}>
                    <h3 style={{ marginTop: "10px" }}>Back</h3>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="3"></Col>
      </Row>
    </div>
  );
}
export default RootFinding;
