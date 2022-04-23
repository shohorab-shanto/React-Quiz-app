import classes from "../styles/Form.module.css";

export default function ({children,className, ...rest}){
    return (
        <form className={`${className} ${classes.form}`} action="#" {...rest}>
            {children}
          </form>
    );
}