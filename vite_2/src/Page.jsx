import Paragraph from "./Paragraph"

function Page({ data }) {
  return (
    <div className="page">
      {data.map((paragraph, index) => (
        <Paragraph key={index} index={index} string={paragraph} />
      ))}
    </div>
  );
}

export default Page