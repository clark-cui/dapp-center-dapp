import "./App.css";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

function App() {
  const lp = useLaunchParams();

  useEffect(() => {
    console.log(lp, "lp");
    const {initData} = lp;
    const { hash, startParam } = initData;
    if(startParam && typeof startParam === 'string'){
      const source = startParam.replaceAll('__','%');
      const dappUrl = decodeURIComponent(startParam);
      console.log(dappUrl,'dappUrl');
      startParam.startWith("https://") &&  window.location.href = `${dappUrl}${hash}`;
    }
  }, [lp]);
  return <div />;
}

export default App;
