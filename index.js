let inputText = document.getElementById("inputField")
let result = document.getElementById("result")
let addButton = document.getElementById("addButton")
let inputField = document.querySelector("inputField")

document.addEventListener("DOMContentLoaded", () => {

    showResult();

})


const showResult = () => {
    addButton.addEventListener("click", () => {
        let inputValue = inputText.value;
        //Here I modified my code to display the result with green or red color by using css
        result.innerHTML =  isValid(inputValue) ? "<span class='color-green'>Valid Input</span>" : "<span class='color-red'>Invalid Input</span>"
        document.getElementById("inputField").value = ""
    })
}

const isValid = (s) => {
    
    let hash = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stack = []

    for(const char of s){
        if(hash[char]){
            stack.push(hash[char])
        }
        else {
            if(stack.pop() !== char){
                return false
            }
        }

    }
    
    return stack.length === 0 
};