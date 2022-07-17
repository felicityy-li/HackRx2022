export default function VaccineInfoBox(props) {
  const { age, info, link, arrOfLinks } = props;
  return (
    <div style={{ display: "flex" }}>
      <div>{arrOfLinks.map((link) => {
          return (
              <a href=''>{}</a>
          )
      })}</div>

      <div
        id={link}
        style={{
          backgroundColor: "#5299D3",
          fontWeight: "3",
          fontSize: "30",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Eligible Age</h3>
        <div>{age}</div>

        <h3>How it Helps</h3>
        <div>{info}</div>
      </div>
    </div>
  );
}
