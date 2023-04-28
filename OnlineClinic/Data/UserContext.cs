using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace OnlineClinic.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)

        {
           
        }

        public DbSet<UserContext> usercontexts { get; set; }
      
    }
}
