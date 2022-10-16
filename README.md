
This is a Personal Dashboard project created as a Chrome Extension. 
In creating this project, I have made use of Unsplash API, CoinGecko API and OpenWeather API. 
Modern JavaScript is used to fetch and filter data from the API.
The API, which I accessed through JavaScript's fetch function, returns JSON datafrom Unsplash.com, CoinGecko.com and from OpenWeather.com.

I have used Unsplash API to generate the background images used throughout this dashboard. For the url in the fetch function, I have used the 
endpoint that is set to "nature" in order to produce these images. The CoinGecko API was used to extract the daily current price, the 24 hour high and low price depicted on the dashboard for Bitcoin. The OpenWeather API was used to provide the location and current temperature information on the dashboard.

I have also included the current time on the dashboard using the JavaScript Date function and the toLocaleTimeString method with a 
timeStyle set to medium. This feature allows the current time to display hours, minutes and seconds.

In order to incorporate all these features on the web page, I have used Flex-box to design the layout.
