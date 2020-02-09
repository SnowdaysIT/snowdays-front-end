#! /bin/sh

## This file generates public/runtime-config-js file
## as a workaround for the inability of React of dealing
## with runtime environment variables definition

# load frontend env
set -o allexport
. ./.env.frontend || true
set +o allexport
# adds envsubst
apk add gettext

envsubst < src/assets/js/runtime-config.template.js > src/assets/js/runtime-config.js
