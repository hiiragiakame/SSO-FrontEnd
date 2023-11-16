#!/bin/sh

# Source .env file if any
if [ -f "./.env" ]; then
    echo ".env file found. Sourcing .env ..."
    . ./.env
fi

ROOT_DIR=/usr/share/nginx/html

env 

echo "Replacing env constants in JS"
for file in "$ROOT_DIR"/static/js/main.*.js*; do
    echo "Processing $file ..."

    sed -i 's|SALEMT_APP_BACKEND_URL|'"${VUE_APP_BASE_URL}"'|g' "$file"
    sed -i 's|SALEMT_APP_JSPM_LICENSE_PRINT|'"${VUE_APP_JSPM_LICENSE_PRINT}"'|g' "$file"

done
