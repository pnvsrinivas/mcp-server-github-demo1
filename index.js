const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'MCP Server is running' });
});

app.get('/mcp', (req, res) => {
  res.json({ 
    name: 'mcp-server-github-demo1', 
    version: '1.0.0',
    description: 'MCP Server for GitHub API integration'
  });
});

app.listen(PORT, () => {
  console.log(`MCP Server listening on port ${PORT}`);
});
