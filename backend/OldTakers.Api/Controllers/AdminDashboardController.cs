using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminDashboardController(LeagueDbContext db) : ControllerBase
{
    [HttpGet("summary")]
    public IActionResult Summary()
    {
        var activeSeason = db.Seasons.FirstOrDefault(s => s.IsActive)?.Name ?? "N/A";
        var unreadContacts = db.ContactMessages.Count(c => c.InquiryType != "Closed");

        return Ok(new
        {
            activeSeason,
            openTeamRegistrations = db.TeamRegistrations.Count(),
            playerSignups = db.PlayerRegistrations.Count(),
            upcomingMatchesThisWeek = db.Matches.Count(m => m.MatchDateUtc >= DateTime.UtcNow && m.MatchDateUtc <= DateTime.UtcNow.AddDays(7)),
            unreadContactMessages = unreadContacts,
            publishedNewsPosts = db.NewsPosts.Count(),
            activeSponsors = db.Sponsors.Count(),
            teamsByDivision = db.Divisions.Select(d => new { division = d.Name, teams = db.Teams.Count(t => t.DivisionId == d.Id) })
        });
    }
}
