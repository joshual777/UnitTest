using System;

namespace Investigacion1
{
    public class Program
    {
        static void Main(string[] args)
        {}
        public static bool Login(string user, string password) =>
            user == "joguzman@espe.com" && password == "CE4104" ? true : false; 
    }
}
