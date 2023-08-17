export function handleKeyDown( event: any, fn: () => Promise<void> ) {
    if ( event.key === "Enter" ) {
        fn();
    }
}