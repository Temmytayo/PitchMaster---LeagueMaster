using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RulesController(LeagueService service) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(service.GetRules());
}
