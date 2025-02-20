import Button from "./Button";
import InputCell from "./InputCell";

export default function UserInput({onReset, onCalculate, values, onValueChange}) {
    return (
        <section id="user-input">
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
                                initialValue={values.expectedReturn}
                                onValueChange={onValueChange}/>
                        </span>
                        <span>
                            <InputCell 
                                text="Yearly Savings ($)"
                                label="annualInvestment"
                                initialValue={values.annualInvestment}
                                onValueChange={onValueChange}/>
                            <InputCell 
                                text="Investment Duration (years)"
                                label="duration"
                                initialValue={values.duration} 
                                onValueChange={onValueChange}/>
                        </span>
                    </div>
            <div className="center">
                <Button onSelect={onReset} id="reset-btn">Reset</Button>
                <Button onSelect={onCalculate} id="calculate-btn">Calculate</Button>
            </div>
        </section>
    );
}
