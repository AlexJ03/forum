export function formatDate( date: Date ) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString( "ru" );

    const fullDate = day + "/" + month + "/" + year + " " + time;

    return fullDate;
}

export function parseDate( date: string ) {
    const data: Date = JSON.parse( date );

    return new Date( data );
}