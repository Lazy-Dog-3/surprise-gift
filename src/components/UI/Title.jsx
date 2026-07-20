import "./Title.css";

function Title({ children }) {
  return (
    <h1 className="scene-title">
      {children}
    </h1>
  );
}

export default Title;