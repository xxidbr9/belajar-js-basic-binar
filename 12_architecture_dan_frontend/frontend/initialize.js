const contentWrapper = document.querySelector("#content");
contentWrapper.innerHTML = `<h1>Loading....</h1>`;
const intializeApps = async () => {
  const resp = await fetch("http://localhost:9000/api/v1/link-tree/links");
  const jsonResp = await resp.json();
  const { link } = jsonResp.data;

  contentWrapper.innerHTML = "";
  link.forEach(element => {
    const linkInfo = generatorHtml(element.name, element.link);

    contentWrapper.innerHTML += linkInfo;
  });
};

const generatorHtml = (name, link) => `  
<div class="card card-px flex-row justify-content-between" style="" id="card__${name}">
  <div class="card-link-title d-flex align-items-center gap-2">
    <span>${name}</span>
    <i class="bi bi-pencil card-icon-title"></i>
  </div>
  <div class="d-flex align-items-center">
    <button class="btn">
      <i class="bi bi-trash"></i>
    </button>
    <a class="btn" href="${link}">
      <i class="bi bi-arrow-right-short"></i>
    </a>
</div>
</div>`;
