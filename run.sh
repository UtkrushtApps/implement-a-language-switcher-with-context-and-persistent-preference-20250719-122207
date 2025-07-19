#!/bin/bash
set -e
bash ./install.sh
if [ "$1" = "build" ]; then
  echo "[INFO] Building for production..."
  npm run build
  echo "[INFO] Starting the static server on port 5000..."
  npm run start
else
  echo "[INFO] Starting the dev server..."
  npm run dev
fi
