import "./Wrapper.scss";

const Wrapper = ({ children }: any) => {
  return (
    <>
      <div className="wrapper">{children}</div>
    </>
  );
};

export default Wrapper;
