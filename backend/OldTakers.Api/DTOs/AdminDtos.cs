using System.ComponentModel.DataAnnotations;

namespace OldTakers.Api.DTOs;

public record LoginRequestDto([property: Required] string Username, [property: Required] string Password);
public record LoginResponseDto(string Token, string Role, string Username);

public record SiteContentSettingDto([property: Required] string Key, [property: Required] string Value, bool IsPublished = true);

public record LeagueSettingDto(
    [property: Required] string LeagueName,
    [property: Required, EmailAddress] string PublicEmail,
    string PublicPhone,
    string PublicLocation,
    decimal RegistrationFee,
    decimal TeamDeposit,
    int WinPoints,
    int DrawPoints,
    int LossPoints,
    string TermsUrl,
    string PrivacyUrl
);
