fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sunset")
    .then(res => res.json())
    .then(data => {
    console.log(data)

    document.body.style.backgroundImage = `url(${data.urls.full})`
	document.getElementById("photographer").textContent = `Taken by: ${data.user.name}`
    
})