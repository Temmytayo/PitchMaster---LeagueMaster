using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.DTOs;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayerRegistrationsController(LeagueService service) : ControllerBase
{
    [HttpPost]
    public IActionResult Post([FromBody] PlayerRegistrationDto dto)
    {
        var age = (int)((DateTime.UtcNow - dto.DateOfBirth).TotalDays / 365.25);
        if (age < 35) return BadRequest("Adult over 35 league requirement not met.");
        return Created("", service.CreatePlayerRegistration(dto));
    }
}
