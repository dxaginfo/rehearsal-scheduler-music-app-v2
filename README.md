# Rehearsal Scheduler Music App

Automatically schedules and manages band rehearsals, sends reminders, tracks attendance, and suggests optimal times. Mobile-responsive design. Includes secure authentication and integration-ready architecture.

## Tech Stack
- ReactJS
- Node.js + Express
- PostgreSQL
- Docker based deployment

## Features
- Schedule rehearsals and confirm attendance
- Availability suggestion
- Reminders via email/SMS
- Setlist and document management
- In-app chat
- File uploads (sheets, audio)
- Mobile-ready

## Setup
1. Clone repository.
2. `cd` into project directory.
3. Run `docker-compose up` (requires Docker).
4. Visit frontend at `http://localhost:3000`.
5. API runs at `http://localhost:4000`.

## Env Variables
Set environment variables for database and email/SMS API credentials.

## Security
All user data and files are access controlled; passwords hashed and stored securely.
