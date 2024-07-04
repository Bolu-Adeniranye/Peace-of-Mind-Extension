fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=summer")
    .then(res => res.json())
    .then(data => {
    console.log(data)

    document.body.style.backgroundImage = `url(${data.urls.full})`
	
    

    
})
    .catch((err) => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
    })


    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {

        document.getElementById("crypto").innerHTML = `<div>
            <img src=${data.image.small} id="bitcoinImage"/>
    </div>
        `

                document.getElementById("crypto").innerHTML += `
            <spaspan>🎯: $${data.market_data.current_price.usd}<br></span>
            <spaspan>👆: $${data.market_data.high_24h.usd}<br></span>
            <spaspan>👇: $${data.market_data.low_24h.usd}<br></span>
        `
    })
    .catch(err => console.error(err))