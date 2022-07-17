import "../styles/profileIcon.css";

export default function ProfileIcon(props) {
  const { imageSrc, name, age } = props;

  return (
    <div>
      <a href>
        <img
          src={imageSrc}
          alt=""
          class="profileIconIMG"
          style={{ borderRadius: 400 / 2, height: "160px", width: "160px" }}
        />
        <div style={{ fontSize: 28 }}>{name}</div>
        <div style={{ fontSize: 20 }}>{age}</div>
      </a>
    </div>
  );
}
