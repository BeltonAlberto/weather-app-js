
document.querySelector('.busca').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.querySelector('#searchInput').value;

    if (input !== '') {
        showWarning('loading...');

        //Open wheather API link bellow that provides the current wheather based on the user's input city name

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={dc8554e45a7270a3684d8932a4e75a3c}&units=metric&lang=pt`;

        const results = await fetch(url);
        const resultsJSON = results.json();
        console.log(resultsJSON);
    }

    console.log();
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}
