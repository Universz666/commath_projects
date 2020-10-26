import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import Navbar from "./Components/Navbar";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (

    <div>
      <Navbar/>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
      Computational Mathematics
      </h1>
      <h2 className="text-center" style={{ marginTop:"1%"}}>
        1144311
      </h2>
      <h4 className="text-left" style={{ marginLeft:"3%"}}>
      คำอธิบายรายวิชา
      </h4>
      <p className="text-left" style={{ marginLeft:"3%"}}>
      ระบบสมการเชิงเส้นและผลเฉลยเชิงตัวเลข เมทริกซ์ ดีเทอร์มิแนนต์ ผลเฉลยเชิงตัวเลขของสมการหนึ่งตัวแปร การแปลงเชิงเส้น การประมาณค่าในช่วงและนอกช่วง การหาอนุพันธ์และปริพันธ์เชิงตัวเลข <br></br>
      Systems of linear equations and numerical solutions; matrices; determinants; numerical solutions of equations in one variable; linear transformations; interpolation and extrapolation; numerical differentiation and integration; eigenvalues and eigenvectors
      </p>
      <h4 className="text-left" style={{ marginLeft:"3%"}}>
      แผนการประเมินผลการเรียนรู้
      </h4>
      
      <table className="text-center" style={{ marginLeft:"3%" }}>
        <tr>
          <th>ลำดับที่</th>
          <th>ผลการเรียนรู้</th>
          <th>วิธีการประเมิณผล</th>
          <th>สัปดาห์ที่ประเมิน</th>
          <th>สัดส่วนการประเมิน</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2.1,2.6,2.7,3.1,3.2,4.4,5.4</td>
          <td>การสอบทักษะ </td>
          <td>7,16</td>
          <td>25</td>
        </tr>
        <tr>
          <td>2</td>
          <td>1.1,1.2,1.3,1.4,2.1,2.6,2.7,3.2,4.4,5.1,5.4 </td>
          <td>การสังเกตพฤติกรรม</td>
          <td>1-16</td>
          <td>10</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2.1,2.6,3.2,4.4,5.4 </td>
          <td>การประเมินการบ้าน</td>
          <td>1-16</td>
          <td>35</td>
        </tr>
        <tr>
          <td>4</td>
          <td>2.1,2.6,3.2,4.4,5.4 </td>
          <td>การสอบปลายภาค</td>
          <td>17</td>
          <td>30</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>รวม</td>
          <td>100</td>
        </tr>
</table>
    </div>
  );
}

export default Main;
