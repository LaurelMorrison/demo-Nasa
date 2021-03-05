export const getNasaPost = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=XAyCIyhazGoowga6gqBBIEnJgbQtDGvb6qiU2Ut5")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}