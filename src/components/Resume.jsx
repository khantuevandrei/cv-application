export default function Resume(props) {
  return (
    <div>
      <h1>CV/resume</h1>

      <h2>General information</h2>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <p>{props.email}</p>
      <p>{props.phone}</p>

      <h2>Education</h2>
      <p>{props.schoolName}</p>
      <p>{props.studyTitle}</p>
      <p>{props.studyDate}</p>

      <h2>Experience</h2>
      <p>{props.companyName}</p>
      <p>{props.positionTitle}</p>
      <p>{props.responsibilities}</p>
      <p>{props.yearStart}</p>
      <p>{props.yearEnd}</p>
    </div>
  );
}
