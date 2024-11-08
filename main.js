document.querySelector("#app").innerHTML = `
  <div>
  </div>
`;

const urlObj = new URL(location.href);
const params = new URLSearchParams(urlObj.search);
const startParam = params.get("startapp");
console.log(startParam, "startParam");

if (startParam && typeof startParam === "string") {
  const source = startParam.replaceAll("__", "%");
  const dappUrl = decodeURIComponent(source);
  console.log(dappUrl, "dappUrl");
  if (dappUrl.startsWith("https://")) {
    location.href = `${dappUrl}${location.hash}`;
  }
}