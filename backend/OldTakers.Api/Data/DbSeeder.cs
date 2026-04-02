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
            new Team { Name = "Katy Strikers 35", DivisionId = champ.Id },
            new Team { Name = "Pearland Athletic 35+", DivisionId = champ.Id }
        };
        db.Teams.AddRange(teams);
        db.SaveChanges();

        db.Matches.AddRange(
            new Match { SeasonId = season.Id, DivisionId = premier.Id, HomeTeamId = teams[0].Id, AwayTeamId = teams[1].Id, MatchDateUtc = DateTime.UtcNow.AddDays(7), Location = "Houston Sports Park", Status = "Scheduled" },
            new Match { SeasonId = season.Id, DivisionId = champ.Id, HomeTeamId = teams[2].Id, AwayTeamId = teams[3].Id, MatchDateUtc = DateTime.UtcNow.AddDays(8), Location = "Bear Creek Complex", Status = "Scheduled" }
        );

        db.Standings.AddRange(
            new Standing { TeamId = teams[0].Id, Played = 7, Wins = 5, Draws = 1, Losses = 1, GoalsFor = 16, GoalsAgainst = 7, Points = 16 },
            new Standing { TeamId = teams[1].Id, Played = 7, Wins = 4, Draws = 2, Losses = 1, GoalsFor = 14, GoalsAgainst = 8, Points = 14 },
            new Standing { TeamId = teams[2].Id, Played = 7, Wins = 3, Draws = 2, Losses = 2, GoalsFor = 10, GoalsAgainst = 9, Points = 11 }
        );

        db.Sponsors.AddRange(
            new Sponsor { Name = "Bayou Sports Medicine", Tier = "Gold", ContactEmail = "partner@bayousports.com" },
            new Sponsor { Name = "Houston Boot Room", Tier = "Silver", ContactEmail = "hello@bootroom.com" },
            new Sponsor { Name = "Gulf Coast Recovery Lab", Tier = "Community", ContactEmail = "contact@gulfcoastrecovery.com" }
        );

        db.NewsPosts.AddRange(
            new NewsPost { Title = "Season Registration Open", Content = "Adult over 35 league registration is now open.", PublishedOnUtc = DateTime.UtcNow },
            new NewsPost { Title = "Matchweek 1 Venues Confirmed", Content = "Fields assigned across Houston with updated kickoff windows.", PublishedOnUtc = DateTime.UtcNow.AddDays(-2) }
        );

        db.LeagueRulesSections.AddRange(
            new LeagueRulesSection { Anchor = "eligibility", Title = "Eligibility", Content = "Players must be 35+ and complete all waivers." },
            new LeagueRulesSection { Anchor = "weather", Title = "Houston Weather", Content = "Lightning requires a 30-minute delay from the last strike." }
        );

        db.SaveChanges();
    }
}
