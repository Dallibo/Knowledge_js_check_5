class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
      this.fontSize = fontSize;
      this.fontColor = fontColor;
      this.fontFamily = fontFamily;
    }
  
    print(text) {
      document.write(`<h1 style="font-size:${this.fontSize} ; color:${this.fontColor} ;font-family:${this.fontFamily} ; ">${text}</h1>`)
    }
  }
  const printer = new PrintMachine(16, 'blue', 'Tahoma, Arial, sans-serif;');
  printer.print('Hellow');


  class NewsString {
    constructor() {
      this.newsArray = [];
    }
      get count() {
      return this.newsArray.length;
    }
    displayAllNews() {
      this.newsArray.forEach(news => console.log(news));
    }
    addNews(news) {
      this.newsArray.push(news);
    }
    removeNews(news) {
      const index = this.newsArray.indexOf(news);
      if (index !== -1) {
        this.newsArray.splice(index, 1);
      }
    }
    sortNewsByDate() {
      this.newsArray.sort((a, b) => b.date - a.date);
    }
  
    searchNewsByTag(tag) {
      return this.newsArray.filter(news => news.tags.includes(tag));
    }
}

let newsString = new NewsString();
newsString.addNews({
  title: "News 1",
  text: "Новость 1",
  tags: ["tag1", "tag2"],
  date: new Date(2023, 5, 28, 4, 26, 45, 456)
});

newsString.addNews({
  title: "News 2",
  text: "Новость 2",
  tags: ["tag2", "tag3"],
  date: new Date(2023, 5, 29, 12, 30, 0, 0)
});

console.log("Number of news:", newsString.count);
newsString.displayAllNews();


function analyzeString(str) {
    let letterCount = 0;
    let digitCount = 0;
    let otherCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[a-zA-Z]/.test(char)) {
        letterCount++;
      } else if (/[0-9]/.test(char)) {
        digitCount++;
      } else {
        otherCount++;
      }
    }
    console.log("Кількість літер:", letterCount);
    console.log("Кількість цифр:", digitCount);
    console.log("Кількість інших символів:", otherCount);
  }
  let str = "Hellow, my name Denis 1!";
analyzeString(str);

function transformString(str) {
    let transformedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (/[A-Z]/.test(char)) {
        transformedStr += char.toLowerCase();
      } else if (/[a-z]/.test(char)) {
        transformedStr += char.toUpperCase();
      } else if (/[0-9]/.test(char)) {
        transformedStr += '_';
      } else {
        transformedStr += char;
      }
    }
  
    return transformedStr;
  }
  let str1 = "Hello, Web-31";
  let transformedString = transformString(str1);
  console.log(transformedString);
  