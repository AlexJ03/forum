import type { KeyboardEvent } from "react";

export function handleKeyDown( event: KeyboardEvent<HTMLInputElement>, fn: () => Promise<void> ) {
    if ( event.key === "Enter" ) {
        fn();
    }
}