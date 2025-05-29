# Guest Request Logging Workflow: NestJS + Next.js + PostgreSQL + Prisma + n8n

This is a full-stack web application built with:

- 🔧 **NestJS** as the backend framework
- 💻 **Next.js** as the frontend framework
- 🛢️ **PostgreSQL** as the database
- 🧬 **Prisma** as the ORM
- ⚙️ **n8n** for workflow automation and external service integrations

---

## 🚀 Features

- RESTful API built with NestJS
- PostgreSQL database schema managed via Prisma ORM
- Integration with **n8n** for handling automation workflows (e.g. webhooks, scheduled jobs)

---

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL
- [n8n](https://n8n.io) installed locally or via Docker
- npm

---

### Setup(Back-end and Database)

Setup nest project 
```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```
Install prisma
```bash
$ npm install prisma --save-dev
$ npm install @prisma/client
```
Initialize prisma
```bash
$ npx prisma init
```
Run database migrations
```bash
$ npx prisma migrate dev
```
Start development server
```bash
$ npm run start:dev
```
### Setup(Front-end)

Setup next project
```bash
$ npx create-next-app@latest
```
Start development server at port(3001)
```bash
$ npm run dev -- -p 3001
```

### n8n Workflow
It consists of different nodes
- Trigger Node (Whatsapp message)
- If node
- Set node
- HTTP request node
- Whatsapp webhook(To send messages)

![Screenshot (138)](https://github.com/user-attachments/assets/0e827d25-658a-4494-9868-2136f15f2256)

### Vercel deployement
Deployed next app link(alikhangydexpinternassignment.vercel.app)

To deploy your next app on vercel
- Make account on vercel
- Link your github repository
- Import the repository you want to deploy
- Setup environmental variables
- Click on Deploy

![Screenshot (139)](https://github.com/user-attachments/assets/b4184d66-baf3-433f-bb48-f11ee470e59e)

### Whatsapp API
The whatsapp API is crucial for this project as our n8n workflow works around it
For Whatsapp API 
- Create facebook developers account [Link](https://developers.facebook.com)
- Create App and configure your App ID and App Secret in App settings
- Use Whatsapp API
![Screenshot (140)](https://github.com/user-attachments/assets/d37c3c2b-649b-4d50-8955-537dce1f3eae)

- Generate access token to send back message
![Screenshot (141)](https://github.com/user-attachments/assets/5ef42bb6-939d-4f98-ad52-09c34e86281d)

- Put these information in Whatsapp trigger and output Node in n8n.io workflow

### Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```




