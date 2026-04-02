using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.DTOs;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SponsorsController(LeagueService service, LeagueDbContext db) : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok(service.GetSponsors());
    [HttpPost("inquiry")]
    public IActionResult Inquiry([FromBody] SponsorInquiryDto dto)
    {
        db.ContactMessages.Add(new Models.ContactMessage { Name = dto.Name, Email = dto.Email, InquiryType = "Sponsor Inquiry", Message = $"{dto.Organization}: {dto.Message}" });
        db.SaveChanges();
        return Ok();
    }
}
