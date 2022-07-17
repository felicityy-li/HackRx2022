import "../styles/authentication.css";
import give_care_logo from "../pictures/give_care_logo.png";

export default function SignUpPage() {
  return (
    <div className="spiltScreen">
      <div className="imgLeftSide">
        <img src={give_care_logo} alt="" className="brandIMG" />
      </div>

      <div className="textRightSide">
        <div className="title">Sign Up</div>
        <form marginBottom="10px">
          <label className="inputSection">
            <input type="text" placeholder="Username" className="input" />
            <input type="text" placeholder="Email" className="input" />
            <input type="text" placeholder="Phone Number" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
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
