const numberOneInput = document.getElementById('numberOne')
const numberTwoInput = document.getElementById('numberTwo')
const addValuesButton = document.getElementById('addValues')
const resultsDiv = document.getElementById('result')
const errorBox = document.getElementById('error')

const parseInputs = (...input) => {
    return input.map(str => parseInt(str))
}

const inputsAreValid = (...input) => {
    return input.every(num => typeof num === 'number' && !isNaN(num))
}

const handleAdditionError = (inputs, numbers) => {
    const fullMessage = inputs.reduce((message, str, index) => {
        if (inputsAreValid(numbers[index])) {
            return message + ""
        } else message + `${str} is not a number`
    }, 'Please enter two valid numbers!')

    errorBox.classList.remove('invisible')
    errorBox.innerText = fullMessage
}

const hideErrors = () => {
    errorBox.classList.add('invisible')
}

hideErrors()

addValuesButton.addEventListener('click', () => {
    hideErrors();
    const inputs = [numberOneInput.value, numberTwoInput.value]
    const parsedInputs = parseInputs(...inputs)
    if (inputsAreValid(...parsedInputs)) {
        resultsDiv.innerText = parsedInputs.reduce((prev, curr) => prev + curr)
    } else {
        resultsDiv.innerText = ""
        handleAdditionError(inputs, parsedInputs)
    }

})
