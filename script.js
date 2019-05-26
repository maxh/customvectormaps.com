const URL = "https://f0odu07v53.execute-api.us-west-2.amazonaws.com/Prod/render/";
const params = {};

function getValue(name) {
  return document.getElementById(name).value;
}

function setParam(name) {
  params[name] = getValue(name);
}

function setBase64Param(name) {
  const base64name = name.split("_")[0] + "_base64";
  params[base64name] = btoa(getValue(name));
}

const PARAMS = [
  "password",
  "place_name",
  "style_name",
  "height",
  "lon",
  "lat",
  "radius",
];

const BASE64_PARAMS = [
  "xml_source",
  "sql_source",
];

function submitRender() {
  PARAMS.forEach(setParam);
  BASE64_PARAMS.forEach(setBase64Param);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", URL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.responseType = "json";
  xhr.onload = () => {
    const jsonResponse = xhr.response;
    if (jsonResponse.error) {
      alert(jsonResponse.error);
      return;
    }
    const imgEl = document.getElementById("img");
    imgEl.src = "data:image/png;base64, " + jsonResponse.result.image_base64;
  };
  xhr.send(JSON.stringify(params));
}
