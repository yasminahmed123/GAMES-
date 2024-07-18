import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        this.ui = new Ui();

        document.querySelector("#closeBtn").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".gameDetails").classList.add("d-none");
        });

        this.getDetails(id);
    }



    getDetails(id) {
        document.querySelector(".loading").classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5b6fba4569mshee7bebc9e0378a6p153daajsnb38713fc257d',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(function (response) { return response.json() })
            .then((response) => { this.ui.displayGameDetails(response) })
            .catch((error) => console.error(error))
            .finally(() => {
                document.querySelector(".loading").classList.add("d-none");
            });

    }

}
