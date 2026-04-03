using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RulesController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.LeagueRulesSections.OrderBy(r => r.Id).ToList());

    [HttpPost]
    public IActionResult Post([FromBody] LeagueRulesSection section)
    {
        db.LeagueRulesSections.Add(section);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = section.Id }, section);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] LeagueRulesSection section)
    {
        var existing = db.LeagueRulesSections.Find(id);
        if (existing is null) return NotFound();
        existing.Anchor = section.Anchor;
        existing.Title = section.Title;
        existing.Content = section.Content;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.LeagueRulesSections.Find(id);
        if (existing is null) return NotFound();
        db.LeagueRulesSections.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
