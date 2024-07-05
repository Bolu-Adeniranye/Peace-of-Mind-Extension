fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=summer")
    .then(res => res.json())
    .then(data => {
    console.log(data)

    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("photographer").textContent = `By: ${data.user.name}`
  
})
    .catch((err) => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })


    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {

        document.getElementById("crypto").innerHTML = `
                <div>
                    <img src=${data.image.small} id="bitcoinImage"/>
                </div>
                <p>🎯: $${data.market_data.current_price.usd}<br></p>
                <p>👆: $${data.market_data.high_24h.usd}<br></p>
                <p>👇: $${data.market_data.low_24h.usd}<br></p>
        `
    })
    .catch(err => console.error(err))


    

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
});


navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp )}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});

