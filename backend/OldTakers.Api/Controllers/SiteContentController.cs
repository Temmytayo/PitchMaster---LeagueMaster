using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.DTOs;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SiteContentController(LeagueDbContext db) : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll() => Ok(db.SiteContentSettings.OrderBy(x => x.Key).ToList());

    [HttpGet("{key}")]
    public IActionResult GetByKey(string key)
    {
        var item = db.SiteContentSettings.FirstOrDefault(x => x.Key == key);
        return item is null ? NotFound() : Ok(item);
    }

    [HttpPost]
    public IActionResult Upsert([FromBody] SiteContentSettingDto dto)
    {
        var existing = db.SiteContentSettings.FirstOrDefault(x => x.Key == dto.Key);
        if (existing is null)
        {
            existing = new SiteContentSetting { Key = dto.Key };
            db.SiteContentSettings.Add(existing);
        }

        existing.Value = dto.Value;
        existing.IsPublished = dto.IsPublished;
        existing.UpdatedAtUtc = DateTime.UtcNow;
        db.SaveChanges();

        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.SiteContentSettings.Find(id);
        if (existing is null) return NotFound();
        db.SiteContentSettings.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
