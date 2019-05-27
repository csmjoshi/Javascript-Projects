//Mehul Joshi
//RandomQuoteGenerator
//3/20/19
//For this project I am going for most
//of the meeting expectations and some of the extra credit options.

//An array of 'quote' objects is
//constructed for the purpose of calling
//the print quote function
var quotes = [
  {
    quote:"If you're afraid to fail, then you're probably going to fail.",
    source:"Kobe Bryant",
    citation:"Brainy Quotes",
    year:2018,
  },
  {  quote:"Yesterday is histroy, tomorrow is a mystery, but today is a gift... That is why they call it the present",
    source:"Master Oogway",
    citation:"Kung Fu Panda",
    year:2008,
  },
  {  quote:"Success is a lousy teacher. It seduces smart people into thinking that they can't lose",
    source:"Bill Gates",
    year:2008,
  },
  {  quote:"Try not to become a man of success. Rather become a man of value",
    source:"Albert Einstein",

  },
  {  quote:"If you can dream it, you can do it",
    source:"Walt Disney",

  },
  {  quote:"The secret of success is constancy of purpose",
    source:"Benjamin Disraeli",
    citation:"Twitter",
  },
  {  quote:"I've failed over and over and over again in my life-And that is why I succeed",
    source:"Michael Jordan",
    citation:"Success.com",
  },
  {  quote:"Wear your failure as a badge of honour",
    source:"Sundar Pichai",

  },
  {  quote:"A man who dares to waste one hour of time has not discovered the value of life",
    source:"Charles Darwin",

  },
  {  quote:"We choose to do things, not because they are easy, but because they are hard",
    source:"John F. Kennedy",
    year: 1962,

  },

  {  quote:"Quality is not an act, it is a habit",
    source:"Aristotle",

  },
];

//The following method gets a
//random quote from the array and returns that object
function getRandomQuote() {
  var rand = Math.floor(Math.random() * (quotes.length));
  return quotes[rand];
}

//The printQuote function is invoked to update the Quote
//to the html page by getting a
//random quote and printing its values to the page
function printQuote() {
  var quote = getRandomQuote();
  var htmlString = "";
  var pageCode = getCSSColorCode();
  var textColor = getCSSColorCode();
  htmlString += '<p class="quote">' + quote.quote + '</p>';
  htmlString += '<p class="source">' + quote.source;
  if(quote.hasOwnProperty("citation")) {
    htmlString+= '<span class="citation">' + quote.citation + '</span>';
  }
  if(quote.hasOwnProperty("year")) {
    htmlString += '<span class="year">' + quote.year + "</span>";
  }
  htmlString += "</p>"
  while(pageCode === textColor) {
    pageCode = getCSSColorCode();
  }
  document.getElementById('quote-box').style.color = textColor;
  document.body.style.backgroundColor = pageCode;
  document.getElementById('quote-box').innerHTML = htmlString;
}

//This method is to be used in conjunction with a '#'
//symbol to change the CSS background color
//What it does is generatore a random number from
//0 - 16777215(which is ffffff in decimal) and returns the first 16 characters
function getCSSColorCode() {
  return '#'+Math.floor(Math.random()*16777215).toString();
}

setInterval(printQuote, 20000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
