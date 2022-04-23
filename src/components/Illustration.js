import classes from "../styles/Illustration.module.css";
import SignupImage from "../assets/images/signup.svg";
  
export default function Illustration(){
    return (
        <div className={classes.illustration}>
            <img src={SignupImage} alt="Signup" />
          </div>
    );
}