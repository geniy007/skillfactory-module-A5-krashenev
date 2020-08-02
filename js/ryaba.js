const dataURL = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";
let ryaba = '';

function handleButton() {
  $.getJSON(dataURL, function(data){
    ryaba = String(data.text);
    $("#result").text(data.text);
     });
}

function handleData(data) {
  let text = ryaba;
  const var1 = $("input[name=var1]").val();
  while (text.indexOf('{var1}') != -1) {
    text = text.replace('{var1}', var1);
  }
  const var2 = $("input[name=var2]").val();
  while (text.indexOf('{var2}') != -1) {
    text = text.replace('{var2}', var2);
  }
  const var3 = $("input[name=var3]").val();
  while (text.indexOf('{var3}') != -1) {
    text = text.replace('{var3}', var3);
  }
  const var4 = $("input[name=var4]").val();
  while (text.indexOf('{var4}') != -1) {
    text = text.replace('{var4}', var4);
  }
  const var5 = $("input[name=var5]").val();
  while (text.indexOf('{var5}') != -1) {
    text = text.replace('{var5}', var5);
  }
  const var6 = $("input[name=var6]").val();
  while (text.indexOf('{var6}') != -1) {
    text = text.replace('{var6}', var6);
  }
  const speach = $("input[name=speach]").val();
  while (text.indexOf('{speach}') != -1) {
    text = text.replace('{speach}', speach);
  }
  $("#result").text(text);
}

function init() {
  $("#button-fetch").click(handleButton);
  $("#button-result").click(handleData);
}

$(document).ready(init);