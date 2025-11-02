export default function Resume(data) {
  return (
    <div>
      <h1>CV/resume</h1>
      <h2>General information</h2>
      <h3>
        {data.firstName} {data.lastName}
      </h3>
      <h3>{data.email}</h3>
      <h3>{data.phone}</h3>
    </div>
  );
}
