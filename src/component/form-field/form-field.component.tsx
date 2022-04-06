import React from "react";

type CustomFormFieldProps = {
    handleChange?: () => void,
    label?: string;
    type?: string;
    name?: string;
    id: string;
    placeholder?: string;
}

const CustomFormField = ({handleChange, type, name, id, placeholder}: CustomFormFieldProps) => (
        <div >
            <input
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                id={id}
            />
    </div>
)
export default CustomFormField;
