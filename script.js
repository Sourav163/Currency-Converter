console.log("Welcome to the Website");

const conversion = async (value, currency) => {
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_fUtQGeYTCSEq9EY5O7YYOxMgaDMEtL7D30JkHclL&base_currency=" +
    currency;
  let response = await fetch(url);
  let rJson = await response.json();
  document.getElementById("output").style.display = "flex";
  console.log(rJson);
  let str = "";
  for (let key of Object.keys(rJson["data"])) {
    str += `<tr>
                <td>${key}</td>
                <td>${rJson["data"][key]["code"]}</td>
                <td>${(rJson["data"][key]["value"] * value).toFixed(2)}</td>
            </tr>
           `;
  }

  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = str;
};

const convert = document.querySelector("#convert");
convert.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Conversion Started...");
  const value = parseInt(document.querySelector("input[name='value']").value);
  const currency = document.querySelector("select[name='currency']").value;
  console.log(value);
  console.log(currency);
  conversion(value, currency);
});
