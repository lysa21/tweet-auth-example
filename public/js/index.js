const timeline = (template) => {
  let options = {};
  options.headers = {};
  options.headers["X-Requested-With"] = "XMLHttpRequest";
  let last = document.querySelector('.tweets span');

console.log(last)

  fetch(`/api/tweets?id=${last.id}`, options)
    .then((res) => res.json())
    .then((res) => {
      var compiledTemplate = Handlebars.compile(template);
      var placeHolder = document.querySelector(".timeline .tweets > div");
      console.log(res)
      if (res.tweets.length)
      {
        placeHolder.insertAdjacentHTML('beforebegin', compiledTemplate(res))
        last.remove();
      }
     

    })
    .catch(function (e) {
      console.log(e);
    });
};

const refreshTimeline = async () => {
  let res = await fetch("./ajax/tweets.handlebars");
  let template = await res.text();

  timeline(template);
  setInterval(() => {
    timeline(template);
  }, 5000);
};


refreshTimeline()