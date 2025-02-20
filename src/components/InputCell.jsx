import { useState } from "react"

export default function InputCell({label, text, initialValue, onValueChange}) {
    const [cellValue, setCellValue] = useState(initialValue);

    function handleChange(event) {
        const newValue = Number(event.target.value);
        setCellValue(newValue);
        onValueChange(label, newValue);
    }

    return (
        <div className="input-cell">
            <label>
                {text}
                <input type="number" required value={cellValue} onChange={handleChange}/>
            </label>
        </div>
    )
}
