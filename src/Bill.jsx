export default function Bill(props) {
  function handleBillChange(e) {
    props.setBill(Number(e.target.value));
  }
  return (
    <>
      <h1>Enter total bill:</h1>
      <input
        className="input"
        type="number"
        onChange={handleBillChange}
        placeholder="$0"
      />
    </>
  );
}
