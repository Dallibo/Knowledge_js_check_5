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