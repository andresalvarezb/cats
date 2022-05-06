'use strict'
const apiKey = '1d6dd542-abbc-4185-98a6-ead419a0d603'
const url = `https://api.thecatapi.com/v1/images/search?limit=4&api_key${apiKey}`
window.onload = () => {
	getCat(url)
	document.querySelector('button').addEventListener('click', () => getCat(url))
}

async function getCat(urlApi) {
	const response = await fetch(urlApi)
	const data = await response.json()
	console.log(data)
	const fragment = document.createDocumentFragment()
	data.forEach((cat) => {
		const image = document.createElement('img')
		image.src = cat.url
		image.width = 150
		fragment.append(image)
	})
	document.body.append(fragment)
}
