# Old Takers Soccer League Platform

Production-style starter for **Old Takers Soccer League** (Houston-based adult over 35 competitive community soccer league).

## Stack
- Frontend: React (JavaScript), React Router
- Backend: ASP.NET Core Web API (.NET 8, C#)
- Database: SQL Server
- ORM: Entity Framework Core

## Project Structure
- `frontend/` React application (public website + full admin portal)
- `backend/OldTakers.Api/` ASP.NET Core API with EF Core entities/services/controllers

## Local Development
### Backend
1. Install .NET 8 SDK and SQL Server.
2. Update `backend/OldTakers.Api/appsettings.json` connection string if needed.
3. Run:
   - `cd backend/OldTakers.Api`
   - `dotnet restore`
   - `dotnet run`

### Frontend
1. Install Node.js 20+.
2. Run:
   - `cd frontend`
   - `npm install`
   - `npm start`
3. Optionally set `REACT_APP_API_URL` to API base URL.

## Admin Setup
- Open `/admin/login`.
- Seeded demo credentials:
  - username: `admin`
  - password: `admin123`
- Admin route map:
  - `/admin/dashboard`
  - `/admin/site-content`
  - `/admin/seasons`
  - `/admin/divisions`
  - `/admin/teams`
  - `/admin/team-registrations`
  - `/admin/players`
  - `/admin/matches`
  - `/admin/standings`
  - `/admin/rules`
  - `/admin/sponsors`
  - `/admin/news`
  - `/admin/contact-messages`
  - `/admin/settings`

## Database Setup (EF Core)
- Current startup uses `EnsureCreated` and seed data for first-run initialization.
- Add migrations:
  - `dotnet tool install --global dotnet-ef`
  - `cd backend/OldTakers.Api`
  - `dotnet ef migrations add InitialCreate`
  - `dotnet ef database update`

## API Endpoint Summary
Core/Public + Admin endpoints include:
- `POST /api/auth/login`
- `GET /api/admindashboard/summary`
- `GET/POST/DELETE /api/sitecontent` (+ `GET /api/sitecontent/{key}`)
- `GET/PUT /api/settings`
- `GET/POST/PUT/DELETE /api/seasons`
- `GET/POST/PUT/DELETE /api/divisions`
- `GET/POST/PUT/DELETE /api/teams`
- `GET/POST/PUT/DELETE /api/players`
- `GET/POST/PUT/DELETE /api/matches`
- `GET/POST/PUT/DELETE /api/standings`
- `GET/POST/PUT/DELETE /api/rules`
- `GET/POST/PUT/DELETE /api/sponsors`
- `POST /api/sponsors/inquiry`
- `GET/POST/PUT/DELETE /api/news`
- `GET/POST /api/teamregistrations`
- `GET/POST /api/playerregistrations`
- `GET/POST /api/contactmessages`

## How admin data feeds public site
- Homepage hero text/buttons: `SiteContent`
- Footer description/contact: `SiteContent` + `Settings`
- Upcoming matches: `Matches`
- Leaders table: `Standings`
- Rules accordion: `LeagueRules`
- Sponsors/news pages: `Sponsors`, `News`

## Future Enhancements
- JWT auth + hashed passwords + refresh tokens
- granular role-based auth policies
- automated standings recalculation from finalized results
- upload pipelines for logos and media
- audit trail tables and activity logs

## Deployment Guidance
- Backend: deploy ASP.NET Core API to Azure App Service, AWS Elastic Beanstalk, or container host.
- Database: Azure SQL / SQL Server managed instance.
- Frontend: Vercel/Netlify/Azure Static Web Apps with API base URL env variable.
