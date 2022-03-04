import HexaCodeInvalidException from "@common/errors/HexaCodeInvalidException"

/**
 * 색상 코드에 투명도를 부여하여 rgba(...) 문자열을 획득한다.
 * @param hexCode 16진수 코드(다음 양식 중 하나: #AAA, #AAAA, #AAAAAA, #AAAAAAAA, AAA, AAAA, AAAAAA, AAAAAAAA)
 * @param opacity 0 이상 1 이하인 투명도(값이 작을수록 투명)
 * @returns rgba(r, g, b, a)
 */
export function hexWithOpacity(hexCode: string, opacity: number) {
    hexCode = hexCode.replace('#', '')
    let eachHexCodes: number[]

    if (![3, 4, 6, 8].includes(hexCode.length)) {
        throw new HexaCodeInvalidException();
    } else if(opacity > 1 || opacity < 0) {
        throw new Error(`Secondary parameter is opacity of ${opacity} now. But it should be 0~1(inclusive).`)
    }

    const isSummarized = hexCode.length === 3 || hexCode.length === 4
    eachHexCodes = [ ...new Array(3) ].map((_, index) => {
        return parseInt(
            isSummarized ?
                    hexCode[index].repeat(2) :
                    hexCode.substring(index << 1, 2 + (index << 1))
            , 16
        )
    })

    return `rgba(${eachHexCodes[0]}, ${eachHexCodes[1]}, ${eachHexCodes[2]}, ${opacity})`
}