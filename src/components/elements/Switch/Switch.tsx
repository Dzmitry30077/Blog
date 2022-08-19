import "./Switch.scss";

const Switch: React.FC = () => {
  return (
    <>
      <input className="switch-checkbox" id={`switch-new`} type="checkbox" />
      <label className="switch-label" htmlFor={`switch-new`}>
        <span className={`switch-button`} />
      </label>
    </>
  );
};

export default Switch;
