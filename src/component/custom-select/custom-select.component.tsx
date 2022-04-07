import React from "react";

type CustomSelectProps = {
    children?: any[],
    handleChange: (event: any) => void;
}

const CustomSelect = ({children, handleChange}: CustomSelectProps) => {

    return (
        <select
            className="w-24 border border-gray-300 px-3 py-2 rounded-lg bg-white shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none"
            onChange={handleChange}
        >
            <option value="">Select</option>
            {
                children?.map(child => <option key={child} value={child}>{child}</option>)
            }
        </select>
    )
}

export default CustomSelect;
