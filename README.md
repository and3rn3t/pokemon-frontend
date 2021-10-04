# Pokémon Comparator Application

## Description

The Pokémon Comparator Application will show information about a given Pokémon from the list. Such information includes species, height, weight, skills, abilities and other important information. Clicking the name of a Pokémon will bring you to their informational page.

## Features / User Stories

- <v2> As a user, I would like to easily and visually see differences between two different Pokémon - so that I can make decisions.
- <v1 mvp complete> As a developer, I would like to use an API in order to retrieve Pokémon information - so that the database stays consistent.
- <v1 mvp complete> As a developer, I would like to serve an API to a front-end, so that if I choose a different technology it is easier to change.
- <v2> As a user, I would like to quickly choose two Pokémon - so that I can make decisions.
- <v1 mvp complete> As a user, I want to see a variety of useful facts and statistics, so that I can decide which is more powerful.
- <v1 mvp complete> As a developer, I want to use an Express.js backend with a React frontend - so that the application is easier to update later.
- <v2> As a user, I want to see a high-res picture of the Pokémon, so that I can see for sure which one is the one I chose.
- <v1 mvp complete> As a user, I want to see generation of Pokémon, so I know how long a species has been around.
- <v1 mvp complete> As a user, I want to quickly see stats for each Pokémon, so that I don't have to spend a lot of time searching.
- <v2> As a user, I would like a quick live-search to identify a Pokémon by name, so that they are easy to find.
- <v2> As a developer, I want to be sure images are cached and easy to fetch, so that the display page loads quickly.
- <v2> As a developer, I want to be sure the API continues to work correctly with new data, so that users get current info.
- <v2> As a user, I do not care about styling and would prefer a basic, no-nonsense style, so that I can focus on the data.

## Technologies Used

- React for front-end user experience
- node.js for back-end serving API
- axios to retrieve API data from back-end
- Heroku for deployment of both ends
- Github public for code repository
  
## Issues and Resolution
  1. Migrating models to Heroku... I did not have seed files as the data were imported from .csv files. So I had to configure pgAdmin to connect to Heroku instance remotely, and then import data from there.
  2. Equality operator... My front-end was comparing a model ID to a parameter ID, which are different data types. I was using a '===', thus no match was being returned. After speaking to Joseph, I used the correct operator and it worked.
  3. Data models in general... since data is static I decided to use .csv files to load the database tables. This proved problematic every time I had to revert and re-migrate models (I had to re-import each time). Also did not necessarily have every ID and model correctly configured. This honestly just took some experimentation and back-and-forth to figure out.

## Contribution Guidelines
  - All code is stored on [GitHub Public](https://github.com/and3rn3t/pokemon-frontend)
  - Production application is hosted on [Heroku](https://pokemon-comparator-frontend.herokuapp.com)
