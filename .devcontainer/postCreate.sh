#!/bin/bash
set -e

echo "🚀 Initializing Credibility Hub Dev Environment..."

# We are already in /workspaces/platform thanks to devcontainer.json
# Fix any lingering permission issues on the current directory
# sudo chown -R developer:developer .

# Install dependencies
# We use npm install as defined in package.json
npm install

echo "✅ Environment initialized successfully."
