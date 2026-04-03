using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SeasonsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Seasons.ToList());
}
