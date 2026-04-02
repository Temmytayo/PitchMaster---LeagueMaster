namespace OldTakers.Api.DTOs;

public record TeamRegistrationDto(string TeamName, string ManagerName, string ManagerEmail, string ManagerPhone, string TeamHomeArea, string DivisionPreference, int EstimatedRosterSize, bool WaiverAccepted);
public record PlayerRegistrationDto(string FirstName, string LastName, DateTime DateOfBirth, string Email, string Phone, string TeamSelection, bool WaiverAccepted, bool ConductAccepted);
public record ContactMessageDto(string Name, string Email, string InquiryType, string Message);
public record SponsorInquiryDto(string Name, string Email, string Organization, string Message);
