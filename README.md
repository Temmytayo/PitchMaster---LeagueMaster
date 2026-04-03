# Old Takers Soccer League Platform

Production-style starter for **Old Takers Soccer League** (Houston-based adult over 35 competitive community soccer league).

## Stack
- Frontend: React (JavaScript), React Router
- Backend: ASP.NET Core Web API (.NET 8, C#)
- Database: SQL Server
- ORM: Entity Framework Core

## Project Structure
- `frontend/` React application (public website + admin-ready pages)
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

## Database Setup (EF Core)
- Current startup uses `EnsureCreated` and seed data for first-run initialization.
- Add migrations:
  - `dotnet tool install --global dotnet-ef`
  - `cd backend/OldTakers.Api`
  - `dotnet ef migrations add InitialCreate`
  - `dotnet ef database update`

## API Endpoint Summary
- `GET /api/teams`
- `POST /api/teamregistrations`
- `GET /api/players`
- `POST /api/playerregistrations`
- `GET /api/matches`
- `GET /api/standings`
- `GET /api/sponsors`
- `POST /api/sponsors/inquiry`
- `GET /api/news`
- `POST /api/contactmessages`
- `GET /api/rules`
- `GET /api/seasons`
- `GET /api/divisions`

## Future Enhancements
- Full authentication/authorization for admin area
- Full CRUD UI for admin resources
- Payment gateway integration
- File upload for roster and exports/downloadable summaries
- Rich news/article details and CMS-style editing

## Deployment Guidance
- Backend: deploy ASP.NET Core API to Azure App Service, AWS Elastic Beanstalk, or container host.
- Database: Azure SQL / SQL Server managed instance.
- Frontend: Vercel/Netlify/Azure Static Web Apps with API base URL env variable.
