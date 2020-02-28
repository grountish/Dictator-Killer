
let articleRaw = "https://en.wikipedia.org/api/rest_v1/page/summary/Donald_Trump"
const getArticle = async () => {

    const response = await
    fetch(articleRaw);
    const article1 = await response.json();
    const photoArticle = article1.thumbnail.source
    const description = article1.extract
    
    document.getElementById('texto').innerHTML = description
    document.getElementById('imagen').src = photoArticle
};
getArticle()
