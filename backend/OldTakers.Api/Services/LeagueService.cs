using OldTakers.Api.Data;
using OldTakers.Api.DTOs;
using OldTakers.Api.Models;

namespace OldTakers.Api.Services;

public class LeagueService(LeagueDbContext db)
{
    public IEnumerable<Team> GetTeams() => db.Teams.OrderBy(t => t.Name).ToList();
    public IEnumerable<Player> GetPlayers() => db.Players.OrderBy(p => p.LastName).ToList();
    public IEnumerable<Match> GetMatches() => db.Matches.OrderBy(m => m.MatchDateUtc).ToList();
    public IEnumerable<Standing> GetStandings() => db.Standings.OrderByDescending(s => s.Points).ToList();
    public IEnumerable<Sponsor> GetSponsors() => db.Sponsors.OrderBy(s => s.Tier).ToList();
    public IEnumerable<NewsPost> GetNews() => db.NewsPosts.OrderByDescending(n => n.PublishedOnUtc).ToList();
    public IEnumerable<LeagueRulesSection> GetRules() => db.LeagueRulesSections.ToList();
    public IEnumerable<TeamRegistration> GetTeamRegistrations() => db.TeamRegistrations.OrderByDescending(t => t.CreatedOnUtc).ToList();
    public IEnumerable<PlayerRegistration> GetPlayerRegistrations() => db.PlayerRegistrations.OrderByDescending(p => p.CreatedOnUtc).ToList();
    public IEnumerable<ContactMessage> GetContactMessages() => db.ContactMessages.OrderByDescending(c => c.SubmittedOnUtc).ToList();

    // Admin CRUD operations
    public Team CreateTeam(Team model) { db.Teams.Add(model); db.SaveChanges(); return model; }
    public Player CreatePlayer(Player model) { db.Players.Add(model); db.SaveChanges(); return model; }
    public Match CreateMatch(Match model) { db.Matches.Add(model); db.SaveChanges(); return model; }
    public Standing CreateStanding(Standing model) { db.Standings.Add(model); db.SaveChanges(); return model; }
    public Sponsor CreateSponsor(Sponsor model) { db.Sponsors.Add(model); db.SaveChanges(); return model; }
    public NewsPost CreateNews(NewsPost model) { db.NewsPosts.Add(model); db.SaveChanges(); return model; }

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
            db.WaiverAcceptances.Add(new WaiverAcceptance { RegistrantType = nameof(TeamRegistration), RegistrantId = model.Id });

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
            db.WaiverAcceptances.Add(new WaiverAcceptance { RegistrantType = nameof(PlayerRegistration), RegistrantId = model.Id });

        db.SaveChanges();
        return model;
    }

    public ContactMessage CreateContactMessage(ContactMessageDto dto)
    {
        var msg = new ContactMessage { Name = dto.Name, Email = dto.Email, Phone = dto.Phone ?? string.Empty, InquiryType = dto.InquiryType, Subject = dto.Subject ?? string.Empty, Message = dto.Message, Status = "New" };
        db.ContactMessages.Add(msg);
        db.SaveChanges();
        return msg;
    }
}
