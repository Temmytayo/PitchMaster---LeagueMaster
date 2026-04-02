using OldTakers.Api.Data;
using OldTakers.Api.DTOs;
using OldTakers.Api.Models;

namespace OldTakers.Api.Services;

public class LeagueService(LeagueDbContext db)
{
    public IEnumerable<Team> GetTeams() => db.Teams.ToList();
    public IEnumerable<Match> GetMatches() => db.Matches.ToList();
    public IEnumerable<Standing> GetStandings() => db.Standings.ToList();
    public IEnumerable<Sponsor> GetSponsors() => db.Sponsors.ToList();
    public IEnumerable<NewsPost> GetNews() => db.NewsPosts.OrderByDescending(n => n.PublishedOnUtc).ToList();
    public IEnumerable<LeagueRulesSection> GetRules() => db.LeagueRulesSections.ToList();

    public TeamRegistration CreateTeamRegistration(TeamRegistrationDto dto)
    {
        var model = new TeamRegistration { TeamName = dto.TeamName, ManagerName = dto.ManagerName, ManagerEmail = dto.ManagerEmail, ManagerPhone = dto.ManagerPhone, TeamHomeArea = dto.TeamHomeArea, DivisionPreference = dto.DivisionPreference, EstimatedRosterSize = dto.EstimatedRosterSize, WaiverAccepted = dto.WaiverAccepted };
        db.TeamRegistrations.Add(model);
        db.PaymentRecords.Add(new PaymentRecord { RegistrantType = "TeamRegistration", RegistrantId = model.Id, Amount = 850, Status = "Pending" });
        db.SaveChanges();
        return model;
    }

    public PlayerRegistration CreatePlayerRegistration(PlayerRegistrationDto dto)
    {
        var model = new PlayerRegistration { FirstName = dto.FirstName, LastName = dto.LastName, DateOfBirth = dto.DateOfBirth, Email = dto.Email, Phone = dto.Phone, TeamSelection = dto.TeamSelection, WaiverAccepted = dto.WaiverAccepted, ConductAccepted = dto.ConductAccepted };
        db.PlayerRegistrations.Add(model);
        db.PaymentRecords.Add(new PaymentRecord { RegistrantType = "PlayerRegistration", RegistrantId = model.Id, Amount = 115, Status = "Pending" });
        db.SaveChanges();
        return model;
    }

    public ContactMessage CreateContactMessage(ContactMessageDto dto)
    {
        var msg = new ContactMessage { Name = dto.Name, Email = dto.Email, InquiryType = dto.InquiryType, Message = dto.Message };
        db.ContactMessages.Add(msg);
        db.SaveChanges();
        return msg;
    }
}
