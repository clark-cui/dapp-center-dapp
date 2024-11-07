import "./App.css";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

function App() {
  const lp = useLaunchParams();

  useEffect(() => {
    console.log(lp, "lp");
    const { hash, tgWebAppStartParam } = lp;
    if (tgWebAppStartParam && tgWebAppStartParam.startWith("https://")) {
      window.location.href = `${tgWebAppStartParam}${hash}`;
    }
  }, [lp]);
  return <div />;
}

export default App;
