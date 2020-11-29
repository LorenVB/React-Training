const apiKey = 'kHQAws58Nr9Dsh9OAfjzpWftLiOgwHkR';

const requestHTTP = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

requestHTTP.then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);