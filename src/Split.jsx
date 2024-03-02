export default function Split(props) {
  function add() {
    if (props.split >= 2) {
      props.setSplit((s) => s + 1);
    }
  }
  function sub() {
    if (props.split > 2) {
      props.setSplit((s) => s - 1);
    }
  }
  return (
    <>
      <h1>Choose split:</h1>
      <div className="split-container">
        <button className="sub-btn" onClick={sub}>
          -
        </button>
        <h1 className="split-h1">{props.split}</h1>
        <button className="add-btn" onClick={add}>
          +
        </button>
      </div>
    </>
  );
}
