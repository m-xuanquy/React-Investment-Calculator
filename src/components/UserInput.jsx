import InputGroup from "./InputGroup";
import Button from "./Button";
import InputCell from "./InputCell";

export default function UserInput({onReset, onCalculate, values, onValueChange}) {
    return (
        <div id="user-input">
            <div className="input-group">
                        <span>
                            <InputCell 
                                text="Current Saving ($)"
                                label="initialInvestment"
                                initialValue={values.initialInvestment}
                                onValueChange={onValueChange}/>
                            <InputCell 
                                text="Expected Return (%)"
                                label="expectedReturn"
                                initialValue={values.annualInvestment}
                                onValueChange={onValueChange}/>
                        </span>
                        <span>
                            <InputCell 
                                text="Yearly Savings ($)"
                                label="annualInvestment"
                                initialValue={values.expectedReturn}
                                onValueChange={onValueChange}/>
                            <InputCell 
                                text="Investment Duration (years)"
                                label="duration"
                                initialValue={values.duration} 
                                onValueChange={onValueChange}/>
                        </span>
                    </div>
            <div className="center">
                <Button onSelect={onReset}>Reset</Button>
                <Button onSelect={onCalculate}>Calculate</Button>
            </div>
        </div>
    );
}
