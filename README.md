# Backend - GraphQL Server for Map Points

This is a simple GraphQL backend server that generates and serves 8500+ points (simulating 2G/3G/4G base stations) for a map application.

Each point has:
- `id`: Unique identifier
- `latitude`: Latitude coordinate
- `longitude`: Longitude coordinate
- `status`: "working" or "broken"
- `networkType`: "2G", "3G", or "4G"

---

## Technologies Used
- Node.js
- Apollo Server
- GraphQL
- TypeScript

---

## Installation

```bash
cd backend
npm install
npm run dev

