using OldTakers.Api.Models;

namespace OldTakers.Api.Data;

public static class DbSeeder
{
    public static void Seed(LeagueDbContext db)
    {
        if (db.Seasons.Any()) return;

        var season = new Season { Name = "2026 Summer", IsActive = true };
        db.Seasons.Add(season);
        db.SaveChanges();

        var premier = new Division { Name = "Premier 35+", SeasonId = season.Id };
        var champ = new Division { Name = "Championship 35+", SeasonId = season.Id };
        db.Divisions.AddRange(premier, champ);
        db.SaveChanges();

        var teams = new[] {
            new Team { Name = "Bayou United 35+", DivisionId = premier.Id },
            new Team { Name = "Heights Veterans FC", DivisionId = premier.Id },
            new Team { Name = "Katy Strikers 35", DivisionId = champ.Id }
        };
        db.Teams.AddRange(teams);
        db.Sponsors.AddRange(
            new Sponsor { Name = "Bayou Sports Medicine", Tier = "Gold", ContactEmail = "partner@bayousports.com" },
            new Sponsor { Name = "Houston Boot Room", Tier = "Silver", ContactEmail = "hello@bootroom.com" });
        db.NewsPosts.Add(new NewsPost { Title = "Season Registration Open", Content = "Adult over 35 league registration is now open.", PublishedOnUtc = DateTime.UtcNow });
        db.LeagueRulesSections.Add(new LeagueRulesSection { Anchor = "eligibility", Title = "Eligibility", Content = "Players must be 35+ and complete all waivers." });
        db.SaveChanges();
    }
}
