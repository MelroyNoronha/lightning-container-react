import LCC from "lightning-container";

const platformIsSalesforce = () =>
  process.env.PLATFORM_NAME === "SALESFORCE" ? true : false;

export function sendMessageToLightningContainer(message) {
  if (platformIsSalesforce) {
    LCC.sendMessage({ message: message });
  } else if (process.env.PLATFORM_NAME === "NODEJS") {
    // const url = "https://testDomain/deleteDCREndpoint";
    // fetch(url, { method: "POST", body: { DCRName: DCRName } })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  }
}

export function getAllDCRNames() {
  if (platformIsSalesforce) {
    return new Promise(function(resolve, reject) {
      LCC.callApex(
        "DCRController.getAllDCRNames",
        (result, event) => {
          if (result) {
            resolve(result);
          } else if (event.type === "exception") {
            reject(event);
          }
        },
        { escape: true }
      );
    });
  }
}

export function deleteDCRByName(DCRName) {
  if (platformIsSalesforce) {
    return new Promise(function(resolve, reject) {
      LCC.callApex(
        "DCRController.deleteDCRByName",
        DCRName,
        (result, event) => {
          if (result && event.statusCode === 200) {
            resolve(result);
          } else if (event.type === "exception") {
            reject(event);
          }
        },
        { escape: true }
      );
    });
  }
}

export function insertNewDCRByName(DCRName) {
  if (platformIsSalesforce) {
    return new Promise(function(resolve, reject) {
      LCC.callApex(
        "DCRController.insertNewDCRByName",
        DCRName,
        (result, event) => {
          if (result && event.statusCode === 200) {
            resolve(result);
          } else if (event.type === "exception") {
            reject(event);
          }
        }
      );
    });
  }
}
