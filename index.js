const Notification = (props) => {
  const { className, lin, text } = props;
  return (
    <div className={`cont ${className}`}>
      <img className="img" src={`${lin}`} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="main">
    <h1 className="head">Notifications</h1>
    <div>
      <Notification
        className="info"
        lin="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="succ"
        lin="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="warn"
        lin="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="err"
        lin="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
