This is a basic development environment for a typescript express server and postgres database. Has a few examples to jog your memory and establish a pattern.

# Quickstart

1. [Download Docker](https://docs.docker.com/get-started/get-docker/)

2. `npm install`

3. `docker compose build`

4. `docker compose up`

5. `curl http://localhost:3000`

## Bash into Postgres

1. `docker exec -it postgres bash`

2. `psql -U postgres`
