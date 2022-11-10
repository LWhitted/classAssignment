#1
APOD : Astronaut Picture of the Day (NASA)
NO API Authentication
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
API JSON Response:
{
    "date": "2022-11-08",
    "explanation": "How many galaxies are interacting here?  This grouping of galaxies is called the Wild Triplet, not only for the discoverer, but for the number of bright galaxies that appear. It had been assumed that all three galaxies, collectively cataloged as Arp 248, are interacting, but more recent investigations reveal that only the brightest two galaxies are sparring gravitationally: the big galaxies at the top and bottom. The spiral galaxy in the middle of the featured image by the  Hubble Space Telescope is actually far in the distance, as is the galaxy just below it and all of the other numerous galaxies in the field.  A striking result of these giants jousting is a tremendous bridge of stars, gas, and dust that stretches between them -- a bridge almost 200,000 light-years long. Light we see today from Wild's Triplet left about 200 million years ago, when dinosaurs roamed the Earth. In perhaps a billion years or so, the two interacting galaxies will merge to form a single large spiral galaxy.",
    "hdurl": "https://apod.nasa.gov/apod/image/2211/WildTriplet_Hubble_3623.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Galaxies: Wild's Triplet from Hubble",
    "url": "https://apod.nasa.gov/apod/image/2211/WildTriplet_Hubble_960.jpg"
}

Some notes on how this API can potentially be used for your front-end group project: 
could be more of an educational app. can incorporate picture of the day, the date, title of image and an interesting fact about the image. This type of app would be simimlar to quote of the day apps. Could be added to iphone widgets to show the picture of the day on home screen. Also, it would be cool to add certain images to your favorites to make a favorites page?

#2
The name of the website/app of the API you're using: MEME Generator
If the API is authenticated (yes/no) I Am unsure
The API URL you're making the API request to http://apimeme.com/?ref=apilist.fun
The API JSON response returned by the server it returns the entire database this api has for random memes that you can search by keywords.
Some notes on how this API can potentially be used for your front-end group project: I am unsure yet... Trying to think of something that doesn't already exist


#3
TheCocktailDB
https://www.thecocktaildb.com/api.php

If the API is authenticated (yes/no) yes
The API URL you're making the API request to

Search cocktail by name
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita  **You can use "all" instead of margarita to see the full list

Search ingredient by name
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Lookup a random cocktail
www.thecocktaildb.com/api/json/v1/1/random.php

The API JSON response returned by the server:
It gives recipies for different types of cocktails.
-name of drink
-type of glass
-type of liquor 
-cocktail recipie in english (and also available in different languages)
-cocktail ingredients + measurements
-cocktail image

Some notes on how this API can potentially be used for your front-end group project home page: random cocktail of the day, my saved list, search function to search by name and or ingredient + images

#4
 New York Times Movie Review API
If the API is authenticated (yes/no)v Yes *But I do not see on the site where the key is.... It is pretty confusing
The API URL you're making the API request to:
THis is the site with the API information https://developer.nytimes.com/docs/movie-reviews-api/1/overview
Here is an example of a GET request: https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey
Here are different variatons I am thinking about using:
Get movie reviews that are critics' picks: /reviews/picks.json
Search for movie reviews. Supports filtering by Critics' Pick.: /reviews/search.json

The API JSON response returned by the server *I am confused on what the key is supposed to api key is supposed to be so I haven't tested it in postman yet.
Some notes on how this API can potentially be used for your front-end group project: I love movies! So it would be cool to make an app that would be a go to on reviews on the new movies out + it would also be cool to add your own review on movies and that you could see others' reviews.