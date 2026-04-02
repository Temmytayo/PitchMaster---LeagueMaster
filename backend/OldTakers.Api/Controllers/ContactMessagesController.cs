using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.DTOs;
using OldTakers.Api.Services;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactMessagesController(LeagueService service) : ControllerBase
{
    [HttpPost]
    public IActionResult Post([FromBody] ContactMessageDto dto)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);
        return Created("", service.CreateContactMessage(dto));
    }
}
