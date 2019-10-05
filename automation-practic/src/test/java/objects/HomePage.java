package objects;



import base.ApplicationPageBase;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class HomePage extends ApplicationPageBase {

    private WebDriver driver;

    @FindBy(how = How.ID, using = "search_query_top")
    private WebElement searchBox;

    @FindBy(how = How.PARTIAL_LINK_TEXT, partialLinkText = "Contact us")
    private WebElement contactUs;

    @FindBy(how = How.PARTIAL_LINK_TEXT, partialLinkText = "Sign in")
    private WebElement signInButton;

    @FindBy(how = How.XPATH, xpath = "//div[@id='center_column']/p")
    private WebElement searchResult;


    public LoginPage getLogInPage() {

        signInButton.click();
        return new LoginPage();
    }

    public void clickContactUs(){

        ApplicationPageBase.isEnableStatus(driver, contactUs);
        contactUs.click();

    }
    public void search (String items){

        searchBox.sendKeys(items, Keys.ENTER);


    }

    public String getTextForIrreleventItemsSearch(){

        String actualText = searchResult.getText();
        return actualText;
    }


}





















/*public HomePage() {
      // BrowserDriver.getUrl());
       // this.driver=BrowserDriver.getDriver();
        PageFactory.initElements(driver, this);
    }
*/