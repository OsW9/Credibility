FROM node:22-slim

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install essential build tools and system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    vim \
    build-essential \
    ca-certificates \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm globally as root
RUN npm install -g pnpm

# Configure non-root developer user
ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create or update non-root developer user for security and permission consistency
RUN if getent group $USER_GID >/dev/null; then \
        groupmod -n $USERNAME $(getent group $USER_GID | cut -d: -f1); \
    else \
        groupadd --gid $USER_GID $USERNAME; \
    fi \
    && if getent passwd $USER_UID >/dev/null; then \
        usermod -l $USERNAME -d /home/$USERNAME -m $(getent passwd $USER_UID | cut -d: -f1); \
    else \
        useradd --uid $USER_UID --gid $USER_GID -m $USERNAME; \
    fi \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Set the working directory
WORKDIR /workspaces/platform

# Ensure the working directory is owned by the developer user
RUN chown -R $USERNAME:$USERNAME /workspaces/platform

# Switch to the non-root user
USER $USERNAME
