package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.*;
import objects.HomePage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class Search_with_example_steps_definitions extends ApplicationPageBase {

    HomePage homePage = PageFactory.initElements(driver, HomePage.class);

    @Given("^User must be in home page$")
    public void user_must_be_in_home_page()  {
        String title = driver.getTitle();
        System.out.println(title);
    }

    @When("^User search \"([^\"]*)\" using search box$")
    public void user_search_using_search_box(String arg1) {
        homePage.search(arg1);

    }

    @Then("^Related items should be on the \"([^\"]*)\" screen$")
    public void related_items_should_be_on_the_screen(String arg1) {
        String actualText = homePage.getTextForIrreleventItemsSearch();
        Assert.assertEquals(actualText, arg1);
    }


}
