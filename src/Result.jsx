export default function Result(props) {
  return (
    <>
      <h1>{`Total per person: $${props.result}`}</h1>
      <h2>{`Split between ${props.split} people with ${props.tip}% tip.`}</h2>
    </>
  );
}
