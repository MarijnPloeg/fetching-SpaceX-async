async function fetchDataNew() {
    try {
        const result = await axios.get('https://api.spacexdata.com/v4/launches');
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

fetchDataNew();