
import test, {expect} from "@playwright/test"
import chalk from "chalk";

test("My First test case",async({page} )=>{
    //const context=await browser.newContext();
   // const page= await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   await  page.locator("#username").fill("rahulshetty")
    //To clear the text types above you can again use
    await page.locator("#username").clear()
    await page.locator("#password").fill("learning")
    await page.locator("#signInBtn").click();
    console.log(chalk.bgGreen(await page.locator("[style*='block']").textContent()))

    await expect( page.locator("[style*='block']")).toContainText('username')

})
test.only("Valid login Scenario",async({page})=>{
    const username_id='#username';
    const password_id='#password';
    const signin_button_id='#signInBtn'

    const valid_username="rahulshettyacademy"
    const valid_password="learning"

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator(username_id).fill(valid_username)
    await page.locator(password_id).fill(valid_password)
    await page.locator(signin_button_id).click();
    console.log(chalk.cyan(await  page.locator("xpath=//div[@class='card-body']//a ").first().textContent()))
    console.log(await page.locator("xpath=//div[@class='card-body']//a ").nth(0).textContent())
    console.log(await page.locator("xpath=//div[@class='card-body']//a ").nth(2).textContent())


    //To check if the user has now be logged in successfully .

})
test("My Second Test ",async({page})=>{
    await page.goto("https://google.com")
    console.log(await page.title())
    //TO  Assert the title in Playwright
   await  expect(page).toHaveTitle("Google")
    


})