using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayersController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Players.OrderBy(p => p.LastName).ToList());

    [HttpPost]
    public IActionResult Post([FromBody] Player player)
    {
        db.Players.Add(player);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = player.Id }, player);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] Player player)
    {
        var existing = db.Players.Find(id);
        if (existing is null) return NotFound();
        existing.FirstName = player.FirstName;
        existing.LastName = player.LastName;
        existing.DateOfBirth = player.DateOfBirth;
        existing.Position = player.Position;
        existing.TeamId = player.TeamId;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.Players.Find(id);
        if (existing is null) return NotFound();
        db.Players.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
