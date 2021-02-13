import "./sign-up-dialog.scss";
import StrengthMeter from "./strength-meter/StrengthMeter";
import useSignUpDialog from "./useSignUpDialog";
import googleIcon from "../assets/google-icon.png";
import SignUpSuccess from "../sign-up-success/SignUpSuccess";

function SignUpDialog() {
  //Destructuring of the object return by useSignUpDialog custom hooks.
  const {
    formValues,
    emailError,
    isSucces,
    handleChange,
    handleSubmit,
    displaySuccessPage,
  } = useSignUpDialog();

  //Destructuring the formValues object.
  const { lastName, firstName, email } = formValues;

  // If the variable isSucces  <SignUpSuccess /> renders else the sign-up-dialog box renders
  return (
    <div>
      {isSucces ? (
        <SignUpSuccess />
      ) : (
        <div className="sign-up-dialog">
          <div className="sign-up-dialog_title">
            <span>Sign Up</span>
          </div>

          <div className="sign-up-option" onClick={displaySuccessPage}>
            <div className="logo">
              <img src={googleIcon} alt="google icon" />
            </div>
            <div className="text">Sign Up with Google</div>
          </div>

          <div className="choose">
            <span className="choose_line"></span>
            <span className="text">Or sign up with email</span>
            <span className="choose_line"></span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-box name-m">
              <label>Name</label>
              <input
                type="text"
                className="firstname"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                placeholder="First"
              />
              <input
                type="text"
                className="lastname"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                placeholder="Last"
              />
            </div>
            <div className="form-box email-m">
              <label>Email</label>
              <input
                className="email"
                type="text"
                name="email"
                placeholder="Your Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="email-error">
              {emailError && "Valid email is required"}
            </div>

            <div className="form-box pass-m">
              <label>Password</label>
              <input
                type="password"
                className="password"
                name="password"
                placeholder="Choose password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <div className="strength-meter-margin">
              <StrengthMeter formValues={formValues} />
            </div>

            <div className="form-box submit-m">
              <button
                className={`submit-btn ${
                  lastName &&
                  firstName &&
                  email &&
                  /*  formValues.password && */
                  formValues.password.length > 8 &&
                  "isActive"
                }`}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUpDialog;
