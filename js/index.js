// slå dig løs her... 
// const servicesDOM = document.querySelector(".services")
// console.log(servicesDOM);

const cube = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0654 16.9245V31.9999L30.1229 24.4615V9.3855L17.0654 16.9245Z" fill="white"/>
<path d="M30.1229 9.3855L17.0654 16.9245V31.9999" fill="white"/>
<path d="M29.0586 7.53848L16.0001 0L2.94263 7.53848V7.54102L16.0001 15.08L29.0586 7.54102V7.53848Z" fill="white"/>
<path d="M2.94263 7.53845V7.54099L16.0001 15.08L29.0586 7.54099V7.53845" fill="white"/>
<path d="M14.9357 16.9245L1.8772 9.3855V24.4615L14.9357 31.9999V16.9245Z" fill="white"/>
<path d="M14.9357 31.9999V16.9245L1.8772 9.3855" fill="white"/>
</svg>`
const profile = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 0C7.164 0 0 7.163 0 16C0 24.837 7.164 32 16 32C24.836 32 32 24.837 32 16C32 7.163 24.836 0 16 0ZM16 28C12.249 28 8.902 26.277 6.702 23.581C7.705 20.547 9.711 18.122 12.228 16.89C10.288 15.646 9 13.475 9 11C9 7.376 11.754 4.395 15.284 4.036C15.522 4.022 15.758 4 16 4C16.242 4 16.478 4.022 16.716 4.036C20.246 4.395 23 7.376 23 11C23 13.475 21.712 15.646 19.772 16.89C22.29 18.123 24.295 20.548 25.298 23.581C23.098 26.277 19.751 28 16 28Z" fill="#F78065"/>
</svg>`

const servicesDOM = document.querySelector(".services")
const heroDOM = document.querySelector(".hero")
const wrapperDOM = document.querySelector(".wrapper")


const heroText = hero.headline

let heroArray = heroText.split(" ")

let part1 = heroArray.slice(0, 4)
let part2 = heroArray.slice(5, 8)
let part3 = heroArray.slice(8, heroArray.length)

part1String = part1.map((element) => element).join(" ")
part2String = part2.map((element) => element).join(" ")
part3String = part3.map((element) => element).join(" ")

const heroString = /* html */ `
    <img src="${hero.image}" alt="Hero Background" class="hero-image">
        <div class="card-context">
            <h1>
                <span>${part1String}</span>
                <span class="orange-text">${part2String}</span>
                <span>${part3String} </span>
            </h1>
            <p>
                ${hero.copy}
            </p>
            <button class="explore-button">
                <img src="${hero.icon}">
                Explore
            </button>
        </div>`
heroDOM.insertAdjacentHTML("afterbegin", heroString)




const wrapperString = /* html */ `
    <div class="icon-wrapper">
        <div class="cuby">
            ${cube}
        </div>
        <div class="profile-pil"> 
            <p class="arrow"> < </p>
        ${profile}
        </div>
    </div>
`
wrapperDOM.insertAdjacentHTML("afterbegin", wrapperString)


const serviceContainer = /* html */ `
    <div class="service-container"> 
    </div>
`
servicesDOM.insertAdjacentHTML("afterbegin", serviceContainer)

const servConDOM = document.querySelector(".service-container")

services.forEach((service) => {
  let serviceString = /* html */ `
        <figure class="squirrel"> 
            <img src="${service.illustration}" alt="illustration of service and promoting" class="squirrel-img">
            <figcaption> 
                <h2 class="headlines"> 
                    ${service.headline}
                </h2>
                <p class="grey-text"> 
                    ${service.text}
                </p>
                <p class="squirrel-color">
                    ${service.linktext}
                </p>
                
            </figcaption>
        <figure>
      `

  document.createElement("img")
  servConDOM.insertAdjacentHTML("afterbegin", serviceString)
})

const facilityDOM = document.querySelector(".facilities")

const facHeadlineString = /* html */ `
        <h2 class="headline-fac"> ${facilities.headline} </h2>
        <div class="fac-container"> </div>
        
    `

