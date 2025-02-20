import InputCell from "./InputCell"


const CELL_VALUES = [
    {
        label: "Current Saving ($)"
    },
    {
        label: "Expected Interest (%, per year)"
    },
    {
        label: "Yearly Savings ($)"
    },
]

export default function InputGroup({ values }) {


    return (
        <div className="input-group">
            <span>
                <InputCell label="Current Saving ($)" initialValue={values.initialInvestment}/>
                <InputCell label="Expected Interest (%, per year)" initialValue={values.annualInvestment}/>
            </span>
            <span>
                <InputCell label="Yearly Savings ($)" initialValue={values.expectedReturn}/>
                <InputCell label="Investment Duration (years)" initialValue={values.duration} />
            </span>
        </div>
    )
}
