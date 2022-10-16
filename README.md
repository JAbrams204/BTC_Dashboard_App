
This is a Personal Dashboard project created as a Chrome Extension. 
In creating this project, I have made use of Unsplash API, CoinGecko API and OpenWeather API. 
Modern JavaScript was used to fetch and filter data from these APIs.
The APIs, which I accessed through JavaScript's fetch function, returned JSON data from Unsplash.com, CoinGecko.com and OpenWeather.com.

I have used Unsplash API to generate the background images used throughout this dashboard. For the url in the fetch function, I have used the 
endpoint that is set to "nature" in order to produce these images. The CoinGecko API was used to extract the daily current price, the 24 hour high and the 24 hour low price depicted on the dashboard for Bitcoin. The OpenWeather API was used to provide the location and current temperature information on the dashboard by using a querystring endpoint to identify the latitude and longitude of the user's location.

I have also included the current time on the dashboard using the "getCurrentTime" function and the "toLocaleTimeString" method with a 
"timeStyle" set to medium. I have also set one of the parameters of the "setInterval" function to one thousand miliseconds in order to
enable the current time to be displayed every second.

In order to incorporate all these features on the dashboard, I have used Flex-box to layout the design. I have also created the manifest.json file
required to convert the dashboard into a Chrome Extension that will allow any new tab generated in Chrome to display the content of the dashboard.




