namespace OnlineClinic.Models
{
    public class UserClass
    {
        public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int VerificationCode { get; set; }     
        public string IdNumber { get; set; }=string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
    }
}
