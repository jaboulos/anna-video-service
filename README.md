# Project Name

> This is the repo for the HR RPT10 FEC Project on the Twitch.TV Video Service. This repo renders the video player and video collection to the page.

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v11.6.0

## Development

### Installing Dependencies

From within the root directory:

```sh
-npm install
-npm dev:react to start webpack
-npm start to run the server
```

```sh
Postgresql Instructions:

-Install after running npm install

****brew install postgresql

-Connect to default database:

  **** psql postgres

-Create a new role:

  **** CREATE ROLE taco WITH LOGIN PASSWORD 'tuesday';

-Create the database:

  **** CREATE DATABASE twitchvid;

-Connect to the new database:

  **** \c twitchvid

-Create tables:

  **** npm start

-To seed sample data into the database, in another terminal window run:

  **** npm run seed

-Helpful command tips can be found here:

  https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546
```

```sh
Getting new data from twitch

-Go to dev.twitch.com and sign up for a new account
-Locate your client-ID with the instructions provided on the website
-Follow the API instructions for more info on how to obtain specific sets of data. Here is one example of obtaining data from Twitch Streamer A_Seagull:

  curl -H 'Client-ID: <ClientID Here>' \
-X GET 'https://api.twitch.tv/helix/videos?user_id=19070311&first=100'
```