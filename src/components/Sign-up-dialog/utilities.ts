//IMPORTING OF MODULES
import zxcvbn from "zxcvbn";

//THIS FUNCTION'S JOB IS TO GET THE PASSWORD SCORE BASED ON THE RESUTLT OBTAINED AFTER EVALUATING THE PASSWORD AS THE USER TYPE ON THE PASSWORD INPUT FILED
export const getpasswordScore = (UserPassword: string) => {
  let score: string;
  let bars: number[] = [];
  let res = zxcvbn(UserPassword);
  if (UserPassword === "") {
    score = "";
  } else if (UserPassword.length < 8) {
    score = "too short";
  } else if (res.score < 2) {
    score = "weak";
    bars = [1];
  } else if (res.score === 2) {
    score = "okey";
    bars = [1, 2];
  } else if (res.score === 3) {
    score = "good";
    bars = [1, 2, 3];
  } else if (res.score === 4) {
    score = "strong";
    bars = [1, 2, 3, 4];
  } else {
    score = "";
  }
  return { score, bars };
};

//THIS FUNCTION CHECKES IF THE EMAIL FIELD ENTERED BY THE USER IS A VALID EMAIL
export const validateFormData = (email:string) => {
  //The regular expression below will match a standard email address : user@domain.extension (coyote@acme.com)
  let emailRegEx = /^[^@&)(:;/?,][a-z0-9_%-.]+@{1}\w+\.[a-z0-9_%-.]+[^@&)(:;/?,.]$/i;
  let error;
  let trimedEmail = email.trim();
  if (!emailRegEx.test(trimedEmail)) {
    error = "Valid email is required";
  }
  return error;
};
