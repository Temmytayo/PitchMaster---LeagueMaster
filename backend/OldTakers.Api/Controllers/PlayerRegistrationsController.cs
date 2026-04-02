using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.DTOs;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayerRegistrationsController(LeagueService service) : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(service.GetPlayerRegistrations());

    [HttpPost]
    public IActionResult Post([FromBody] PlayerRegistrationDto dto)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);

        var today = DateTime.UtcNow.Date;
        var age = today.Year - dto.DateOfBirth.Year;
        if (dto.DateOfBirth.Date > today.AddYears(-age)) age--;

        if (age < 35) return BadRequest("Adult over 35 league requirement not met.");
        if (!dto.WaiverAccepted || !dto.ConductAccepted) return BadRequest("Waiver and code of conduct acceptance are required.");

        return Created("", service.CreatePlayerRegistration(dto));
    }
}
