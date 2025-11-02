export default function Input({id, labelName, type, value}) {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input id={id} type={type} value={value} />
    </>
    
  )
}