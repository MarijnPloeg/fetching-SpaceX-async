async function displayLaunches() {
    const response = await axios.get('https://api.spacexdata.com/v4/launches')

    const launchList = document.getElementById('spaceX-launches')

    for (const launch of response.data) {
        const listItem = document.createElement('li')

        listItem.textContent = `${launch.date_local} - Launching ${launch.name}, details of flight: ${launch.details}`;

        console.log(listItem);
    }
}

displayLaunches();