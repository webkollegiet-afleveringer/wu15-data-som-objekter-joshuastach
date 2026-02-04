heroDOM.insertAdjacentHTML("afterbegin", heroString)

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach((service) => {
//     console.log(service.headline);
//     let headlineH2 = `<h2> ${service.headline} </h2>`
//     console.log(headlineH2);
//     // document.createElement("img")
//     servicesDOM.insertAdjacentHTML("afterbegin", headlineH2)
// }
// )

// heroImg = document.createElement("img")
// heroImg.src = hero.image;
// // headerDOM.insertAdjacentHTML("beforebegin", heroImg)
// heroDOM.append(heroImg)

// const heroWrapper = document.createElement("div")

// heroWrapper.classList.add("hero-context")
// heroDOM.insertAdjacentElement("beforeEnd", heroWrapper)

// const cardDOM = document.querySelector(".hero-context")

// headlineHero = `<h1> ${hero.headline} </h2>`
// cardDOM.insertAdjacentHTML("beforeend", headlineHero)


// contextHero = `<p> ${hero.copy} </p>`
// cardDOM.insertAdjacentHTML("afterbegin", contextHero)

// iconImg = document.createElement("img")
// iconImg.src = hero.icon;
// iconDOM.append(iconImg)