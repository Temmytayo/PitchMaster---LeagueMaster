using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StandingsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Standings.OrderByDescending(s => s.Points).ToList());

    [HttpPost]
    public IActionResult Post([FromBody] Standing standing)
    {
        db.Standings.Add(standing);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = standing.Id }, standing);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] Standing standing)
    {
        var existing = db.Standings.Find(id);
        if (existing is null) return NotFound();
        existing.TeamId = standing.TeamId;
        existing.Played = standing.Played;
        existing.Wins = standing.Wins;
        existing.Draws = standing.Draws;
        existing.Losses = standing.Losses;
        existing.GoalsFor = standing.GoalsFor;
        existing.GoalsAgainst = standing.GoalsAgainst;
        existing.Points = standing.Points;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.Standings.Find(id);
        if (existing is null) return NotFound();
        db.Standings.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
