import useTextarea from "../Hook/useTextarea";

function TextareaExample() {
  const { value, onChange, setValue, reset } =
    useTextarea("Write something...");

  return (
    <div>
      <textarea value={value} onChange={onChange} />

      <p>{value}</p>

      <button onClick={() => setValue("Hello React!")}>Set Text</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default TextareaExample;
