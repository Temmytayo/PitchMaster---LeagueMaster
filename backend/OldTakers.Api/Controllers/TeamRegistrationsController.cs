using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.DTOs;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeamRegistrationsController(LeagueService service) : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(service.GetTeamRegistrations());

    [HttpPost]
    public IActionResult Post([FromBody] TeamRegistrationDto dto)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);
        if (!dto.WaiverAccepted) return BadRequest("Waiver acknowledgment is required.");
        return Created("", service.CreateTeamRegistration(dto));
    }
}
