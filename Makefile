.PHONY: install dev build clean

# Install dependencies
install:
	npm install

# Run development server
dev:
	npm run dev -- --host 0.0.0.0

# Build the project
build:
	npm run build

# Clean build artifacts
clean:
	rm -rf dist .astro
