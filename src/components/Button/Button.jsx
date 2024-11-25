import "./style.css";

function Button({ onClick, buttonName, type = "button" }) {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {buttonName}
    </button>

    // function Button (){
    //     const isGetButton = true;
    //     return (
    //     <button className="main-button">{isGetButton ? 'Get' : 'Send'}</button>
  );
}

export default Button;
