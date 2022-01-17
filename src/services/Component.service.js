class ComponentService {

    constructor() {

        this.numberOneInput = document.getElementById('numberOne')
        this.numberTwoInput = document.getElementById('numberTwo')
        this.addValuesButton = document.getElementById('addValues')
        this.resultsDiv = document.getElementById('result')
    }

    getInputs() {
        return [this.numberTwoInput.value, this.numberOneInput.value]
    }

    setResult(str) {
        this.resultsDiv.innerText = str;
    }

    onClick(cb) {
        this.addValuesButton.addEventListener('click', cb)
    }
}

export default ComponentService
