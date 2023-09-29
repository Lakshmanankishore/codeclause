let longurl = document.getElementById("longurl");
let gen = document.getElementById("short");
let shorturl = document.getElementById("shorturl");
let copy = document.getElementById("copy");

gen.addEventListener("click", () => {
    let url = longurl.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((resp) => resp.json())
        .then((value) => {
            shorturl.value = value.result.short_link;
        })
        .catch((error) => {
            shorturl.value = "error!";
        });
});

copy.addEventListener("click", () => {
    shorturl.select();

    document.execCommand("copy");

    shorturl.blur();
});