# tractrac

Trac Trac Assessment

## First Deploy

If making a first time deploy, follow these steps:

**Install Dependencies**

```bash
cd backend
npm i
```

```bash
cd frontend
npm i
```

**Environmental Variables**

Simply rename the existing `.env.example` file to `.env` and fill in the appropriate values.

**Database**

```bash
npm run create:db
npm run create:table
```

To create the needed database and table (this assumes you've already setup a mysql server)

## Start App

**Production**

```bash
npm run start
```
