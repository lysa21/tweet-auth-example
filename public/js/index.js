
const timeline = () => {
  let options = {};
  options.headers = {};
  options.headers["X-Requested-With"] = "XMLHttpRequest";

  fetch("/api/tweets", options)
    .then((res) => res.json())
    .then((res) => {
      var placeHolder = (document.querySelector(".timeline .tweets").innerHTML = "");

      var template = Handlebars.compile("{{#each tweets}}\
    <div>\
        {{content}}\
    </div>\
{{/each}}");
      var placeHolder = document.querySelector(".timeline .tweets");

      console.log(res);
      placeHolder.innerHTML = template(res);
    })
    .catch();
};

timeline();
setInterval(() => {
  timeline();
}, 5000);
