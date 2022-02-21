import { addClassNameById, getNumericComputedStyle, removeClassNameById } from "@common/utils/style-functions"

export function setHrOffset(selectedIndex: number, hoveredIndex: number) {
    const navUnderline = document.getElementById('nav-underline')
    const ul = document.querySelector('nav ul')

    if(ul) {
        if(hoveredIndex !== selectedIndex) {
            addClassNameById('nav-underline', 'sub')
        } else {
            removeClassNameById('nav-underline', 'sub')
        }

        let atomicOffsetLeft = 0;
        const ulPaddingLeft = getNumericComputedStyle(ul!, 'paddingLeft')
        const navListItems = Array.from(document.querySelectorAll(`nav li`))
                .map((element, index) => {
                    if(index < hoveredIndex) {
                        atomicOffsetLeft += (element as HTMLElement).offsetWidth
                    }
                    return element as HTMLElement
                })

        const hoveredSpan = (document.querySelectorAll(`nav li span`)[hoveredIndex]) as HTMLElement

        if(navUnderline && hoveredSpan!) {
            const offsetWidth = hoveredSpan.offsetWidth
            const offsetLeft = atomicOffsetLeft + ulPaddingLeft + getNumericComputedStyle(navListItems[hoveredIndex], 'paddingLeft')

            navUnderline!.style.width = `${ offsetWidth }px`
            navUnderline!.style.left = `${ offsetLeft }px`
        }
    }
}