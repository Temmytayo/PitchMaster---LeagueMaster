using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SeasonsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Seasons.ToList());

    [HttpPost]
    public IActionResult Post([FromBody] Season season)
    {
        db.Seasons.Add(season);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = season.Id }, season);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] Season season)
    {
        var existing = db.Seasons.Find(id);
        if (existing is null) return NotFound();
        existing.Name = season.Name;
        existing.IsActive = season.IsActive;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.Seasons.Find(id);
        if (existing is null) return NotFound();
        db.Seasons.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
