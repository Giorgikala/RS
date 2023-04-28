using Azure.Core;
using BCrypt.Net;
using Microsoft.AspNetCore.Mvc;
using OnlineClinic.Data;
using OnlineClinic.Models;

namespace OnlineClinic.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserContext _context;
        public UserController(UserContext dataContext)
        {
            _context = dataContext;
        }
        [HttpPost]
        public ActionResult <UserClass> Register(UserContext request)
        {
            string PasswordHash
                = BCrypt.Net.BCrypt.HashPassword(request.PasswrodHash);

             _context.usercontexts.AddAsync(request);
             _context.SaveChangesAsync();
            return Ok("You Are Inserted New One!!");

        }
    }
}
