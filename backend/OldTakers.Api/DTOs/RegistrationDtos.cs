using System.ComponentModel.DataAnnotations;

namespace OldTakers.Api.DTOs;

public record TeamRegistrationDto(
    [property: Required, MaxLength(120)] string TeamName,
    [property: Required, MaxLength(120)] string ManagerName,
    [property: Required, EmailAddress] string ManagerEmail,
    [property: Required, Phone] string ManagerPhone,
    [property: Required, MaxLength(80)] string TeamHomeArea,
    [property: Required, MaxLength(50)] string DivisionPreference,
    [property: Range(7, 40)] int EstimatedRosterSize,
    bool WaiverAccepted,
    string? AssistantManager,
    string? JerseyPrimaryColor,
    string? JerseySecondaryColor,
    string? CompetitiveExperience,
    string? Comments,
    string PaymentStatus = "Pending",
    decimal RegistrationFee = 850,
    string? PaymentReference = null,
    string? AdminNotes = null
);

public record PlayerRegistrationDto(
    [property: Required, MaxLength(80)] string FirstName,
    [property: Required, MaxLength(80)] string LastName,
    [property: Required] DateTime DateOfBirth,
    [property: Required, EmailAddress] string Email,
    [property: Required, Phone] string Phone,
    [property: Required] string TeamSelection,
    bool WaiverAccepted,
    bool ConductAccepted,
    string? PreferredPosition,
    string? EmergencyContactName,
    string? EmergencyContactPhone,
    string? MedicalNotes,
    string PaymentStatus = "Pending",
    decimal RegistrationFee = 115,
    string? PaymentReference = null,
    string? AdminNotes = null
);

public record ContactMessageDto(
    [property: Required, MaxLength(120)] string Name,
    [property: Required, EmailAddress] string Email,
    [property: Required, MaxLength(60)] string InquiryType,
    [property: Required, MaxLength(2500)] string Message
);

public record SponsorInquiryDto(
    [property: Required] string Name,
    [property: Required, EmailAddress] string Email,
    [property: Required] string Organization,
    [property: Required] string Message
);
