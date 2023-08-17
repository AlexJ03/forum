import { AES, enc as en, SHA256, DES, TripleDES, Rabbit, RC4, RC4Drop, mode, pad, format } from "crypto-js";

export function encrypt( data: string ): string {
    return data.replace( /\?/g, "^" );
}

export function decrypt( data: string ): string {
    return data.replace( /\^/g, "?" );
}