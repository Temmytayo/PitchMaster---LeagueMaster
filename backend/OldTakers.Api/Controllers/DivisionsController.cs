using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DivisionsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Divisions.ToList());

    [HttpPost]
    public IActionResult Post([FromBody] Division division)
    {
        db.Divisions.Add(division);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = division.Id }, division);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] Division division)
    {
        var existing = db.Divisions.Find(id);
        if (existing is null) return NotFound();
        existing.Name = division.Name;
        existing.SeasonId = division.SeasonId;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.Divisions.Find(id);
        if (existing is null) return NotFound();
        db.Divisions.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
