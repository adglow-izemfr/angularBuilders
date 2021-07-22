echo "🚧 shared libraries ";

read -p "What prefix do you wanna use? [ab] " PREFIX
PREFIX=${PREFIX:-'ab'}

echo " generate global library";
nx g library global --directory=shared --importPath=@$PREFIX/global --tags='shared, core'
nx g class store --project=shared-global
ng g interface models/action --project shared-global
ng g interface models/tracker-entry --project shared-global
nx g s TrackerStore --project=shared-global
nx g s ErrorHandler --project=shared-global
git add *
#git commit -m 'feat: generate global library'
#
#echo " generate data library";
#nx g library data --directory=shared --importPath=@$PREFIX/data  --tags='shared, core'
#nx g interceptor adapter --project=shared-data
#nx g interceptor tracker --project=shared-data
#nx g class store --project=shared-data
#git add *
#git commit -m 'feat: generate data library'
#
#echo " generate ui library";
#nx g library ui --directory=shared --importPath=@$PREFIX/ui --prefix=$PREFIX-ui  --tags='shared, ui'
#nx g c components/header --project=shared-ui --export=true
#ng g interface models/header --project shared-ui
#nx g c components/notification --project=shared-ui --export=true
#nx g c templates/box --project=shared-ui --export=true --type=Template
#nx g c templates/card --project=shared-ui --export=true --type=Template
#ng g interface models/card --project shared-ui
#nx g directive directives/track --project=shared-ui --export=true
#nx g pipe pipes/truncate --project=shared-ui --export=true
#
#git add *
#git commit -m 'feat: generate ui library'
#
#echo " generate form library";
#nx g library form --directory=shared --importPath=@$PREFIX/form --prefix=$PREFIX-form  --tags='shared, ui'
#nx g c components/control --project=shared-form --export=true
#nx g class validators --project=shared-form
#git add *
#git commit -m 'feat: generate ui library'
#
#echo " generate layout library";
#nx g library layout --directory=shared --importPath=@$PREFIX/layout --prefix=$PREFIX --tags='shared, ui'
#nx g c navbar --project=shared-layout --export=true --type=Widget
#nx g c footer --project=shared-layout --export=true
#git add *
#git commit -m 'feat: generate layout library'

echo "🏠 shared libraries ";
