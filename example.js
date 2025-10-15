// installation ProcessingInstruction
# # run npm install @isahaq / numbertostring # #


const NumberToString = require('@isahaq/numbertostring');

// Create an instance of the converter
const converter = new NumberToString();

// Convert numbers to different languages
console.log(converter.convertEn(12345)); // twelve thousand three hundred and forty five
console.log(converter.convertBn(12345)); // বারো হাজার তিন শত পঁয়তাল্লিশ
console.log(converter.convertFr(12345)); // douze mille trois cent quarante-cinq
console.log(converter.convertUr(12345)); // بارہ ہزار تین سو پینتالیس
console.log(converter.convertZh(12345)); // 一万二千三百四十五
console.log(converter.convertHi(12345)); // बारह हज़ार तीन सौ पैंतालीस
console.log(converter.convertEs(12345)); // doce mil trescientos cuarenta y cinco

// Framework Integration
React.js ==
    // import React, { useState } from 'react';
    // import NumberToString from '@isahaq/numbertostring';

    // function NumberConverter() {
    //   const [number, setNumber] = useState(0);
    //   const [language, setLanguage] = useState('en');
    //   const [result, setResult] = useState('');

    //   const converter = new NumberToString();

    //   const handleConvert = () => {
    //     try {
    //       let convertedText = '';
    //       switch(language) {
    //         case 'en': convertedText = converter.convertEn(number); break;
    //         case 'bn': convertedText = converter.convertBn(number); break;
    //         case 'fr': convertedText = converter.convertFr(number); break;
    //         case 'ur': convertedText = converter.convertUr(number); break;
    //         case 'zh': convertedText = converter.convertZh(number); break;
    //         case 'hi': convertedText = converter.convertHi(number); break;
    //         case 'es': convertedText = converter.convertEs(number); break;
    //         default: convertedText = converter.convertEn(number);
    //       }
    //       setResult(convertedText);
    //     } catch (error) {
    //       setResult(`Error: ${error.message}`);
    //     }
    //   };

    //   return (
    //     <div>
    //       <h2>Number to Words Converter</h2>
    //       <div>
    //         <input 
    //           type="number" 
    //           value={number} 
    //           onChange={(e) => setNumber(e.target.value)} 
    //         />
    //         <select 
    //           value={language} 
    //           onChange={(e) => setLanguage(e.target.value)}
    //         >
    //           <option value="en">English</option>
    //           <option value="bn">Bangla</option>
    //           <option value="fr">French</option>
    //           <option value="ur">Urdu</option>
    //           <option value="zh">Chinese</option>
    //           <option value="hi">Hindi</option>
    //           <option value="es">Spanish</option>
    //         </select>
    //         <button onClick={handleConvert}>Convert</button>
    //       </div>
    //       <div>
    //         <h3>Result:</h3>
    //         <p>{result}</p>
    //       </div>
    //     </div>
    //   );
    // }

    // export default NumberConverter;

    Next.js
// pages/number-converter.js
// import {
//     useState
// } from 'react';
// import dynamic from 'next/dynamic';

// // Import the converter with dynamic import to avoid SSR issues
// const NumberConverterComponent = dynamic(
//     () => {
//         const NumberToString = require('@isahaq/numbertostring');
//         return Promise.resolve(({
//             number,
//             language
//         }) => {
//             const converter = new NumberToString();
//             try {
//                 switch (language) {
//                     case 'en':
//                         return converter.convertEn(number);
//                     case 'bn':
//                         return converter.convertBn(number);
//                     case 'fr':
//                         return converter.convertFr(number);
//                     case 'ur':
//                         return converter.convertUr(number);
//                     case 'zh':
//                         return converter.convertZh(number);
//                     case 'hi':
//                         return converter.convertHi(number);
//                     case 'es':
//                         return converter.convertEs(number);
//                     default:
//                         return converter.convertEn(number);
//                 }
//             } catch (error) {
//                 return `Error: ${error.message}`;
//             }
//         });
//     }, {
//         ssr: false
//     }
// );

// export default function NumberConverterPage() {
//     const [number, setNumber] = useState(0);
//     const [language, setLanguage] = useState('en');
//     const [result, setResult] = useState('');

//     const handleConvert = () => {
//         setResult( < NumberConverterComponent number = {
//                 number
//             }
//             language = {
//                 language
//             }
//             />);
//         };

