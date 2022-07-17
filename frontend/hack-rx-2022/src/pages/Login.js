import "../styles/authentication.css";
import give_care_logo from "../pictures/give_care_logo.png";

export default function LoginPage() {
  return (
    <div className="spiltScreen">
      <div className="imgLeftSide">
        <img src={give_care_logo} alt="" />
      </div>

      <div className="textRightSide">
        <div className="title">Login</div>
        <form marginBottom="10px">
          <label className="inputSection">
            <input type="text" placeholder="Username/Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
          </label>
        </form>

        <div className="linksSection">
          <a class="signUpLink" href="/signUp">
            Don’t have an account?
          </a>
          <a class="forgotPasswordLink" href="/">
            Forget your password?
          </a>
        </div>

        <a href="/">
          <button className="buttonAuth">Login</button>
        </a>
      </div>
    </div>
  );
}
