export default class HexaCodeInvalidException extends Error {
    message: string = `The parameter of hexa code should be a string following one of these pattern:
        AAA
        #AAA
        AAAA
        #AAAA
        AAAAAA
        #AAAAAA
        AAAAAAAA
        #AAAAAAAA
    `
    name: string = 'HexaCodeInvalidException'
}