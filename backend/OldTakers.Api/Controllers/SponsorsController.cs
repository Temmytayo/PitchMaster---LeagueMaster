using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.DTOs;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SponsorsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.Sponsors.OrderBy(s => s.Tier).ToList());

    [HttpPost]
    public IActionResult Post([FromBody] Sponsor sponsor)
    {
        db.Sponsors.Add(sponsor);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = sponsor.Id }, sponsor);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] Sponsor sponsor)
    {
        var existing = db.Sponsors.Find(id);
        if (existing is null) return NotFound();
        existing.Name = sponsor.Name;
        existing.Tier = sponsor.Tier;
        existing.ContactEmail = sponsor.ContactEmail;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.Sponsors.Find(id);
        if (existing is null) return NotFound();
        db.Sponsors.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }

    [HttpPost("inquiry")]
    public IActionResult Inquiry([FromBody] SponsorInquiryDto dto)
    {
        db.ContactMessages.Add(new ContactMessage { Name = dto.Name, Email = dto.Email, InquiryType = "Sponsor Inquiry", Message = $"{dto.Organization}: {dto.Message}" });
        db.SaveChanges();
        return Ok();
    }
}
