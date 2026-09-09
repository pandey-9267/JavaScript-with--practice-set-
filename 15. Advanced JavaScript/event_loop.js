console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

//               JavaScript
//                   │
//                   ▼
//              Call Stack
//                   │
//                   │
//         ┌─────────┴─────────┐
//         │                   │
//         ▼                   ▼
//    Synchronous          Web APIs
//       code             setTimeout
//                            │
//                            ▼
//                       Callback Queue
//                            │
//                            ▼
//                        Event Loop
//                            │
//                            ▼
//                       Call Stack