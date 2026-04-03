using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchesController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Matches.OrderBy(m => m.MatchDateUtc).ToList());

    [HttpPost]
    public IActionResult Post([FromBody] Match match)
    {
        db.Matches.Add(match);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = match.Id }, match);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] Match match)
    {
        var existing = db.Matches.Find(id);
        if (existing is null) return NotFound();
        existing.SeasonId = match.SeasonId;
        existing.DivisionId = match.DivisionId;
        existing.HomeTeamId = match.HomeTeamId;
        existing.AwayTeamId = match.AwayTeamId;
        existing.MatchDateUtc = match.MatchDateUtc;
        existing.Location = match.Location;
        existing.Status = match.Status;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.Matches.Find(id);
        if (existing is null) return NotFound();
        db.Matches.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
