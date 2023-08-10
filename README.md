# QuoteGenerator_InSimpleWay
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/QuoteGenerator_InSimpleWay/

Query Selectors:

You're using document.querySelector() to select HTML elements with specific classes: .quotes, .btn, and .author.
The .quotes class refers to an element where the quote will be displayed.
The .btn class refers to the button element that triggers the generation of random quotes.
The .author class refers to an element where the author's name will be displayed.

Quotes Data:

You've defined an array called quotes, which contains objects with quote and author properties.
Each object represents a quote and its author.
Random Quote Generation Function (randomGenerator):

This function is responsible for generating a random quote and displaying it.
It first generates a random number (target) using Math.random() and Math.floor(). This number will be used as an index to pick a random quote from the quotes array.
It then sets the inner text of the .quotes element to the quote property of the randomly selected quote.
Similarly, it sets the inner text of the .author element to the author property of the randomly selected quote.

Button Event Listener:

The btn element has an event listener attached to it using the .addEventListener() method.
When the button is clicked, the randomGenerator function is called, generating a random quote and author and displaying them on the page.

Button Click and Result:

When the button is clicked, the randomGenerator function is triggered.
The function selects a random quote and author from the quotes array and displays them on the page using the .innerText property of the corresponding elements with the .quotes and .author classes.
