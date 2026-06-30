# Architecture Decision Record (ADR) — Development Environment

## 1. Stack Analysis
- **Runtime:** Node.js 22.12.0 (Pinned to match `package.json` engines).
- **OS Base:** Debian Bullseye Slim (Chosen for stability, security, and minimal footprint).
- **Package Manager:** npm (Primary) / pnpm (Available globally).
- **Build System:** Astro (SSG).

## 2. Design Decisions

### User & Permissions (Fixing the `make install` error)
The previous failure was caused by a mismatch between the root-owned container filesystem and the host-mounted volume.
- **Solution:** Implemented a dedicated `developer` user (UID 1000) and explicitly set `remoteUser` in `devcontainer.json`.
- **Outcome:** All commands executed via `make` or terminal now run with correct user permissions.

### Version Governance
- **Pinned Node Version:** Instead of a floating `node:latest` or `node:20`, we now use `node:22.12.0-bullseye-slim` to match the project's engine requirements exactly.
- **Deterministic Initialization:** The `postCreate.sh` script ensures that dependencies are installed consistently every time the container is rebuilt.

### Image Selection Rationale
- **Sourcing:** Moved from the generic `mcr.microsoft.com/devcontainers/javascript-node` (too bloated) to a custom `node-slim` image.
- **Layers:** Optimized to include only essential system tools (`curl`, `git`, `vim`), reducing the attack surface and image size.

## 3. Security Audit
- [x] **Non-root User:** Application runs as `developer`, not `root`.
- [x] **Minimal Packages:** No unnecessary build tools installed.
- [x] **Clean Layers:** `rm -rf /var/lib/apt/lists/*` used to minimize image size.
- [x] **Deterministic Builds:** Versions pinned in Dockerfile.

## 4. Recovery & Rebuild Process
To reset the environment:
1. `Dev Containers: Rebuild Container` (via VS Code command palette).
2. The `postCreate.sh` will automatically trigger `npm install`.
