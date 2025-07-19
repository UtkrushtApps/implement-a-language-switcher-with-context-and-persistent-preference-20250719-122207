#!/bin/bash
set -e
if ! command -v npm >/dev/null; then
  echo "[ERROR] npm is not installed. Please install Node.js and npm first." >&2
  exit 1
fi
if ! command -v npx >/dev/null; then
  echo "[ERROR] npx is not installed. Please install Node.js and npm first." >&2
  exit 1
fi
if [ ! -d node_modules ]; then
  echo "[INFO] Installing dependencies..."
  npm install || { echo '[ERROR] npm install failed.' >&2; exit 2; }
else
  echo "[INFO] Dependencies already installed."
fi
echo "[INFO] Environment setup complete."
