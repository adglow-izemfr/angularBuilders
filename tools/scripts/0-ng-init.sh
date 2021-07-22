echo "🚧 global prepare";

npm i -g @angular/cli@latest
npm i -g @nrwl/cli@latest
npm i -g json

echo "🏠 global prepare";

echo "🚧 init nx-workspace";

read -p "Organization: " ORGANIZATION
read -p "Repository name: " REPOSITORY
read -p "App name: [www] " APPNAME
APPNAME=${APPNAME:-'www'}
npm init nx-workspace $REPOSITORY --appName=$APPNAME --defaultBase=main --interactive=false --linter=eslint --nxCloud=false --npmScope=$ORGANIZATION --preset=angular --style=css
cd $REPOSITORY

if [ $? -ne 0 ]; then
   # The repository does not have the expected name
   # The last directory created is used as NEWREPOSITORY
   NEWREPOSITORY=$(ls -td -- */ | head -n 1);
   cd $NEWREPOSITORY

fi

git branch -M main

read -p "Is the GIT repo already published? (Y/n)[Y]" -n1 PUBLISHED
PUBLISHED=${PUBLISHED:-Y}
echo

if [ $PUBLISHED = "n" ]
then
  git remote add origin https://github.com/$ORGANIZATION/$REPOSITORY.git
fi

git add *
git commit -m 'chore: init nx-workspace'

echo "🏠 init nx-workspace";