//         return ( <
//             div >
//             <
//             h1 > Number to Words Converter < /h1> <
//             div >
//             <
//             input type = "number"
//             value = {
//                 number
//             }
//             onChange = {
//                 (e) => setNumber(e.target.value)
//             }
//             /> <
//             select value = {
//                 language
//             }
//             onChange = {
//                 (e) => setLanguage(e.target.value)
//             } >
//             <
//             option value = "en" > English < /option> <
//             option value = "bn" > Bangla < /option> <
//             option value = "fr" > French < /option> <
//             option value = "ur" > Urdu < /option> <
//             option value = "zh" > Chinese < /option> <
//             option value = "hi" > Hindi < /option> <
//             option value = "es" > Spanish < /option> <
//             /select> <
//             button onClick = {
//                 handleConvert
//             } > Convert < /button> <
//             /div> <
//             div >
//             <
//             h2 > Result: < /h2> <
//             p > {
//                 result
//             } < /p> <
//             /div> <
//             /div>
//         );
//     }

Vue.js--
//     <
//     template >
//     <
//     div >
//     <
//     h1 > Number to Words Converter < /h1> <
// div >
//     <
//     input type = "number"
// v - model = "number" / >
//     <
//     select v - model = "language" >
//     <
//     option value = "en" > English < /option> <
// option value = "bn" > Bangla < /option> <
// option value = "fr" > French < /option> <
// option value = "ur" > Urdu < /option> <
// option value = "zh" > Chinese < /option> <
// option value = "hi" > Hindi < /option> <
// option value = "es" > Spanish < /option> < /
//     select > <
//     button @click = "convertNumber" > Convert < /button> < /
//     div > <
//     div >
//     <
//     h2 > Result: < /h2> <
// p > {
//         {
//             result
//         }
//     } < /p> < /
//     div > <
//     /div> < /
//     template >

//     <
//     script >
//     import NumberToString from '@isahaq/numbertostring';

// export default {
//     name: 'NumberConverter',
//     data() {
//         return {
//             number: 0,
//             language: 'en',
//             result: '',
//             converter: new NumberToString()
//         };
//     },
//     methods: {
//         convertNumber() {
//             try {
//                 switch (this.language) {
//                     case 'en':
//                         this.result = this.converter.convertEn(this.number);
//                         break;
//                     case 'bn':
//                         this.result = this.converter.convertBn(this.number);
//                         break;
//                     case 'fr':
//                         this.result = this.converter.convertFr(this.number);
//                         break;
//                     case 'ur':
//                         this.result = this.converter.convertUr(this.number);
//                         break;
//                     case 'zh':
//                         this.result = this.converter.convertZh(this.number);
//                         break;
//                     case 'hi':
//                         this.result = this.converter.convertHi(this.number);
//                         break;
//                     case 'es':
//                         this.result = this.converter.convertEs(this.number);
//                         break;
//                     default:
//                         this.result = this.converter.convertEn(this.number);
//                 }
//             } catch (error) {
//                 this.result = `Error: ${error.message}`;
//             }
//         }
//     }
// }; <
// /script>

Angular.js
// number-converter.component.ts
// import {
//     Component
// } from '@angular/core';
// import NumberToString from '@isahaq/numbertostring';

// @Component({
//     selector: 'app-number-converter',
//     template: `
//     <div>
//       <h1>Number to Words Converter</h1>
//       <div>
//         <input type="number" [(ngModel)]="number" />
//         <select [(ngModel)]="language">
//           <option value="en">English</option>
//           <option value="bn">Bangla</option>
//           <option value="fr">French</option>
//           <option value="ur">Urdu</option>
//           <option value="zh">Chinese</option>
//           <option value="hi">Hindi</option>
//           <option value="es">Spanish</option>
//         </select>
//         <button (click)="convertNumber()">Convert</button>
//       </div>
//       <div>
//         <h2>Result:</h2>
//         <p>{{ result }}</p>
//       </div>
//     </div>
//   `,
// })
// export class NumberConverterComponent {
//     number = 0;
//     language = 'en';
//     result = '';
//     private converter = new NumberToString();

//     convertNumber() {
//         try {
//             switch (this.language) {
//                 case 'en':
//                     this.result = this.converter.convertEn(this.number);
//                     break;
//                 case 'bn':
//                     this.result = this.converter.convertBn(this.number);
//                     break;
//                 case 'fr':
//                     this.result = this.converter.convertFr(this.number);
//                     break;
//                 case 'ur':
//                     this.result = this.converter.convertUr(this.number);
//                     break;
//                 case 'zh':
//                     this.result = this.converter.convertZh(this.number);
//                     break;
//                 case 'hi':
//                     this.result = this.converter.convertHi(this.number);
//                     break;
//                 case 'es':
//                     this.result = this.converter.convertEs(this.number);
//                     break;
//                 default:
//                     this.result = this.converter.convertEn(this.number);
//             }
//         } catch (error) {
//             this.result = `Error: ${error.message}`;
//         }
//     }
// }