
// This is the Background Image and Image Author section of the code.
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=finance")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.body.style.backgroundImage =`url(${data.urls.regular})`
      document.getElementById("author").textContent = `By: ${data.user.name}`
    })    
    .catch(err => {
    // Use a default background image/author
       document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE4NjMwMTY&ixlib=rb-1.2.1&q=80&w=1080
  )`
       document.getElementById("author").textContent = ` By: Courtney Cook`
  })

  //This is Bitcoin market price section of the code! 
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if(!res.ok) {
            throw Error("Something went wrong with API connection!")
        }
        return res.json()
    })  
    .then(data => {
        console.log(data)
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
        <p>🎯: $${Math.round(data.market_data.current_price.usd)}</p>
        <p>👆: $${Math.round(data.market_data.high_24h.usd)}</p>
        <p>👇: $${Math.round(data.market_data.low_24h.usd)}</p>
        `

    }).catch(err => console.error(err))


  //This Current Time section of the code.

  function getCurrentTime() {
      const date = new Date()
      document.getElementById("time").textContent = date.toLocaleTimeString("en-us",{timeStyle: "medium"} )
  }
  setInterval(getCurrentTime, 1000)

  // This is the Weather and Location section of the code! 
  navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data is unavailable!")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
  })

// navigator.geolocation.getCurrentPosition(position => {
//     fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
//         .then(res => {
//             if (!res.ok) {
//                 throw Error("Weather data not available")
//             }
//             return res.json()
//         })
//         .then(data => {
//             const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
//             document.getElementById("weather").innerHTML = `
//                 <img src=${iconUrl} />
//                 <p class="weather-temp">${Math.round(data.main.temp)}º</p>
//                 <p class="weather-city">${data.name}</p>
//             `
//         })
//         .catch(err => console.error(err))
// });
  





    
