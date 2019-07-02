// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-console-text',
//   templateUrl: './console-text.component.html',
//   styleUrls: ['./console-text.component.scss']
// })
// export class ConsoleTextComponent implements OnInit {
//   constructor() {}

//   ngOnInit() {
//     // function([string1, string2],target id,[color1,color2])
//     consoleText(
//       [
//         'Hello and welcome ',
//         'Learn more about me below',
//         ' and thanks for stopping by :)'
//       ],
//       'text',
//       ['white', 'white', 'white']
//     );

//     function consoleText(words, id, colors) {
//       if (colors === undefined) colors = ['#fff'];
//       let visible = true;
//       let con = document.getElementById('console');
//       let letterCount = 1;
//       let x = 1;
//       let waiting = false;
//       let target = document.getElementById(id);
//       target.setAttribute('style', 'color:' + colors[0]);
//       window.setInterval(function() {
//         if (letterCount === 0 && waiting === false) {
//           waiting = true;
//           target.innerHTML = words[0].substring(0, letterCount);
//           window.setTimeout(function() {
//             const usedColor = colors.shift();
//             colors.push(usedColor);
//             const usedWord = words.shift();
//             words.push(usedWord);
//             x = 1;
//             target.setAttribute('style', 'color:' + colors[0]);
//             letterCount += x;
//             waiting = false;
//           }, 1000);
//         } else if (letterCount === words[0].length + 1 && waiting === false) {
//           waiting = true;
//           window.setTimeout(function() {
//             x = -1;
//             letterCount += x;
//             waiting = false;
//           }, 1000);
//         } else if (waiting === false) {
//           target.innerHTML = words[0].substring(0, letterCount);
//           letterCount += x;
//         }
//       }, 120);
//       window.setInterval(function() {
//         if (visible === true) {
//           con.className = 'console-underscore hidden';
//           visible = false;
//         } else {
//           con.className = 'console-underscore';

//           visible = true;
//         }
//       }, 400);
//     }
//   }
// }
