import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { observer } from "mobx-react-lite";
import { toggle } from "../../mobx/toggle";

export const Toggle = observer( () => {

    return (
        <ToggleButtonGroup
            color="secondary"
            value={toggle.value}
            exclusive
            onChange={() => toggle.changeValue( toggle.value === "Пользователи" ? "Категории" : "Пользователи" )}
            aria-label="Platform"
        >
            <ToggleButton value="Категории">Категории</ToggleButton>
            <ToggleButton value="Пользователи">Пользователи</ToggleButton>
        </ToggleButtonGroup>
    );
} );