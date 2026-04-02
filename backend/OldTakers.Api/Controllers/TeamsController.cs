using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeamsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Teams.OrderBy(t => t.Name).ToList());

    [HttpPost]
    public IActionResult Post([FromBody] Team team)
    {
        db.Teams.Add(team);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = team.Id }, team);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] Team team)
    {
        var existing = db.Teams.Find(id);
        if (existing is null) return NotFound();
        existing.Name = team.Name;
        existing.DivisionId = team.DivisionId;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.Teams.Find(id);
        if (existing is null) return NotFound();
        db.Teams.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
