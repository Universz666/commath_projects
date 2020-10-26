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
import { getIntegration } from "../functions/function";
import Navbar from "./Components/Navbar";

function Integration() {
  const navigate = useNavigate();

  const [result, setresult] = useState();
  const [a, seta] = useState();
  const [b, setb] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <div>
      <Navbar/>
      <div className="text-center" style={{ marginTop: "5%" }}>
            <h1 style={{ marginTop: "20px", marginRight: "20px" }}>
              Integration
            </h1>
          </div>
          <div className="text-center">
            <p>คำนวณค่า ∫baf(x)dx เมื่อกำหนดฟังก์ชัน f(x) มาให้</p>
            <p>คำนวณหาพื้นที่ใต้กราฟ f(x) จากในช่วง x∈[a,b] โดยปกติแล้วจะใช้วิธีประมาณค่าโดยการแบ่งพื้นที่ออกเป็นช่วงๆ แต่ละช่วงจะเป็นสี่เหลี่ยมแล้วรวมพื้นที่สี่เหลี่ยมเหล่านั้นมาประมาณค่าพื้นที่ใต้กราฟหรือค่า ∫baf(x)dx นั่นเอง</p>
          </div>
      <Row style={{ marginTop: "3%" }}>
        <Col sm="4"></Col>
        <Col sm="4">

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

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Integration