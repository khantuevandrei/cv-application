import "./App.css";
import Input from "./components/Input";
import Fieldset from "./components/Fieldset";
import Resume from "./components/Resume";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    studyTitle: "",
    studyDate: "",
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    yearStart: "",
    yearEnd: "",
  });

  function clearData() {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      schoolName: "",
      studyTitle: "",
      studyDate: "",
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      yearStart: "",
      yearEnd: "",
    });
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setData((data) => ({ ...data, [id]: value }));
  }

  const [submittedData, setSubmittedData] = useState({});

  function clearSubmittedData() {
    setSubmittedData({});
  }

  return (
    <>
      <form>
        <Fieldset legend={"General"} disabled={isActive}>
          <Input
            onChange={handleInputChange}
            id="firstName"
            labelName="First name: "
            type="text"
            value={data.firstName}
          />
          <Input
            onChange={handleInputChange}
            id="lastName"
            labelName="Last name: "
            type="text"
            value={data.lastName}
          />
          <Input
            onChange={handleInputChange}
            id="email"
            labelName="Email: "
            type="email"
            value={data.email}
          />
          <Input
            onChange={handleInputChange}
            id="phone"
            labelName="Phone: "
            type="tel"
            value={data.phone}
          />
        </Fieldset>
        <Fieldset legend={"Education"} disabled={isActive}>
          <Input
            onChange={handleInputChange}
            id="schoolName"
            labelName="School name: "
            type="text"
            value={data.schoolName}
          />
          <Input
            onChange={handleInputChange}
            id="studyTitle"
            labelName="Study title: "
            type="text"
            value={data.studyTitle}
          />
          <Input
            onChange={handleInputChange}
            id="studyDate"
            labelName="Date of study: "
            type="num"
            value={data.studyDate}
          />
        </Fieldset>
        <Fieldset legend={"Experience"} disabled={isActive}>
          <Input
            onChange={handleInputChange}
            id="companyName"
            labelName="Company name: "
            type="text"
            value={data.companyName}
          />
          <Input
            onChange={handleInputChange}
            id="positionTitle"
            labelName="Position title: "
            type="text"
            value={data.positionTitle}
          />
          <Input
            onChange={handleInputChange}
            id="responsibilities"
            labelName="Resposibilities: "
            type="text"
            value={data.responsibilities}
          />
          <Input
            onChange={handleInputChange}
            id="yearStart"
            labelName="From: "
            type="num"
            value={data.yearStart}
          />
          <Input
            onChange={handleInputChange}
            id="yearEnd"
            labelName="To: "
            type="num"
            value={data.yearEnd}
          />
        </Fieldset>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSubmittedData(data);
            clearData();
            handleActive();
          }}
          disabled={isActive}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setData(submittedData);
            clearSubmittedData();
            handleActive();
          }}
          disabled={!isActive}
        >
          Edit
        </button>
      </form>

      {isActive && <Resume {...submittedData} />}
    </>
  );
}
