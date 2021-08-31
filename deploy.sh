branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
CURRENT_VERSION=$(node -p "require('./package.json').version")

git add .

git commit -m "$@ (v$CURRENT_VERSION)"

echo ===================================================
echo Pushing to github branch $branch ...
echo ===================================================
git push origin ${branch}