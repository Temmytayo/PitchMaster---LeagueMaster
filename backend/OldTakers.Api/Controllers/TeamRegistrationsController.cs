using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.DTOs;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeamRegistrationsController(LeagueService service) : ControllerBase
{
    [HttpPost]
    public IActionResult Post([FromBody] TeamRegistrationDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.TeamName) || string.IsNullOrWhiteSpace(dto.ManagerEmail)) return BadRequest("Team name and manager email are required.");
        return Created("", service.CreateTeamRegistration(dto));
    }
}
