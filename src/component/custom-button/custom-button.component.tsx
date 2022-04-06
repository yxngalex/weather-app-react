import React, {Children, PropsWithChildren} from "react";

type CustomButtonProps = {
    name: string,
    onClick?: () => void

}

const CustomButton = ({name, onClick}: CustomButtonProps) => (
    <div>
        <button
            onClick={onClick}
            className=""
        >
            {name}
        </button>
    </div>
);

export default CustomButton;
