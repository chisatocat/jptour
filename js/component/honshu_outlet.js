import outlets from "../data/outlets.js";

document.addEventListener("DOMContentLoaded", () => {
  const outletContainer = document.getElementById("outlet-container");

  // Create the jumbotron at the top
  outletContainer.innerHTML = `
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-primary">
        <div class="col-md-12 px-0">
            <h1 class="display-4 font-italic">本州五大必行Outlet</h1>
            <p class="lead my-3">想喺日本瘋狂購物，緊係去Outlet尋寶！今次整理咗5間日本本州必行嘅Outlet，詳細介紹交通方式、必買品牌、附屬設施等實用資訊，第時計劃去日本旅行嗰陣，唔好唔記得喺入面揀想去嘅Outlet，買一大堆戰利品返屋企。</p>
        </div>
    </div>
    <hr class="featurette-divider"/>`;

  // Generate the featurettes for each outlet
  outlets.forEach((outlet, index) => {
    outletContainer.innerHTML += `
        <div class="row featurette">
            <div class="col-md-7  ${index % 2 === 0 ? "" : "order-md-2"}">
                <h2 class="featurette-heading mb-5">${
                  outlet.title
                } <span class="text-muted">${outlet.subtitle}</span></h2>
                <p class="lead mb-5">${outlet.description}</p>
                <ul>
                    <li>地址：${outlet.address}</li>
                    <li>交通方式：${
                      Array.isArray(outlet.transportation)
                        ? outlet.transportation.join("<br/>")
                        : outlet.transportation
                    }</li>
                    <li>官網：<a href="${outlet.website}" target="_blank">${
      outlet.website
    }</a></li>
                </ul>
            </div>
            <div class="col-md-5 ${index % 2 === 0 ? "" : "order-md-1"}">
                <img src="${outlet.image}" alt="${
      outlet.subtitle
    }" class="img-fluid" /> 
            </div>
        </div>
        <hr class="featurette-divider"/>
    `;
  });
});
