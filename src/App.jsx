import "./App.css";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

function App() {
  const lp = useLaunchParams();

  useEffect(() => {
    console.log(lp, "lp");
    const {initData} = lp;
    const { startParam } = initData;
    if(startParam && typeof startParam === 'string'){
      const source = startParam.replaceAll('__','%');
      const dappUrl = decodeURIComponent(source);
      console.log(dappUrl,'dappUrl');
      console.log(hash,'hash');
      // if(dappUrl.startsWith("https://") ){
      //   window.location.href = `${dappUrl}${location.hash}`;
      // }
    }
  }, [lp]);
  return <div />;
}

export default App;
