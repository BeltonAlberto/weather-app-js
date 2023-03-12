document.querySelector('.busca').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#searchInput').value;

    if (input !== '') {
    }

    console.log(input);
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}
