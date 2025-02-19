// ❓ Description:
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// ❗ Solution:
function correct(string)
{// your code here
    let result = string.replace(/0/g, "O").replace(/1/, "I").replace(/5/g, "S")

    return result;
}

correct("L0ND0N");
correct("DUBL1N");
correct("51NGAP0RE");

console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
