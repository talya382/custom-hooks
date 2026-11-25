import ToggleExample from "./components/ToggleExample";
import Counter from "./components/Counter";
import CounterbyStep from "./components/CounterbyStep";
// import Inputcompinntat from "./components/Inputcompinntat";
import TextareaExample from "./components/TextareaExample";
import PreviousExample from "./components/PreviousExample";
import IntervalExample from "./components/IntervalExample";
import TimeoutExample from "./components/TimeoutExample";
import DocumentTitle from "./components/DocumentTitle";
import WindowSizeExample from "./components/WindowSizeExample";
import KeyPressExample from "./components/KeyPressExample";
function App() {
  return (
    <div>
      <ToggleExample />
      <Counter/>
      <CounterbyStep />
      {/* <Inputcompinntat/> */}
      <TextareaExample/>
      <PreviousExample />
      <IntervalExample/>
      <TimeoutExample/>
      <DocumentTitle/>
      <WindowSizeExample/>
      <KeyPressExample/>

    </div>
  );
}

export default App;