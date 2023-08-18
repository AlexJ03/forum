import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { FC } from "react";
import { observer } from "mobx-react-lite";
import type { IToggle, toggleHomeType, toggleProfileType } from "@types";

export const Toggle: FC<IToggle<toggleHomeType | toggleProfileType>> = observer( ( { data, currentToggle } ) => {

    return (
        <ToggleButtonGroup
            color="secondary"
            value={currentToggle.value}
            exclusive
            onChange={() => currentToggle.changeValue( currentToggle.value === data[0] ? data[1] : data[0] )}
            aria-label="Platform"
        >
            { data && data.map( ( text: string ) => <ToggleButton size="small" key={text} value={text}>{text}</ToggleButton> ) }
        </ToggleButtonGroup>
    );
} );