import "./button.css";

const Button = (props) => {
  function handleClick() {
    props.setClicked(true);
    if (props.text === "Say hi") {
      props.setText("Say bye");
    } else {
      props.setText("Say hi");
    }
  }

  return (
    <div>
      <button className="button" onClick={handleClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
