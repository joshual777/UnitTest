using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestInvestigacion1
{
    [TestClass]
    public class UnitTest1
    {
 
        [TestMethod]
        public void TestLoginTrue()
        {
            bool result = Investigacion1.Program.Login("joguzman@espe.com", "CE4104");
            Assert.AreEqual(true, result);
        }

        [TestMethod]
        public void TestLoginFalse()
        {
            bool result = Investigacion1.Program.Login("user", "CE3104");
            Assert.AreEqual(false, result);
        }
    }
}
