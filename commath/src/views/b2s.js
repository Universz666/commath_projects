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
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";


function B2s() {
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState();
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/");
  };

  return (
    <div class="body">
      <Navbar/>
      <div className="text-center" style={{ marginTop: "10%" }}>
            <h1 style={{ marginTop: "20px", marginRight: "20px" }}>
              Basic Computing
            </h1>
            <h4 style={{ marginTop: "20px", marginRight: "20px" }}>
              แปลงเลขฐาน 2 ให้เป็นเลขทั่วไป
            </h4>
          </div>
          <div className="text-center">
            <p>กรอกเลขฐาน 2 ที่ต้องการแปลง</p>
          </div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="2"></Col>
        <Col sm="8">
          <div>
            <Row>
              <Col sm="2"></Col>
              <Col sm="8">
                <Card style={{ alignItems: "center" }}>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 500,
                    }}
                    value={bit2string}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    placeholder="Ex. 10111011"
                    onChange={(e) => setBit2string(e.target.value)}
                  />
                  <h4 >Result : {result}</h4>
                  <Row style={{ marginBottom: "30px" }}>
                    <Col sm="8">
                      <Button onClick={generate} color="success">
                        <div style={{ width: 300 }}>
                          <h3 style={{ marginTop: "10px" }}>Convert</h3>
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
              <Col sm="2"></Col>
            </Row>
          </div>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </div>
  );
}

export default B2s;
