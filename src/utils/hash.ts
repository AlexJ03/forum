export function encrypt( data: string ): string {
    return data.replace( /\?/g, "^" );
}

export function decrypt( data: string ): string {
    return data.replace( /\^/g, "?" );
}