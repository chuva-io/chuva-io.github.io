#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e 

# Build TS files
echo "Building TypeScript files..."
rm -rf dist
tsc

# Copy files to dist
echo "Copying project files to dist..."
rsync --exclude='dist' --exclude='less' . ./dist/

# Build Less project
echo "Building Less project..."
cd dist
less-cli build chuva-monorepo

# cp -r -n ../ ../dist

# # Copy types to shared
# ## Build the types package first
# echo "Building types package..."
# cd ../../
# yarn build:types

# ## Copy the built types to the backend
# echo "Copying types to Less backend..."
# cd ./apps/be
# mkdir -p ./less/shared/types
# cp -r ../../packages/types/dist/ ./less/shared/types/
