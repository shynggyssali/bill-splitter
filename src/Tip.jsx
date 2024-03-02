export default function Tip(props) {
  function handleTipChange(e) {
    props.setTip(Number(e.target.value));
  }
  return (
    <>
      <h1>Enter tip in percents:</h1>
      <input
        className="input"
        type="number"
        onChange={handleTipChange}
        placeholder="0%"
      />
    </>
  );
}
