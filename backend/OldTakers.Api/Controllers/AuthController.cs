using Microsoft.AspNetCore.Mvc;
using OldTakers.Api.Data;
using OldTakers.Api.DTOs;

namespace OldTakers.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController(LeagueDbContext db) : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequestDto dto)
    {
        var user = db.AdminUsers.FirstOrDefault(x => x.Username == dto.Username && x.IsActive);
        if (user is null || user.PasswordHash != dto.Password) return Unauthorized("Invalid credentials");

        var token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
        return Ok(new LoginResponseDto(token, user.Role, user.Username));
    }
}
