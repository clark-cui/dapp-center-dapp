import "./App.css";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

function App() {
  const lp = useLaunchParams();

  useEffect(() => {
    console.log(lp, "lp");
  }, [lp]);
  return <div />;
}

export default App;
