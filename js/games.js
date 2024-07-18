import { Details } from "./details.js";
import { Ui } from "./ui.js"
export class Games {
    constructor() {
        this.getGames("mmorpg");

        document.querySelectorAll(".category-list a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".category-list .active").classList.remove("active");
                e.target.classList.add("active");
                let category = e.target.dataset.category
                this.getGames(category);
                console.log(category);
            })
        });
        this.ui = new Ui()
    }


    async getGames(category) {
        document.querySelector(".loading").classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5b6fba4569mshee7bebc9e0378a6p153daajsnb38713fc257d',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(url, options);
        const response = await api.json();
        console.log(response)

        this.ui.displayGameData(response);
        this.showDetails();

        document.querySelector(".loading").classList.add("d-none");
    }

    showDetails() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                // this.showDetails(id);
                const details = new Details(id);
                document.querySelector(".gameDetails").classList.remove("d-none");
                document.querySelector(".games").classList.add("d-none");
            });
        });
    }

}