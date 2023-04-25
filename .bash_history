sudo apt update && sudo apt upgrade -y
sudo apt install postgresql postgresql-contrib -y
psql
sudo -i -u postgres
psql -d postgres
psql --version
psql
sudo -i -u postgres
psql -d postgres
cd ~
ls
pgsql -postgres
psql -postgres
psql -d postgres
psql yelp < /home/ubuntu/yelp.pgsql 
psql -d yelp
mkdir apps
cd apps
mkdir yelp-app
cd yelp-app/
pm2 status
cd apps/yelp-app/client/
ls
npm install
ls
nano package.json
npm run build
ls
cd src
ls
nano App.jsx 
cd ../..
cd client/
npm run build
cd src/components/
ls
nano AddReview.jsx 
nano RestaurantList.jsx 
nano UpdateRestaurant.jsx 
cd ..
cd routes/
nano RestaurantDetailPage.jsx 
cd ../..
npm run build
cd build/
clear
ls
sudo apt install nginx -y
sudo systemctl enable nginx
systemctl status nginx
cd ~
cd /etc/nginx/
cd sites-available/
ls
clear
cat default 
ls
sudo cp default yelp.xyz
sudo nano yelp.xyz 
sudo ln -s /etc/nginx/sites-available/yelp.xyz /etc/nginx/sites-enabled/
systemctl restart nginx
sudo systemctl restart nginx
cd ~
ls
cd /etc/nginx/sites-available/
ls
nano yelp.xyz 
sudo systemctl restart nginx
sudo nano yelp.xyz 
sudo systemctl restart nginx
sudo nano yelp.xyz 
sudo systemctl restart nginx
cd ~
nano .env
source .env
nano .env
source .env
printenv | grep -i pg | grep -i po
printenv | grep -i pg
printenv | grep -i port
psql
psql -d yelp
sudo -i -u postgres
nano .env
source .env
printenv | grep -i pg
psql -d yelp
ls -la
nano .profile 
exit
ls
cd apps/yelp-app/client/src/routes/
ls
nano RestaurantDetailPage.jsx 
cd ../components/
ls
nano RestaurantList.jsx 
clear
pm2 restart 0
pm2 start yelp-app
pm2 stop 0
pm2 status
pm2 start /home/ubuntu/apps/yelp-app/server/server.js --name yelp-app
pm2 status
clear
sudo systemctl restart nginx
sudo systemctl status nginx
pm2 logs
cd ../..
npm run build
sudo systemctl status nginx
sudo systemctl restart nginx
psql --version
psql -d yelp
exit
psql -d yelp
cat .env
nano .env
pm2 status
printenv | grep -i pg
cat .env
exit
printenv | grep -i pg
printenv | grep -i port
clear
pm2 restart 0
