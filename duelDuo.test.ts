
// import { Builder, Capabilities, By } from "selenium-webdriver"

// require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// beforeAll(async () => {
//    await (await driver).get('http://localhost:3000/')
// })

// afterAll(async () => {
//     await (await driver).quit()
// })

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
//     await driver.sleep(5000)
// })

// test('Draw cards', async () => {
//     const drawBtn = await driver.findElement(By.xpath('//*[@id="draw"]'))
//     await drawBtn.click()
//     await driver.sleep(5000)
// })

// test('See all bots', async () => {
//     const allBotsBtn = await driver.findElement(By.xpath('//*[@id="see-all"]'))
//     await allBotsBtn.click()
//     await driver.sleep(5000)
// })
