import "./strength-meter.scss";
import { getpasswordScore } from "../utilities";
import BarList from "./BarList";

interface strengthMeterProps {
  formValues: {
    lastName: string;
    firstName: string;
    email: string;
    password: string;
  };
}

function StrengthMeter(props: strengthMeterProps) {
  const { password } = props.formValues;
  return (
    <div className="strength-meter">
      <div className={`bars ${password.length && "show"}`}>
        <BarList bars={[1, 2, 3, 4]} />
        <div style={{ display: "flex", position: "absolute" }}>
          {" "}
          {getpasswordScore(password).bars.map((bar) => (
            <div
              key={bar}
              className={`bar ${getpasswordScore(password).score}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="password-score">
        <span>{getpasswordScore(password).score}</span>
      </div>
    </div>
  );
}
// <BarList  bars={getpasswordScore(formValues).bars} />

export default StrengthMeter;
//sign-up-dialog-typscript
