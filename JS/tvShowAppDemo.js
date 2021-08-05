const form = document.querySelector("#searchForm")
form.addEventListener(
    'submit',
    async function (e) {
        e.preventDefault()
        const searchInput = form.elements.query.value
        const config = {
            params: {
                q: searchInput
            }
        }
        const result = await axios.get("http://api.tvmaze.com/search/shows", config)
        console.log(result.data)
        addImages(result.data)
        form.elements.query.value = ""
    }
)

const addImages = (shows) => {
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement('IMG')
            img.src = show.show.image.medium;
            document.body.append(img)
        }
    }
}