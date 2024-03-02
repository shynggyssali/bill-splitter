export default function Button(props) {
  function calculate() {
    if (props.bill !== 0) {
      const temp = (props.bill + props.bill * (props.tip / 100)) / props.split;
      props.setResult(temp);
    }
  }
  return (
    <>
      <button className="calc-btn" onClick={calculate}>
        CALCULATE
      </button>
    </>
  );
}
