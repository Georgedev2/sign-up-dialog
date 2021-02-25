import './strength-meter.scss';
import { getPasswordScore } from '../utilities';
import { useMemo } from 'react';

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

  let passwordResult = useMemo(() => {
    return getPasswordScore(password);
  }, [password]);

  return (
    <div className={`passw-strength ${password.length && 'show'}`}>
      <div>
        <div className={`password-strength_bars`}>
          {passwordResult.bars.map((bar) => (
            <div key={bar} className={`bar ${passwordResult.score}`}></div>
          ))}
        </div>
      </div>

      {/* Password Score */}
      <div className='password-strength_score'>
        <span>{passwordResult.score}</span>
      </div>
    </div>
  );
}

export default StrengthMeter;
//sign-up-dialog-typscript
