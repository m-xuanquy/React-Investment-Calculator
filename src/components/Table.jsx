import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./../util/investment"

const tableHeaders = ["Year", "Total Savings", "Interest (Year)", "Total Interest", "Invested Capital"]


export default function Table({ display, values, onCalculate }) {
    const [isDisplay, setIsDisplay] = useState(display);

    const tableBody = calculateInvestmentResults(values);

    return (
        (!display ? <p className="center">No Data Available</p> :
            (
                <table id="result">
                    <thead>
                        <tr>
                            {tableHeaders.map((header) => <th key={header}>{header}</th>)}
                        </tr>
                    </thead>

                    <tbody>
                        {tableBody.map((row) => (
                            <tr key={`info-${row.year}`}>
                                <td key={`year-${row.year}`}>
                                    {row.year}
                                </td>
                                <td key={`totalSavings-${row.totalSavings}`}>
                                    {formatter.format(row.totalSavings)}
                                </td>
                                <td key={`interest-${row.year}`}>
                                    {formatter.format(row.interest)}
                                </td>
                                <td key={`valueEndOfYear-${row.year}`}>
                                    {formatter.format(row.valueEndOfYear)}
                                </td>
                                <td key={`annualInvestment-${row.year}`}>
                                    {formatter.format(row.annualInvestment)}
                                </td>
                            </tr>)
                        )}

                    </tbody>
                </table>
            )
        )
    );
}