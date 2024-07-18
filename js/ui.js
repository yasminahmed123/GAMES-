export class Ui {
    displayGameData(data) {
        const gameData = document.querySelector("#gameData");
        let box = ``;
        for (let i = 0; i < data.length; i++) {
            box += `
                            <div class="col-xl-3 col-lg-4 col-md-6  ">
                    <div class="card bg-transparent text-light h-100"  data-id="${data[i].id}" role="button">
                        <div class="card-body p-3">
                            <img src="${data[i].thumbnail}" class="card-img-top mb-3 img-overlay" alt="...">
                            <div class="d-flex justify-content-between align-items-center ">
                                <h5 class="card-title small" >${data[i].title}</h5>
                                <a href="#" class="btn free-btn px-2 py-1 btn-primary">Free</a>
                            </div>
                            <p class="card-text opacity-50 small text-center">${data[i].short_description.split(" ", 8)}</p>
                        </div>
                        <footer class="card-footer small hstack justify-content-between">
                            <span class="badge text-bg-secondary bg-opacity-25 ">${data[i].genre}</span>
                            <span class="badge text-bg-secondary bg-opacity-25">${data[i].platform}</span>
                        </footer>
                    </div>
                </div>
            `
        }
        gameData.innerHTML = box;
    }

    displayGameDetails(data) {
        const gameDetails = document.querySelector("#gDetails");
        let box = `
                        <div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="">
                </div>

                <div class="col-md-8">
                    <h3 class="mb-3">Title: ${data.title}</h3>
                    <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                    <p class="small">${data.description}</p>
                    <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
                </div>
        `;
        gameDetails.innerHTML = box;
    }
}