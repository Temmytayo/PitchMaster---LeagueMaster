using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController(LeagueService service) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(service.GetNews());
}
