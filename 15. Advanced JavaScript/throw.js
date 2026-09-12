// throw with try/catch
//
//  ┌──────────────────────────────────────────────────┐
//  │   THROW ERROR - BALANCE CHECK FLOW               │
//  └──────────────────────────────────────────────────┘
//
//     balance = 500    amount = 1000
//            │                │
//            └────────┬────────┘
//                     │
//         ┌───────────▼────────────┐
//         │ amount > balance?      │
//         └───┬──────────────┬─────┘
//             │              │
//          YES│              │NO
//             │              │
//      ┌──────▼─────┐   ┌────▼──────────────┐
//      │ THROW Error│   │ Withdraw Success  │
//      │ (Stops)    │   │ console.log()     │
//      └──────┬─────┘   └────┬──────────────┘
//             │              │
//         ┌───┴──────────────┐
//         │                  │
//     ┌───▼────────┐   ┌─────▼──────┐
//     │ CATCH {}   │   │ END        │
//     │ Handle     │   └────────────┘
//     │ error msg  │
//     └─────┬──────┘
//           │
//      ┌────▼──────┐
//      │   END     │
//      └───────────┘

// let balance = 500;
// let ammount = 1000;

// try {
//     if (ammount > balance) {
//         throw new Error("Insufficient balance");
//     }
//     console.log("Money withdrawn");
// } catch (error) {
//     console.log(error.message);
// }

// LOGIN FUNCTION - PASSWORD VALIDATION
//
//  ┌────────────────────────────────────────────────────┐
//  │  THROW - PASSWORD VALIDATION FLOW                  │
//  └────────────────────────────────────────────────────┘
//
//       login(password)
//            │
//    ┌───────▼──────────────┐
//    │ password.length < 8? │
//    └───┬──────────────┬───┘
//        │              │
//     YES│              │NO
//        │              │
//  ┌─────▼──────────┐  ┌──▼──────────────────┐
//  │ THROW Error    │  │ Login Successful    │
//  │ "Password must │  │ console.log()       │
//  │  be 8+ chars"  │  │ Function ends       │
//  └─────┬──────────┘  └──┬──────────────────┘
//        │                │
//    ┌───┴────────────────┐
//    │                    │
//    │ Return Error       │ Return void
//    │ to caller          │ (normal)
//    │                    │

// function login (password) {
//     if (password.length < 8) {
//         throw new Error("Password must be at least 8 character");
//     }
//     console.log("Logion successful")
// }

// if the criteria is not fullfill it throw the Error

// CALL #1: password = "asdfg" (5 chars - TOO SHORT)
//
//  ┌──────────────────────────────┐
//  │  login("asdfg")              │
//  │  length = 5 < 8 ✗            │
//  └────────┬─────────────────────┘
//           │
//    ┌──────▼──────────┐
//    │ THROW Error     │
//    │ Stops execution │
//    └────────┬────────┘
//             │
//      ┌──────▼──────────┐
//      │ CATCH (error)   │
//      │ .message logged │
//      └─────────────────┘

// try {
//     login("asdfg");
// }catch (error) {
//     console.log(error.message);
// }

// but if the criteria is fullfilled then is not throw the Error

// CALL #2: password = "asdfghjk" (8 chars - OK)
//
//  ┌──────────────────────────────┐
//  │  login("asdfghjk")           │
//  │  length = 8 < 8 ✓ (false)   │
//  └────────┬─────────────────────┘
//           │
//    ┌──────▼──────────────────┐
//    │ No error thrown         │
//    │ Logs "Login successful" │
//    │ Function completes      │
//    └────────┬────────────────┘
//             │
//      ┌──────▼──────────┐
//      │ CATCH skipped   │
//      │ (no error)      │
//      └─────────────────┘

// try {
//     login("asdfghjk");
// } catch (error) {
//     console.log(error.message);
// }




// one complete example where everthing involved 
//
//  ┌────────────────────────────────────────────────────────────────────┐
//  │  COMPLETE EXAMPLE: CUSTOM ERROR CLASS + TRY-CATCH-FINALLY          │
//  └────────────────────────────────────────────────────────────────────┘
//
//  ┌─────────────────────────────────────────────────────────────────┐
//  │  STEP 1: CREATE CUSTOM ERROR CLASS                             │
//  └─────────────────────────────────────────────────────────────────┘
//
//        class AgeError extends Error
//               │
//               ├─ Inherits from Error
//               ├─ Custom name: "AgeError"
//               └─ Custom message property
//
//  ┌─────────────────────────────────────────────────────────────────┐
//  │  STEP 2: REGISTER FUNCTION LOGIC                                │
//  └─────────────────────────────────────────────────────────────────┘
//
//        register(age = 16)
//               │
//         ┌────▼─────────┐
//         │ age < 18?    │
//         └┬────────────┬┘
//          │            │
//       YES│            │NO
//          │            │
//    ┌─────▼──────┐  ┌──▼──────────────────┐
//    │ THROW new  │  │ Log "Registration   │
//    │ AgeError   │  │ successful"         │
//    │ ("You must │  │ Function completes  │
//    │  be 18+")  │  └────────┬───────────┘
//    └─────┬──────┘           │
//          │                  │
//    ┌─────┴──────────────────┐
//    │                        │
//  EXECUTION PATH 1       EXECUTION PATH 2
//  (Error Thrown)         (Normal Flow)
//
//  ┌─────────────────────────────────────────────────────────────────┐
//  │  STEP 3: COMPLETE TRY-CATCH-FINALLY EXECUTION (age=16)          │
//  └─────────────────────────────────────────────────────────────────┘
//
//        try {
//          register(16)
//        }
//            │
//     ┌──────▼──────────┐
//     │ 16 < 18? YES    │
//     └──────┬──────────┘
//            │
//    ┌───────▼────────────────┐
//    │ THROW AgeError         │
//    │ Execution stops here   │
//    │ Jump to CATCH block    │
//    └───────┬────────────────┘
//            │
//    ┌───────▼────────────────────────────┐
//    │ CATCH (error)                      │
//    │  - error.name = "AgeError"         │
//    │  - error.message = "You must..."   │
//    │  - Logs both to console            │
//    └───────┬────────────────────────────┘
//            │
//    ┌───────▼────────────────────────────┐
//    │ FINALLY (ALWAYS EXECUTES)          │
//    │  Log "Registration process ended"  │
//    │  Cleanup happens here              │
//    └───────┬────────────────────────────┘
//            │
//       ┌────▼─────┐
//       │   END    │
//       └──────────┘

class AgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgeError";
    }
}

function register(age) {

    if (age < 18) {
        throw new AgeError("You must be 18 or older");
    }

    console.log("Registration successful");
}

try {
    register(16);

} catch (error) {
    console.log(error.name);
    console.log(error.message);

} finally {
    console.log("Registration process finished");
}