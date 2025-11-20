echo > Building

git stash
git pull

cd Docker
docker compose down
docker compose up -d
cd ..
