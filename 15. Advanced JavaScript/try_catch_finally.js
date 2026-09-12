// this is how its work's

// TRY
//  ↓
// Withdraw money
//  ↓
// Did it work?
//  ↙       ↘
// YES       NO
//  ↓         ↓
// Success   Catch error
//    \       /
//     \     /
//      FINALLY
//         ↓
// Card returned

// try catch example-------------
// 
//  ┌─────────────────────────────────────┐
//  │      TRY-CATCH FLOW DIAGRAM         │
//  └─────────────────────────────────────┘
//
//         ┌──────────────────┐
//         │  START: try{}    │
//         └────────┬─────────┘
//                  │
//         ┌────────▼─────────┐
//         │ console.log()    │
//         │ console.log()    │
//         └────────┬─────────┘
//                  │
//          ┌───────▼────────┐
//          │ Error occurs?  │
//          └───┬────────┬───┘
//              │        │
//          YES │        │ NO
//              │        │
//      ┌───────▼──┐  ┌──▼──────────┐
//      │ CATCH {} │  │ CONTINUE    │
//      │ Handle   │  │ Normally    │
//      └────┬─────┘  └──┬──────────┘
//           │           │
//           └───┬───────┘
//               │
//         ┌─────▼──────┐
//         │   END      │
//         └────────────┘

try {
    console.log("Finding...");
    console.log(user.name);
} catch (error) {
    console.log("Something went wrong")
}

// finally : Now suppose you want something to happen whether an error occurs or not.

// try catch finally example---------------
//
//  ┌──────────────────────────────────────────────────┐
//  │    TRY-CATCH-FINALLY COMPLETE FLOW DIAGRAM       │
//  └──────────────────────────────────────────────────┘
//
//           ┌────────────────────┐
//           │  START: try{}      │
//           └─────────┬──────────┘
//                     │
//           ┌─────────▼──────────┐
//           │  Execute Code:     │
//           │  - console.log()   │
//           │  - access user.x   │
//           └─────────┬──────────┘
//                     │
//              ┌──────▼──────┐
//              │  Error?     │
//              └──┬────────┬─┘
//                 │        │
//              ✗  │        │  ✓
//             (YES)      (NO)
//                 │        │
//         ┌───────▼──┐  ┌──▼──────────┐
//         │ CATCH {} │  │ Normal Flow │
//         │ Log      │  │ Continue    │
//         │ error    │  │             │
//         └───────┬──┘  └──┬──────────┘
//                 │        │
//         ┌───────┴────────┘
//         │
//    ┌────▼───────────────┐
//    │  FINALLY{}         │
//    │  ALWAYS EXECUTES   │
//    │  - Cleanup code    │
//    │  - Return values   │
//    │  - Resource close  │
//    └────┬───────────────┘
//         │
//    ┌────▼─────┐
//    │   END    │
//    └──────────┘

let user = {name: "Abhishek"}
try {
    console.log("Trying...");
    console.log(user.name);
} catch (error) {
    console.log("Something went wrong");
} finally {
    console.log("Finished");
}