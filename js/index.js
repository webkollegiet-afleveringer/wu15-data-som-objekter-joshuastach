// slå dig løs her... 
// const servicesDOM = document.querySelector(".services")
// console.log(servicesDOM);

const cube =`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0654 16.9245V31.9999L30.1229 24.4615V9.3855L17.0654 16.9245Z" fill="white"/>
<path d="M30.1229 9.3855L17.0654 16.9245V31.9999" fill="white"/>
<path d="M29.0586 7.53848L16.0001 0L2.94263 7.53848V7.54102L16.0001 15.08L29.0586 7.54102V7.53848Z" fill="white"/>
<path d="M2.94263 7.53845V7.54099L16.0001 15.08L29.0586 7.54099V7.53845" fill="white"/>
<path d="M14.9357 16.9245L1.8772 9.3855V24.4615L14.9357 31.9999V16.9245Z" fill="white"/>
<path d="M14.9357 31.9999V16.9245L1.8772 9.3855" fill="white"/>
</svg>`
const profile =`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 0C7.164 0 0 7.163 0 16C0 24.837 7.164 32 16 32C24.836 32 32 24.837 32 16C32 7.163 24.836 0 16 0ZM16 28C12.249 28 8.902 26.277 6.702 23.581C7.705 20.547 9.711 18.122 12.228 16.89C10.288 15.646 9 13.475 9 11C9 7.376 11.754 4.395 15.284 4.036C15.522 4.022 15.758 4 16 4C16.242 4 16.478 4.022 16.716 4.036C20.246 4.395 23 7.376 23 11C23 13.475 21.712 15.646 19.772 16.89C22.29 18.123 24.295 20.548 25.298 23.581C23.098 26.277 19.751 28 16 28Z" fill="#F78065"/>
</svg>`


const heroDOM = document.querySelector(".hero")
const wrapperDOM = document.querySelector(".wrapper")
// const heroString = /*html */`
//     <img src="${hero.image}" alt="ja da" class="kkhkh">
//     <h2>${hero.headline}</h2>
//     <div>${profile}</div> `
// heroDOM.insertAdjacentHTML("afterbegin", heroString)

const heroString = /* html */ `
    <img src="${hero.image}" alt="Hero Background" class="hero-image">
        <div class="card-context">
            <h1>
                ${hero.headline}
            </h1>
            <p>
                ${hero.copy}
            </p>
            <button class="explore-button">
                Explore
            </button>
        </div>`
heroDOM.insertAdjacentHTML("afterbegin", heroString)


const wrapperString = /* html */ `
    <div class="icon-wrapper">
        <img src="${cube}" alt="cube icon" class="cube">
        <div class="profile-pil"> 
            <p class="arrow"> < </p>
            <img src="${profile}" alt="profile icon" class="profile">
        </div>
    </div>
`
wrapperDOM.insertAdjacentHTML("afterbegin", wrapperString)
