package objects;

import base.ApplicationPageBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ContactUsPage extends ApplicationPageBase {



     @FindBy(how = How.CLASS_NAME, className = "page-heading")
     private  WebElement pageHeading;

    public String contactUs(){

        String getText = pageHeading.getText();

      return getText;

    }




}
