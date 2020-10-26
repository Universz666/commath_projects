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
import { getInterpolation } from "../functions/function";
import Navbar from "./Components/Navbar";

function Interpolation() {
  const navigate = useNavigate();
  const [x, setx] = useState();
  const [xi1, setxi1] = useState();
  const [xi2, setxi2] = useState();
  const [xi3, setxi3] = useState();
  const [xi4, setxi4] = useState();
  const [xi5, setxi5] = useState();
  const [xi6, setxi6] = useState();
  const [yi1, setyi1] = useState();
  const [yi2, setyi2] = useState();
  const [yi3, setyi3] = useState();
  const [yi4, setyi4] = useState();
  const [yi5, setyi5] = useState();
  const [yi6, setyi6] = useState();

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      x:x,
      xi:[xi1,xi2,xi3,xi4,xi5,xi6],
      yi:[yi1,yi2,yi3,yi4,yi5,yi6]
      
    };
    getInterpolation(data).then((res) => {
        setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`)
    });
  };

  return (
    <div>
      <Navbar/>
      <div className="text-center" style={{ marginTop: "5%" }}>
           <h2 style={{ marginTop: "20px", marginRight: "20px" }}>Interpolation & Curve fitting</h2>
        </div>
        <div className="text-center">
           <h4>Newton's Method </h4>
           <p>xi, yi เป็นอนุกรมของคู่ลำดับ</p>
           <p>t เป็นเวลาตามแนวนอนหรือแกน x</p>
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
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>t:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={x}
                    onChange={(e) => setx(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                    xi:
                  </h3>

                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi1}
                    onChange={(e) => setxi1(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi2}
                    onChange={(e) => setxi2(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi3}
                    onChange={(e) => setxi3(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi4}
                    onChange={(e) => setxi4(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi5}
                    onChange={(e) => setxi5(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi6}
                    onChange={(e) => setxi6(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    // onChange={(e) => setxi6(e.target.value)}
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                    yi:
                  </h3>

                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi1}
                    onChange={(e) => setyi1(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi2}
                    onChange={(e) => setyi2(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi3}
                    onChange={(e) => setyi3(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi4}
                    onChange={(e) => setyi4(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi5}
                    onChange={(e) => setyi5(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi6}
                    onChange={(e) => setyi6(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    // onChange={(e) => setxi6(e.target.value)}
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

export default Interpolation;
