import "../styles/Resume.css";

export default function Resume(props) {
  return (
    <div id="resume">
      <h1>CV/resume</h1>
      <h2>General information</h2>
      <h3>Full name:</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <br />
      <h3>Email:</h3>
      <p>{props.email}</p>
      <br />
      <h3>Phone number:</h3>
      <p>{props.phone}</p>

      <h2>Education</h2>
      <h3>School name:</h3>
      <p>{props.schoolName}</p>
      <br />
      <h3>Title of study:</h3>
      <p>{props.studyTitle}</p>
      <br />
      <h3>Date of study:</h3>
      <p>{props.studyDate}</p>

      <h2>Experience</h2>
      <h3>Company name:</h3>
      <p>{props.companyName}</p>
      <br />
      <h3>Position title:</h3>
      <p>{props.positionTitle}</p>
      <br />
      <h3>Responsibilities:</h3>
      <p>{props.responsibilities}</p>
      <br />
      <h3>From:</h3>
      <p>{props.yearStart}</p>
      <br />
      <h3>To:</h3>
      <p>{props.yearEnd}</p>
    </div>
  );
}
