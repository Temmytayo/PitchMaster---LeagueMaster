using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.DTOs;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SettingsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var setting = db.LeagueSettings.FirstOrDefault() ?? new LeagueSetting();
        return Ok(setting);
    }

    [HttpPut]
    public IActionResult Update([FromBody] LeagueSettingDto dto)
    {
        var setting = db.LeagueSettings.FirstOrDefault();
        if (setting is null)
        {
            setting = new LeagueSetting();
            db.LeagueSettings.Add(setting);
        }

        setting.LeagueName = dto.LeagueName;
        setting.PublicEmail = dto.PublicEmail;
        setting.PublicPhone = dto.PublicPhone;
        setting.PublicLocation = dto.PublicLocation;
        setting.RegistrationFee = dto.RegistrationFee;
        setting.TeamDeposit = dto.TeamDeposit;
        setting.WinPoints = dto.WinPoints;
        setting.DrawPoints = dto.DrawPoints;
        setting.LossPoints = dto.LossPoints;
        setting.TermsUrl = dto.TermsUrl;
        setting.PrivacyUrl = dto.PrivacyUrl;

        db.SaveChanges();
        return Ok(setting);
    }
}
