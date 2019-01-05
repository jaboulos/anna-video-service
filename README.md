# Project Name

> Project description

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

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

TODO:

-Instructions for installing postgresql
  -brew install postgresql


-Instructions for initializing postgresql
  -Login user: taco
  -password: tuesday
  -To connect: psql -d twitchvid -u taco

-Instructions to obtain Twtich API Data
  /*

curl -H 'Client-ID: bq8806sjkivttwp7o6gwuzw57stpc5' \
-X GET 'https://api.twitch.tv/helix/videos?user_id=19070311&first=100'

*/