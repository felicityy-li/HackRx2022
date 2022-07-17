import "../styles/authentication.css";
import plusSignButton from "../pictures/plusSignButton.png";

export default function AddProfilePage() {
  return (
    <div className="spiltScreen" >
      <div className="imgLeftSide" style={{ margin: "200px", marginRight: '200px' }}>
        <img src={plusSignButton} alt="" style={{ height: "250px" }} />
        <p>Insert A Picture</p>
      </div>

      <div className="textRightSide">
        <div className="title">Add a Profile</div>
        <form marginBottom="10px">
          <label className="inputSection">
            <p
              style={{
                marginBottom: "-30px",
                fontSize: "23px",
                marginTop: "70px",
                textAlign: "left",
              }}
            >
              First Name
            </p>
            <input type="text" placeholder="e.g. Jane" className="input" />

            <p
              style={{
                marginBottom: "-30px",
                fontSize: "23px",
                marginTop: "50px",
                textAlign: "left",
              }}
            >
              Last Name
            </p>
            <input type="text" placeholder="e.g., Doe" className="input" />

            <p
              style={{
                marginBottom: "-30px",
                marginTop: "50px",
                textAlign: "left",
                fontSize: "23px",
              }}
            >
              Healthcard Number
            </p>
            <input
              type="text"
              placeholder="e.g., 123 456 789"
              className="input"
            />
          </label>
        </form>

        <a href="/dummy_profile">
          <button
            style={{
              marginTop: "50px",
              fontSize: "26px",
              borderRadius: "20px",
              backgroundColor: "#5299D3" /* blue */,
              borderColor: "#5299D3",
              color: "white",
              textAlign: "center",
              padding: "10px",
              paddingRight: "160px",
              paddingLeft: "160px",
            }}
          >
            Create Profile
          </button>
        </a>
      </div>
    </div>
  );
}
