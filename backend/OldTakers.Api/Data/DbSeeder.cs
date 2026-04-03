using OldTakers.Api.Models;

namespace OldTakers.Api.Data;

public static class DbSeeder
{
    public static void Seed(LeagueDbContext db)
    {
        if (db.Seasons.Any()) return;

        var season = new Season { Name = "Fall 2026", IsActive = true };
        db.Seasons.Add(season);
        db.SaveChanges();

        var d1 = new Division { Name = "Division 1", SeasonId = season.Id };
        var d2 = new Division { Name = "Division 2", SeasonId = season.Id };
        var d3 = new Division { Name = "Division 3", SeasonId = season.Id };
        db.Divisions.AddRange(d1, d2, d3);
        db.SaveChanges();

        var teams = new[] {
            new Team { Name = "Bayou United 35+", DivisionId = d1.Id },
            new Team { Name = "Heights Veterans FC", DivisionId = d1.Id },
            new Team { Name = "Katy Strikers 35", DivisionId = d2.Id },
            new Team { Name = "Pearland Athletic 35+", DivisionId = d2.Id },
            new Team { Name = "Sugar Land Ironlegs", DivisionId = d3.Id }
        };
        db.Teams.AddRange(teams);
        db.SaveChanges();

        db.TeamRegistrations.AddRange(
            new TeamRegistration { TeamName = "Energy City Over 35", ManagerName = "Luis Torres", ManagerEmail = "luis@example.com", ManagerPhone = "713-555-0001", TeamHomeArea = "West Houston", DivisionPreference = "Division 2", EstimatedRosterSize = 18, WaiverAccepted = true },
            new TeamRegistration { TeamName = "Northline Veterans", ManagerName = "Marco Diaz", ManagerEmail = "marco@example.com", ManagerPhone = "713-555-0002", TeamHomeArea = "North Houston", DivisionPreference = "Division 3", EstimatedRosterSize = 17, WaiverAccepted = true }
        );

        db.PlayerRegistrations.AddRange(
            new PlayerRegistration { FirstName = "Andre", LastName = "Mills", DateOfBirth = DateTime.UtcNow.AddYears(-38), Email = "andre@example.com", Phone = "713-555-1001", TeamSelection = "Free Agent", WaiverAccepted = true, ConductAccepted = true },
            new PlayerRegistration { FirstName = "Carlos", LastName = "Nunez", DateOfBirth = DateTime.UtcNow.AddYears(-41), Email = "carlos@example.com", Phone = "713-555-1002", TeamSelection = "Free Agent", WaiverAccepted = true, ConductAccepted = true }
        );

        db.Matches.AddRange(
            new Match { SeasonId = season.Id, DivisionId = d1.Id, HomeTeamId = teams[0].Id, AwayTeamId = teams[1].Id, MatchDateUtc = DateTime.UtcNow.AddDays(4), Location = "Houston Sports Park", Status = "Scheduled" },
            new Match { SeasonId = season.Id, DivisionId = d2.Id, HomeTeamId = teams[2].Id, AwayTeamId = teams[3].Id, MatchDateUtc = DateTime.UtcNow.AddDays(6), Location = "Bear Creek Complex", Status = "Final" }
        );

        db.Standings.AddRange(
            new Standing { TeamId = teams[0].Id, Played = 7, Wins = 5, Draws = 1, Losses = 1, GoalsFor = 16, GoalsAgainst = 7, Points = 16 },
            new Standing { TeamId = teams[1].Id, Played = 7, Wins = 4, Draws = 2, Losses = 1, GoalsFor = 14, GoalsAgainst = 8, Points = 14 },
            new Standing { TeamId = teams[2].Id, Played = 7, Wins = 3, Draws = 2, Losses = 2, GoalsFor = 10, GoalsAgainst = 9, Points = 11 }
        );

        db.Sponsors.AddRange(
            new Sponsor { Name = "Bayou Sports Medicine", Tier = "Title Sponsor", ContactEmail = "partner@bayousports.com" },
            new Sponsor { Name = "Houston Boot Room", Tier = "Gold", ContactEmail = "hello@bootroom.com" },
            new Sponsor { Name = "Gulf Coast Recovery Lab", Tier = "Community Partner", ContactEmail = "contact@gulfcoastrecovery.com" }
        );

        db.NewsPosts.AddRange(
            new NewsPost { Title = "Fall Registration Open", Content = "Team and player registration windows are open.", PublishedOnUtc = DateTime.UtcNow },
            new NewsPost { Title = "Week 1 Fixtures Posted", Content = "Opening fixtures now live.", PublishedOnUtc = DateTime.UtcNow.AddDays(-2) },
            new NewsPost { Title = "Sponsor Spotlight", Content = "Welcome our new title sponsor.", PublishedOnUtc = DateTime.UtcNow.AddDays(-4) }
        );

        db.ContactMessages.AddRange(
            new ContactMessage { Name = "Sam Reed", Email = "sam@example.com", InquiryType = "General", Message = "When does registration close?" },
            new ContactMessage { Name = "Alicia Park", Email = "alicia@example.com", InquiryType = "Sponsorship", Message = "Interested in partner packages." }
        );

        db.LeagueRulesSections.AddRange(
            new LeagueRulesSection { Anchor = "eligibility", Title = "Age Eligibility & Verification", Content = "Players must be 35+ by season start and provide valid ID." },
            new LeagueRulesSection { Anchor = "rosters", Title = "Rosters & Player Registration", Content = "Managers must submit complete rosters before lock date." },
            new LeagueRulesSection { Anchor = "discipline", Title = "Discipline & Suspensions", Content = "Cards and misconduct are tracked weekly." }
        );

        db.AdminUsers.Add(new AdminUser { Username = "admin", PasswordHash = "admin123", Role = "Admin", IsActive = true });

        db.SiteContentSettings.AddRange(
            new SiteContentSetting { Key = "hero.label", Value = "FALL 2026 REGISTRATION OPEN" },
            new SiteContentSetting { Key = "hero.title1", Value = "STILL GOT IT?" },
            new SiteContentSetting { Key = "hero.title2", Value = "PROVE IT." },
            new SiteContentSetting { Key = "hero.text", Value = "Houston's premier competitive 11v11 soccer league exclusively for players 35 and older." },
            new SiteContentSetting { Key = "hero.primaryCtaText", Value = "REGISTER YOUR TEAM" },
            new SiteContentSetting { Key = "hero.primaryCtaLink", Value = "/team-registration" },
            new SiteContentSetting { Key = "hero.secondaryCtaText", Value = "JOIN AS FREE AGENT" },
            new SiteContentSetting { Key = "hero.secondaryCtaLink", Value = "/player-registration" },
            new SiteContentSetting { Key = "footer.description", Value = "Houston 35+ competitive community soccer league." },
            new SiteContentSetting { Key = "footer.email", Value = "league@oldtakerssoccer.com" },
            new SiteContentSetting { Key = "footer.location", Value = "Houston, Texas" }
        );

        db.LeagueSettings.Add(new LeagueSetting());

        db.SaveChanges();
    }
}
