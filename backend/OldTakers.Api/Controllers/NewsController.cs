using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.Models;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController(LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(db.NewsPosts.OrderByDescending(n => n.PublishedOnUtc).ToList());

    [HttpPost]
    public IActionResult Post([FromBody] NewsPost post)
    {
        post.PublishedOnUtc = post.PublishedOnUtc == default ? DateTime.UtcNow : post.PublishedOnUtc;
        db.NewsPosts.Add(post);
        db.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = post.Id }, post);
    }

    [HttpPut("{id:int}")]
    public IActionResult Put(int id, [FromBody] NewsPost post)
    {
        var existing = db.NewsPosts.Find(id);
        if (existing is null) return NotFound();
        existing.Title = post.Title;
        existing.Content = post.Content;
        existing.PublishedOnUtc = post.PublishedOnUtc;
        db.SaveChanges();
        return Ok(existing);
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        var existing = db.NewsPosts.Find(id);
        if (existing is null) return NotFound();
        db.NewsPosts.Remove(existing);
        db.SaveChanges();
        return NoContent();
    }
}
