
import { test } from '@playwright/test';

test('Youtube Search', async ({page}) =>{
   await page.goto('https://www.youtube.com/')


  // Use a more specific locator for the "Accept all" button
  const acceptButton = page.locator('button:has-text("Accept all")'); // Using button tag along with the text to be more specific
  await acceptButton.scrollIntoViewIfNeeded();

  // After scrolling, check if the button is visible, then click it
  if (await acceptButton.isVisible()) {
      await acceptButton.click();
  }



   let searchBox = page.locator("//input[@id='search']");
//give time to search
   await searchBox.click();

   await searchBox.fill('Cydeo');


   await searchBox.press("Enter");


   let firstResult = page.locator("(//a[@id='video-title'])[1]");

   await firstResult.click();

   // await page.waitForTimeout(10000);

});


