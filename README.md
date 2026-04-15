# MCP Server GitHub Demo 1

A Model Context Protocol (MCP) server for GitHub API integration.

## Overview

This project demonstrates a basic MCP server that can integrate with GitHub APIs through the configured MCP protocol.

## Setup

### Prerequisites
- Node.js 18+
- Docker (optional)

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

The server will start on port 3000.

### Running with Docker

```bash
docker build -t mcp-server-github-demo1 .
docker run -p 3000:3000 mcp-server-github-demo1
```

## Configuration

The MCP server is configured in `.vscode/mcp.json` with:
- Type: HTTP
- Endpoint: `https://api.githubcopilot.com/mcp/`
- Authentication: GitHub Personal Access Token (PAT)

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /mcp` - MCP server information

## License

MIT
