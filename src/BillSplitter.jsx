import { useState } from "react";
import Result from "./Result";
import Bill from "./Bill";
import Split from "./Split";
import Tip from "./Tip";
import Button from "./Button";

export default function BillSplitter() {
  const [result, setResult] = useState(0);
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [split, setSplit] = useState(2);

  return (
    <>
      <div className="container">
        <Bill setBill={setBill} />
        <Tip setTip={setTip} />
        <Split split={split} setSplit={setSplit} />
        <Button bill={bill} tip={tip} split={split} setResult={setResult} />
        <Result result={result} split={split} tip={tip} />
      </div>
    </>
  );
}
