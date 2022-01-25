import ComponentService from "./services/Component.service";
import AlertService from "./services/Alert.service";
import {parseInputs,inputsAreValid} from "./utils";
import "./main.scss"

const alertService = new AlertService()
const componentService = new ComponentService()

const run = (alertService, componentService) => {

    alertService.hideErrors()

    componentService.onClick(() => {
        alertService.hideErrors()
        const inputs = componentService.getInputs()
        const parsedInputs = parseInputs(...inputs)
        if (inputsAreValid(...parsedInputs)) {
            componentService.setResult(parsedInputs.reduce((prev, curr) => prev + curr))
        } else {
            componentService.setResult('')
            alertService.handleAdditionError(inputs, parsedInputs)
        }

    })
}

run(alertService, componentService)
