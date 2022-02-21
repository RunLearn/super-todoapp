export function removeClassNameById(id: string, className: string) {
    document.getElementById(id)!.classList.remove(className)
}

export function addClassNameById(id: string, className: string) {
    document.getElementById(id)!.classList.add(className)
}

export function getNumericComputedStyle(element: Element, styleAttribute: any) {
    return Number(window.getComputedStyle(element)[styleAttribute].split('px')[0])
}