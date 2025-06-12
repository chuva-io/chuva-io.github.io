#!/bin/bash

# Copy types to shared
## Build the types package first
echo "Building types package..."
cd ../../
yarn build:types

## Copy the built types to the backend
echo "Copying types to Less backend..."
cd ./apps/be
mkdir -p ./less/shared/types
cp -r ../../packages/types/dist/ ./less/shared/types/
