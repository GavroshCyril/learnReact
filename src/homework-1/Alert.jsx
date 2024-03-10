import "@fortawesome/fontawesome-free/css/all.min.css";

export const Alert = ({ type, message, icon }) => {
  return (
    <>
      <div className={`alert alert-${type}`}>
        <span className="alert-icon">{icon}</span>
        <span className="alert-message">{message}</span>
        <button className="close-btn">&times;</button>
      </div>
    </>
  );
};
