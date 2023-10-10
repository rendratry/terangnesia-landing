echo "Switching to main branch"
git checkout main

echo "Building app ....."
npm run build

echo "Deploy to server ...."
scp -r build/* haiyon@167.71.202.21:/var/www/terangnesia.com/

echo "Done..."