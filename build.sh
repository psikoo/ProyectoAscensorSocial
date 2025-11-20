#!/bin/bash

echo "> Building"

cd Docker
docker compose down
docker compose up -d
cd ..