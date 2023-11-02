import LoginPage from "../pages/LoginPage";
import MakeAppointment from "../pages/MakeAppointment";
describe("Make An Appointment", () => {
  const loginPage = new LoginPage();
  const makeAppointment = new MakeAppointment();
  beforeEach(() => {
    loginPage.userLogin("John Doe", "ThisIsNotAPassword");
  });
  it("Make Appoinment", () => {
    loginPage.userOnMakeAppoinmentPage();
  });
  it("Select Facility - Seoul CURA Healthcare Center", () => {
    loginPage.userOnMakeAppoinmentPage();
    makeAppointment.facility();
  });
  it("Check on Apply for hospital readmission", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
  });
  it("Select Healthcare Program - Medicaid", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
  });
  it("Select a visiting date", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("10/11/23");
  });
  it("Add a comment", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("10/11/23");
    makeAppointment.addComment("Hello!!! ");
  });
  it("Book an Appointment", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("10/11/23");
    makeAppointment.addComment("Hello!!! ");
    makeAppointment.bookAppointment();
  });
  it(" Verify the appointment", () => {
    makeAppointment.facility();
    makeAppointment.checkReadmission();
    makeAppointment.healthCareProgram();
    makeAppointment.selectDate("10/11/23");
    makeAppointment.addComment("Hello!!! ");
    makeAppointment.bookAppointment();
    makeAppointment.appointmentVerification();
  });
});
