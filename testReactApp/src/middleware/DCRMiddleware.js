import LCC from "lightning-container";

export function sendDeleteRequest(DCRName) {
  if (process.env.PLATFORM_NAME === "SALESFORCE") {
    LCC.sendMessage({ type: "deleteRequestClickEvent", DCRName: DCRName });
  } else if (process.env.PLATFORM_NAME === "NODEJS") {
    const url = "https://testDomain/deleteDCREndpoint";
    fetch(url, { method: "POST", body: { DCRName: DCRName } })
      .then(response => response.json())
      .then(data => console.log(data));
  }
}
