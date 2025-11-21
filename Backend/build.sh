#!/bin/bash
git pull
docker build -t backend-as:1 .
docker compose down
docker compose up -d