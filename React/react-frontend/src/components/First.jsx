import "../styles/First.css";
const First = () => {
  const styleObject = {
    backgroundColor: "green",
    color: "orange",
  };
  return (
    <>
      <h1 style={styleObject}>This is the first component</h1>
      <p className="para1">This component was created by Kushal Khadka</p>
    </>
  );
};

export default First;
