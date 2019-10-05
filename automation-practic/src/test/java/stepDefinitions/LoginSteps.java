package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.HomePage;
import objects.LoginPage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class LoginSteps extends ApplicationPageBase {

    LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);
    HomePage homePage = PageFactory.initElements(driver, HomePage.class);

    @Given("^User has to be in log in page$")
    public void user_has_to_be_in_log_in_page()  {
          homePage.getLogInPage();

    }

    @When("^Try log in by invalid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void try_log_in_by_invalid_and(String arg1, String arg2)  {

        loginPage.login(arg1,arg2);

    }

    @Then("^Unable to log in$")
    public void unable_to_log_in() {
      String actualErrorMessage =  loginPage.getErroMessage();
        Assert.assertEquals(actualErrorMessage, "There is 1 error");
    }
}
