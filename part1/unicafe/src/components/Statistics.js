import React from "react";
import Statistic from "./Statistic";

const Statistics = ({good, neutral, bad}) => {
    const all = good+neutral+bad;
    const average = (good-bad) /all;
    const positive = (good/all) *100;
    return (
        <div>
            <table>
                <tbody>
                        <tr><td><Statistic text="good" value={good} /></td></tr>
                        <tr><td><Statistic text="neutral" value={neutral} /></td></tr>
                        <tr><td><Statistic text="bad" value={neutral} /></td></tr>
                        <tr><td><Statistic text="all" value={all} /></td></tr>
                        <tr><td><Statistic text="average" value={average} /></td></tr>
                        <tr><td><Statistic text="positive" value={positive + ' %'} /></td></tr>
                </tbody>

            </table>
        </div>
    )
}

export default Statistics;