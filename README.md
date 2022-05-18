# cookieClicker / Chicken game

[Click some chickens!](https://z3no.github.io/cookieClicker/)

A 2 day project we had to work on during our course at [BeCode](https://becode.org).

### The Goal
- Improve our **_JavaScript_** skills
- Learn about incremental games
- Improve our **_HTML_** and **_CSS_** skills

### Instructions
- **Step 1: Base structure**
  - Write the base structure for the project in **_HTML_**, **_CSS_** and **_JavaScript_**. Within the HTML, put a click button which will increment a counter and a label initialised at 0 to display said counter.

- **Step 2: Prepare the JavaScript**
  - In your JavaScript prepare variables to allow you to control your button and label. You will also need a variable to keep track of the score.

- **Step 3: Increase the score**
  - When you click the button, increase the variable storing the score by 1, then display the current score inside the label.

- **Step 4: Make a multiplier**
  - Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by two for example.

- **Step 5: Price of multiplier**
  - The multiplier allows you to have a big score quickly, that shouldn’t be free, it should be a purchase made with the current player score.

- **Step 6: No credit**
  - You can’t make credit, meaning that the player cannot have a negative score. Think about updating the score display after a purchase.

- **Step 7: Display multiplier counter**
  - Display the counter within the multiplier. For example, if the counter is worth 5, then the button should display something like multiplier x5.

- **Step 8: Increase the cost**
  - Buying a lot of multiplier is way too easy. For more fun, make it so that each time a multiplier is purchased the cost of buying a new one is increased.

- **Step 9: Display the cost**
  - In the text of the multiplier button you should also have the price of the upgrade.

- **Step 10: Auto-clicker**
  - Implement a new improvement to buy, the auto-click. As the name might suggest this bonus will automatically add a click to your score each x seconds.

- **Step 11: Bonus**
  - Implement yet another improvement to buy, the bonus. It should grant the player a boost in score of 200% per click for 30 seconds. When purchased the player should see a timer with the remaining time inside the bonus button.

- **Step 12: Deactivate the buttons**
  - Make it so that, if the player doesn’t have the points to purchase a multiplier, an auto-click or an other bonus, he can’t.

- **Step 13: Make it pretty**
  - Your cookie clicker must be pretty, make it look good with CSS or some extra JavaScript.

## TO DO
- [x] Structure in HTML
  - [x] A button that increments a counter (in my case the chicken you have to click)
  - [x] Display the counter, starting from 0 (aka your credits)
  - [x] Create an improvement that is a multiplier
    - [x] Show how many of these you have bought
    - [x] Show the cost
    - [x] Information about what it does
    - [x] A buy button
  - [x] A counter that shows how many chickens you get per click
  - [x] Create an improvement that works as an auto-clicker
    - [x] Show how many of these you have bought
    - [x] Show the cost
    - [x] Information about what it does
    - [x] A buy button
  - [x] A counter that shows how many chickens you get per second
  - [x] Create a bonus improvement, boost your score for 30 seconds
    - [x] Show a timer that counts down when purchased
    - [x] Show the cost
    - [x] Information about what it does
    - [x] A buy button
- [x] JavaScript necessities
  - [x] Variables
    - [x] buttons, main clicker, buy
    - [x] counter
    - [x] per click
    - [x] per second
    - [x] improvements (amount)
    - [x] cost/price of improvements
    - [x] timer
  - [x] Improvements
    - [x] Increase the cost once bought
    - [x] Multiply the clicks per click
    - [x] Update the amount of improvements you have
    - [x] Auto-clicker, clicks per second
    - [x] Bonus improvement
    - [x] Timer that counts down
    - [x] Deactivate the buy buttons if you don't have enough chickens (credits)
- [ ] CSS
  - [ ] Style paragraphs
  - [ ] Style the headings
  - [x] Create a background
  - [x] An image of a chicken for the clicker
  - [ ] Position the improvements nicely
  - [ ] Position the clicker with counter, /click and /second display
  - [ ] Position everything with the help of flexbox (learn flexbox)
  - [ ] Make it responsive