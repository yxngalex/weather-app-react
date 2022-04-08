import React from "react";

type CustomFormFieldProps = {
    handleChange?: (value: any) => void,
    label?: string;
    type?: string;
    name?: string;
    id: string;
    placeholder?: string;
    suggestions?: string[];
    onSuggestHandler?: (text: string) => void;
    value?: string;
}

const CustomFormField = ({handleChange, type, name, id, placeholder, suggestions, onSuggestHandler, value}: CustomFormFieldProps) => {

    const handleSuggestion = (text: string) => {
        if (onSuggestHandler) {
            onSuggestHandler(text);
            suggestions = [];
        }
    }

    return (
        <div className="relative">
            <input
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                id={id}
                value={value}
            />
            <div className="absolute w-full">
                {suggestions && suggestions.map((suggestion, i) =>
                    <div key={i}
                         className="justify-center block cursor-pointer border-r bg-white border-b border-l hover:bg-indigo-300 hover:text-white"
                         onClick={() => handleSuggestion(suggestion)}
                    >
                        {suggestion}
                    </div>
                )}
            </div>
        </div>
    )
}
export default CustomFormField;
