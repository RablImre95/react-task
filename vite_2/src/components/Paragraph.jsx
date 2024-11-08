function Paragraph({ index, string }) {
  return (
    <div className="paragraph">
      <h2>{index + 1}</h2>
      <p>{string}</p>
    </div>
  )
}

export default Paragraph

//"react/prop-types": 0 eslintbe!!!