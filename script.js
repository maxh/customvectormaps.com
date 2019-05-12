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
  "lon",
  "lat",
  "radius",
];

const BASE64_PARAMS = [
  "xml_source",
  "sql_source",
];

function submitRender() {
  PARAMS.each(setParam);
  BASE64_PARAMS.each(setBase64Param);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/server", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(params));
}
