package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.*;
import objects.HomePage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class SearchStepsDefinitions extends ApplicationPageBase {

    HomePage homePage = PageFactory.initElements(driver, HomePage.class);


    @Given("^User is in landing page$")
    public void user_is_in_landing_page(){
        String title = driver.getTitle();
        System.out.println(title);
        //Assert.assertEquals(title,"My Store");
        // System.out.println("User in Home Page");
    }

    @When("^Search using search box by pressing enter$")
    public void search_using_search_box_by_pressing_enter()  {
        homePage.search("books");
    }

    @Then("^User should see the appropriate result$")
    public void user_should_see_the_appropriate_result()  {
        String actualText = homePage.getTextForIrreleventItemsSearch();
        Assert.assertEquals(actualText, "No results were found for your search \"books\"");
    }
}