facilityDOM.insertAdjacentHTML("afterbegin", facHeadlineString)
const facConDOM = document.querySelector(".fac-container")

facilities.options.forEach((facility) => {
  let showString = /* html */`
        <div class="fac-wrapper">
        <img src="${facility.icon}" alt="icons" class="show-icon">
        <h3 class="show-headline">
            ${facility.headline}
        </h3>
        <p>${facility.text}</p>
        <a href="#" class="squirrel-color">Show me more</a>
        </div>
        `
  facConDOM.insertAdjacentHTML("afterbegin", showString)
})

const siteDOM = document.querySelector(".sites")

const startString = /* html */`
        <div class="community-wrapper">
            <h2 class="community"> ${sites.headline} </h2>
                <p>
                    ${sites.text}
                </p>
            <a href="#" class="squirrel-button"><img src="${sites.btnicon}">Start</a>
        </div>
    `
siteDOM.insertAdjacentHTML("afterbegin", startString)

sites.places.forEach((view) => {
  let viewString = /* html */`
            <div class="view-wrapper"> 
                <img src="${view.img}" alt="places to uhhhh view" class="view-image">
                <h3>${view.name}</h3>
                <small class="city">${view.city}</small>
                <a href="#" class="squirrel-link">View the Site</a>
            </div>
        `
  siteDOM.insertAdjacentHTML("beforeend", viewString)
})

const advantageDOM = document.querySelector(".advantages")

const advHeadlineString = /* html */ `
        <h2 class="headline-fac">Our Advantages</h2>
        <div class="adv-container"> </div>
        
    `
advantageDOM.insertAdjacentHTML("afterbegin", advHeadlineString)

const advantageContainer = document.querySelector(".adv-container")

advantages.forEach((advantaging) => {
  let advantageString = /* html */`
        <div class="fac-wrapper">
            <img src="${advantaging.icon}" alt="icons" class="show-icon">
            <h3 class="show-headline">
                ${advantaging.headline}
            </h3>
            <p>${advantaging.text}</p>
        </div>
        `
  advantageContainer.insertAdjacentHTML("afterbegin", advantageString)
})
// jeg kopired bare facility scripted fordi jeg gider ikke at skrive det hele manuelt igen :(

const footies = document.querySelector(".footer")

const footerContainerString = /* html*/ `
        <div class="passion-wrapper"></div>
        <div class="list-link-wrapper"></div>
    `
footies.insertAdjacentHTML("beforeend", footerContainerString)


const passion = document.querySelector(".passion-wrapper")

const passionString = /* html */ `
        <section class="eazy"> 
            <h2> ${footer.headline} </h2>
            <p> ${footer.small}</p>
        </section>
    `
passion.insertAdjacentHTML("afterbegin", passionString)




// footer :)

// footer.listItems.forEach((list) => {
//     let listString = /* html */`
//         <div>
//             <h3>
//                 ${list.headline}
//             </h3>
//         <ul class="list-ul"></ul>
//         </div>
//         `
//     passion.insertAdjacentHTML("beforeend", listString)
//     const listUl = document.querySelector(".list-ul")

//     list.links.list.forEach((linkies) => {
//         stringLi = /* html */`
//                 <li>
//                     ${linkies.link}
//                 </li>

//             `
//         listUl.insertAdjacentHTML("beforeend", stringLi)
//     })

// })
const footerElement = document.createElement("footer");
footer.listItems.map((listItem) => {
  // console.log(item);
  const wrapper = document.createElement("div")
  const headline = document.createElement("h3");
  const linksWrapper = document.createElement("ul");
  console.log(listItem)
  for (var link of listItem.links) {
    console.log(link)
    const linkElement = document.createElement("a");
    linkElement.href = "#";
    linkElement.textContent = link.link;
    linksWrapper.append(linkElement)
  };
  wrapper.append(headline);
  wrapper.append(linksWrapper)
  footerElement.append(wrapper)
})

passion.insertAdjacentElement("beforeend", footerElement)