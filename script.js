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
  xhr.open("POST", "https://ryz2vfwxcg.execute-api.us-west-2.amazonaws.com/Prod/render", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(params));
}
