#!/bin/bash
# NEW_VERSION=${1?Error: Pass new version}
CURRENT_VERSION=$(node -p "require('./package.json').version") 
# NEW_VERSION={CURRENT_VERSION + 1}
NEW_VERSION= $(( $CURRENT_VERSION + 1 ))

echo "$CURRENT_VERSION + 1" | bc

sed -i '' "s/${CURRENT_VERSION}/${NEW_VERSION}/" package.json
# cat package.json