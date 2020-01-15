#!/bin/sh
## || true for first installation as a safe guard for node preinstalls
rm -rf node_modules/ || true
rm -f package-lock.json || true
npm install
