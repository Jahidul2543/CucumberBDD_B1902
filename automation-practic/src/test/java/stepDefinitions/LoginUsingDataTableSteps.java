package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.HomePage;
import objects.LoginPage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

public class LoginUsingDataTableSteps extends ApplicationPageBase {
    LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);
    HomePage homePage = PageFactory.initElements(driver, HomePage.class);


    @Given("^User is in login page$")
    public void user_is_in_login_page()  {
        homePage.getLogInPage();
    }
    /**
     *
     * DataTable is used to get desired record or desired cell info
     * DataTable has a method named asMaps(String arg1, String arg2) which returns a List<Map<String, String>>
     * By the help of this method DataTable can be stored in a reference variable. By get() method we can get the value against the key.
     *
     * */

    @When("^Enter invalid email and password from Data Table$")
    public void enter_invalid_email_and_password_from_Data_Table(DataTable table)  {

        List<Map<String, String>> datatable = table.asMaps(String.class,String.class);
        loginPage.login(datatable.get(0).get("userName"),datatable.get(0).get("password"));
    }

    @Then("^Error message appear$")
    public void error_message_appear() throws Throwable {
        String actualErrorMessage =  loginPage.getErroMessage();
        Assert.assertEquals(actualErrorMessage, "There is 1 error");
    }

}
