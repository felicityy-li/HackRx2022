import "../styles/authentication.css";
import '../styles/contactCaregiver.css'

export default function ContactCaregiversPage() {
  return (
    <div className="spiltScreen">
      <div className="textRightSide">

          <div></div>
        <div className="title">Contact A Caregiver</div>

        <div className="emailTextTitle">Email</div>

        <form marginBottom="10px">
          <label className="inputSection">
            <input type="text" placeholder="Username/Email" className="input" />
          </label>
        </form>

        <a href="/">
          <button className="buttonAuth">Connect</button>
        </a>
      </div>
    </div>
  );
}
