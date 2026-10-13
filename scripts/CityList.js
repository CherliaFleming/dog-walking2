import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener("click",
    (clcikEvnt) => {
        const cityTarget = clcikEvnt.target

        if (cityTarget.dataset.type === "city") {
        window.alert(`${cityTarget.dataset.walkername} is servicing this city`)
    }
    
}

)
export const CityList = () => {
    let citiesHTML = `<ul>`

    for (const city of cities) {
        let names = ""
    
    for (const walker of walkers) {
        if (walker.cityId === city.id) {
            if (names !== "") {
                names += " and "
                }
                names += walker.name
            }
        }

        if (names !== "") {
        citiesHTML += `<li data-type="city" data-walkername="${names}">${city.name}</li>`
    }
    }

    citiesHTML += `</ul>`
    return citiesHTML
}

