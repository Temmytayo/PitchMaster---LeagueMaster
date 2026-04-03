namespace OldTakers.Api.Models;

public class Season { public int Id { get; set; } public string Name { get; set; } = string.Empty; public bool IsActive { get; set; } }
public class Division { public int Id { get; set; } public string Name { get; set; } = string.Empty; public int SeasonId { get; set; } public Season? Season { get; set; } }
public class Team { public int Id { get; set; } public string Name { get; set; } = string.Empty; public int DivisionId { get; set; } public Division? Division { get; set; } }
public class TeamManager { public int Id { get; set; } public int TeamId { get; set; } public Team? Team { get; set; } public string FullName { get; set; } = string.Empty; public string Email { get; set; } = string.Empty; public string Phone { get; set; } = string.Empty; }
public class Player { public int Id { get; set; } public string FirstName { get; set; } = string.Empty; public string LastName { get; set; } = string.Empty; public DateTime DateOfBirth { get; set; } public string Position { get; set; } = string.Empty; public int? TeamId { get; set; } public Team? Team { get; set; } }

public class TeamRegistration
{
    public int Id { get; set; }
    public string TeamName { get; set; } = string.Empty;
    public string ManagerName { get; set; } = string.Empty;
    public string ManagerEmail { get; set; } = string.Empty;
    public string ManagerPhone { get; set; } = string.Empty;
    public string? AssistantManager { get; set; }
    public string TeamHomeArea { get; set; } = string.Empty;
    public string DivisionPreference { get; set; } = string.Empty;
    public string? CompetitiveExperience { get; set; }
    public bool IsReturningTeam { get; set; }
    public string? JerseyPrimaryColor { get; set; }
    public string? JerseySecondaryColor { get; set; }
    public int EstimatedRosterSize { get; set; }
    public string? Comments { get; set; }
    public bool WaiverAccepted { get; set; }
    public DateTime CreatedOnUtc { get; set; } = DateTime.UtcNow;
}

public class PlayerRegistration
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string TeamSelection { get; set; } = string.Empty;
    public string? PreferredPosition { get; set; }
    public string? EmergencyContactName { get; set; }
    public string? EmergencyContactPhone { get; set; }
    public string? MedicalNotes { get; set; }
    public bool WaiverAccepted { get; set; }
    public bool ConductAccepted { get; set; }
    public DateTime CreatedOnUtc { get; set; } = DateTime.UtcNow;
}

public class TeamRosterEntry { public int Id { get; set; } public int TeamId { get; set; } public Team? Team { get; set; } public int PlayerId { get; set; } public Player? Player { get; set; } }
public class Match { public int Id { get; set; } public int SeasonId { get; set; } public int DivisionId { get; set; } public int HomeTeamId { get; set; } public int AwayTeamId { get; set; } public DateTime MatchDateUtc { get; set; } public string Location { get; set; } = string.Empty; public string Status { get; set; } = "Scheduled"; }
public class Standing { public int Id { get; set; } public int TeamId { get; set; } public Team? Team { get; set; } public int Played { get; set; } public int Wins { get; set; } public int Draws { get; set; } public int Losses { get; set; } public int GoalsFor { get; set; } public int GoalsAgainst { get; set; } public int Points { get; set; } }
public class Sponsor { public int Id { get; set; } public string Name { get; set; } = string.Empty; public string Tier { get; set; } = string.Empty; public string ContactEmail { get; set; } = string.Empty; }
public class NewsPost { public int Id { get; set; } public string Title { get; set; } = string.Empty; public string Content { get; set; } = string.Empty; public DateTime PublishedOnUtc { get; set; } }
public class ContactMessage { public int Id { get; set; } public string Name { get; set; } = string.Empty; public string Email { get; set; } = string.Empty; public string Phone { get; set; } = string.Empty; public string InquiryType { get; set; } = string.Empty; public string Subject { get; set; } = string.Empty; public string Message { get; set; } = string.Empty; public string Status { get; set; } = "New"; public string InternalNotes { get; set; } = string.Empty; public DateTime SubmittedOnUtc { get; set; } = DateTime.UtcNow; }
public class WaiverAcceptance { public int Id { get; set; } public string RegistrantType { get; set; } = string.Empty; public int RegistrantId { get; set; } public DateTime AcceptedOnUtc { get; set; } = DateTime.UtcNow; }
public class PaymentRecord { public int Id { get; set; } public string RegistrantType { get; set; } = string.Empty; public int RegistrantId { get; set; } public decimal Amount { get; set; } public string Status { get; set; } = "Pending"; public string PaymentReference { get; set; } = string.Empty; public string AdminNotes { get; set; } = string.Empty; public DateTime CreatedOnUtc { get; set; } = DateTime.UtcNow; }
public class LeagueRulesSection { public int Id { get; set; } public string Anchor { get; set; } = string.Empty; public string Title { get; set; } = string.Empty; public string Content { get; set; } = string.Empty; }


public class AdminUser { public int Id { get; set; } public string Username { get; set; } = string.Empty; public string PasswordHash { get; set; } = string.Empty; public string Role { get; set; } = "Admin"; public bool IsActive { get; set; } = true; }
public class SiteContentSetting { public int Id { get; set; } public string Key { get; set; } = string.Empty; public string Value { get; set; } = string.Empty; public bool IsPublished { get; set; } = true; public DateTime UpdatedAtUtc { get; set; } = DateTime.UtcNow; }
public class LeagueSetting { public int Id { get; set; } public string LeagueName { get; set; } = "Old Takers Soccer League"; public string PublicEmail { get; set; } = "league@oldtakerssoccer.com"; public string PublicPhone { get; set; } = "(713) 555-0135"; public string PublicLocation { get; set; } = "Houston, Texas"; public decimal RegistrationFee { get; set; } = 115; public decimal TeamDeposit { get; set; } = 300; public int WinPoints { get; set; } = 3; public int DrawPoints { get; set; } = 1; public int LossPoints { get; set; } = 0; public string TermsUrl { get; set; } = "#"; public string PrivacyUrl { get; set; } = "#"; }
