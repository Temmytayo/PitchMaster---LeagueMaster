using OldTakers.Api.Data;
using OldTakers.Api.DTOs;
using OldTakers.Api.Models;

namespace OldTakers.Api.Services;

public class LeagueService(LeagueDbContext db)
{
    public IEnumerable<Team> GetTeams() => db.Teams.OrderBy(t => t.Name).ToList();
    public IEnumerable<Match> GetMatches() => db.Matches.OrderBy(m => m.MatchDateUtc).ToList();
    public IEnumerable<Standing> GetStandings() => db.Standings.OrderByDescending(s => s.Points).ToList();
    public IEnumerable<Sponsor> GetSponsors() => db.Sponsors.OrderBy(s => s.Tier).ToList();
    public IEnumerable<NewsPost> GetNews() => db.NewsPosts.OrderByDescending(n => n.PublishedOnUtc).ToList();
    public IEnumerable<LeagueRulesSection> GetRules() => db.LeagueRulesSections.ToList();
    public IEnumerable<TeamRegistration> GetTeamRegistrations() => db.TeamRegistrations.OrderByDescending(t => t.CreatedOnUtc).ToList();
    public IEnumerable<PlayerRegistration> GetPlayerRegistrations() => db.PlayerRegistrations.OrderByDescending(p => p.CreatedOnUtc).ToList();

    public TeamRegistration CreateTeamRegistration(TeamRegistrationDto dto)
    {
        var model = new TeamRegistration
        {
            TeamName = dto.TeamName,
            ManagerName = dto.ManagerName,
            ManagerEmail = dto.ManagerEmail,
            ManagerPhone = dto.ManagerPhone,
            AssistantManager = dto.AssistantManager,
            TeamHomeArea = dto.TeamHomeArea,
            DivisionPreference = dto.DivisionPreference,
            CompetitiveExperience = dto.CompetitiveExperience,
            JerseyPrimaryColor = dto.JerseyPrimaryColor,
            JerseySecondaryColor = dto.JerseySecondaryColor,
            EstimatedRosterSize = dto.EstimatedRosterSize,
            Comments = dto.Comments,
            WaiverAccepted = dto.WaiverAccepted
        };

        db.TeamRegistrations.Add(model);
        db.SaveChanges();

        db.PaymentRecords.Add(new PaymentRecord
        {
            RegistrantType = nameof(TeamRegistration),
            RegistrantId = model.Id,
            Amount = dto.RegistrationFee,
            Status = dto.PaymentStatus,
            PaymentReference = dto.PaymentReference ?? string.Empty,
            AdminNotes = dto.AdminNotes ?? string.Empty
        });

        if (dto.WaiverAccepted)
        {
            db.WaiverAcceptances.Add(new WaiverAcceptance { RegistrantType = nameof(TeamRegistration), RegistrantId = model.Id });
        }

        db.SaveChanges();
        return model;
    }

    public PlayerRegistration CreatePlayerRegistration(PlayerRegistrationDto dto)
    {
        var model = new PlayerRegistration
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            DateOfBirth = dto.DateOfBirth,
            Email = dto.Email,
            Phone = dto.Phone,
            TeamSelection = dto.TeamSelection,
            PreferredPosition = dto.PreferredPosition,
            EmergencyContactName = dto.EmergencyContactName,
            EmergencyContactPhone = dto.EmergencyContactPhone,
            MedicalNotes = dto.MedicalNotes,
            WaiverAccepted = dto.WaiverAccepted,
            ConductAccepted = dto.ConductAccepted
        };

        db.PlayerRegistrations.Add(model);
        db.SaveChanges();

        db.PaymentRecords.Add(new PaymentRecord
        {
            RegistrantType = nameof(PlayerRegistration),
            RegistrantId = model.Id,
            Amount = dto.RegistrationFee,
            Status = dto.PaymentStatus,
            PaymentReference = dto.PaymentReference ?? string.Empty,
            AdminNotes = dto.AdminNotes ?? string.Empty
        });

        if (dto.WaiverAccepted)
        {
            db.WaiverAcceptances.Add(new WaiverAcceptance { RegistrantType = nameof(PlayerRegistration), RegistrantId = model.Id });
        }

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
