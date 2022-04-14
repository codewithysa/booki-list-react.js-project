const api = [
    { id: 1, src: './comicbooks/comic.jpg', category: 'comicbooks', title: 'my hero academia'},
    { id: 2, src: './sales/sales9.jpg', category: 'sales', title: 'the habits of highly effective people'},
    { id: 3, src: './comicbooks/wonder woman.jpg', category: 'comicbooks', title: 'spiderman'},
    { id: 4, src: './motivation/book2.jpg', category: 'motivation', title: 'make your bed'},
    { id: 5, src: './comicbooks/comic4.jpg', category: 'comicbooks', title: 'hunter x hunter'},
    { id: 6, src: './sales/sales3.jpg', category: 'sales', title: 'emotional intelligence'},
    { id: 7, src: './comicbooks/superman.jpg', category: 'comicbooks', title: 'superman'},
    { id: 8, src: './motivation/book1.png', category: 'motivation', title: 'the power of positive thinking'},
    { id: 11, src: './comicbooks/batman.png', category: 'comicbooks', title: 'batman'},
    { id: 12, src: './sales/sales10.jpg', category: 'sales', title: 'think and grow rich'},
    { id: 13, src: './comicbooks/comic2.jpg', category: 'comicbooks', title: 'astro boy'},
    { id: 14, src: './motivation/book4.jpg', category: 'motivation', title: 'choose yourself'},
    { id: 15, src: './comicbooks/captain.jpg', category: 'comicbooks', title: 'captain america'},
    { id: 16, src: './sales/sales6.jpg', category: 'sales', title: 'simple sales solution'},
    { id: 17, src: './comicbooks/comic3.jpg', category: 'comicbooks', title: 'demon slayer'},
    { id: 18, src: './motivation/book3.jpg', category: 'motivation', title: 'man search for meaning'},
    { id: 19, src: './comicbooks/onepiece.jpg', category: 'comicbooks', title: 'spiderman'},
    { id: 20, src: './sales/sales5.jpeg', category: 'sales', title: 'the greatest showman in the world'},
    { id: 21, src: './comicbooks/comic5.jpg', category: 'comicbooks', title: 'attack of titan'},
    { id: 22, src: './motivation/book5.jpg', category: 'motivation', title: 'atomic habits'},
    { id: 23, src: './comicbooks/spiderman2.jpg', category: 'comicbooks', title: 'spiderman'},
    { id: 24, src: './sales/sales8.jpg', category: 'sales', title: 'influence'},
    { id: 25, src: './motivation/motivation11.jpeg', category: 'motivation', title: 'the power of positive thinking'},
    { id: 26, src: './comicbooks/comic12.jpg', category: 'comicbooks', title: 'one punch man'},
    { id: 27, src: './comicbooks/spider.jpg', category: 'comicbooks', title: 'spider'},
    { id: 28, src: './motivation/motivation10.jpg', category: 'motivation', title: 'zero to one'},
    { id: 29, src: './sales/sales5.jpeg', category: 'sales', title: 'the greatest salesman in the world'},
    { id: 30, src: './comicbooks/wonder woman.jpg', category: 'comicbooks', title: 'spiderman'},
    { id: 31, src: './comicbooks/comic13.jpg', category: 'comicbooks', title: 'sailor moon'},
    { id: 32, src: './motivation/motivation12.jpg', category: 'motivation', title: 'how to win friends and influence people'},
    { id: 33, src: './sales/sales8.jpg', category: 'sales', title: 'influence'},
    { id: 34, src: './comicbooks/spider.jpg', category: 'comicbooks', title: 'spider'},
    { id: 35, src: './comicbooks/comicbook10.jpg', category: 'comicbooks', title: 'hunter x hunter'},
    { id: 36, src: './comicbooks/batman.png', category: 'comicbooks', title: 'batman'},
    { id: 37, src: './motivation/motivation12.jpg', category: 'motivation', title: 'how to win friends and influence people'},
    { id: 38, src: './comicbooks/captain.jpg', category: 'comicbooks', title: 'captain america'},
    { id: 39, src: './sales/sales8.jpg', category: 'sales', title: 'influence'},
    { id: 40, src: './comicbooks/comicbook10.jpg', category: 'comicbooks', title: 'hunter x hunter'},
    { id: 41, src: './comicbooks/superman.jpg', category: 'comicbooks', title: 'superman'},
    { id: 42, src: './comicbooks/spiderman2.jpg', category: 'comicbooks', title: 'spiderman'}
  ]

  export const setApi = () => {
      return api;
  }


  export const setComic = () => {
      return api.filter(data => data.category === "comicbooks")
  }

 