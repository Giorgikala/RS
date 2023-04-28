using LastProject.Data;
using LastProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LastProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IConfiguration _configuration;

        public DoctorsController(DataContext dataContext, IConfiguration configuration)
        {
            _dataContext = dataContext;
            _configuration = configuration;
        }
        [HttpGet]
        public async Task<ActionResult<List<Doctor>>> GetAllDoctor()
        {
            return await _dataContext.Doctors.ToListAsync();

        }
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<List<Doctor>>> GetDoctorById(int id)
        {
            var doctor = await _dataContext.Doctors.FirstOrDefaultAsync(d => d.Id == id);
            if (doctor == null)
            {
                return NotFound();
            }
            return Ok(doctor);
        


        }
        


        [HttpPost(Name ="doctors registration")]
        public async Task <ActionResult> RegisterDoctor([FromForm]DoctorDto request)
        {
            Console.WriteLine(_configuration.GetSection("Imagesfile:default").Value);
            var hash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            var fileName = Guid.NewGuid().ToString()+".jpg";
            string path = Path.Combine(Directory.GetCurrentDirectory(), @"..\OnlineClinic\clinic\src\assets\image", fileName);
            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                request.Photo.CopyTo(stream);
            }
            
          
            var doctor = new Doctor
            { 
                Email = request.Email,
                Firstname = request.Firstname,
                Lastname = request.Lastname,
                Personalid = request.Personalid,
                Cv = "Cv",
                Photo = $@".\assets\image\{fileName}",
                PasswordHash = hash,
                Category = request.Category,
                



            };

            await _dataContext.Doctors.AddAsync(doctor);
            await _dataContext.SaveChangesAsync();

            return Ok();


        }

    }
}
