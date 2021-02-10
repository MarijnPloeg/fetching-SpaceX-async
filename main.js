async function displayLaunches() {
    const response = await axios.get('https://api.spacexdata.com/v4/launches')

    const launchList = document.getElementById('spaceX-launches')

    for (const launch of response.data) {
        console.log(launch)
    }
}

displayLaunches();