namespace LastProject.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Appointment { get; set; }
        public DateTime CreateAppointment { get; set; } = DateTime.Now;
        public int UserId { get; set; }
        public User User { get; set; }
        public Doctor Doctor { get; set; }
        public int DoctorId { get; set; }
    }
}
