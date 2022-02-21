import navMenus from "@common/utils/navMenus"
import { addClassNameById, getNumericComputedStyle, removeClassNameById } from "@common/utils/style-functions"
import { NextPage } from "next"
import Link from "next/link"
import { useEffect } from "react"
import NavLayout from "styles/divs/NavLayout"

export type NavProps = {
    selectedIndex?: number;
}

const Nav: NextPage<NavProps> = (props) => {
    const selectedIndex = props.selectedIndex ?? -1
    const selects = [...new Array(navMenus.length)].fill('')
    
    if(selectedIndex >= 0) {
        selects[selectedIndex] = ' selected '
    }

    function setHrOffset(hoveredIndex: number) {
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

            const selectedSpan = (document.querySelectorAll(`nav li span`)[hoveredIndex]) as HTMLElement

            if(navUnderline && selectedSpan!) {
                const offsetWidth = selectedSpan.offsetWidth
                const offsetLeft = atomicOffsetLeft + ulPaddingLeft + getNumericComputedStyle(navListItems[hoveredIndex], 'paddingLeft')
    
                navUnderline!.style.width = `${ offsetWidth }px`
                navUnderline!.style.left = `${ offsetLeft }px`
            }
        }
    }

    useEffect(()=>{
        console.log('DOMContentLoaded')
        setHrOffset(selectedIndex)
    }, [])

    return (
        <NavLayout>
            <h3>
                { navMenus[selectedIndex]?.title ?? 'No Menu Selected' }
            </h3>
            <ul style={{position: "relative"}}>
                {
                    navMenus.map((menu, index, array) => {
                        const { shortName, url } = menu
                        return (
                            <li key={ index } className={ selects[index] }
                                onMouseEnter={(event) => {
                                    setHrOffset(index)
                                }}
                                onMouseLeave={(event) => {
                                    setHrOffset(selectedIndex)
                                }}
                            >
                                <b className="left-curve"></b>
                                <b className="right-curve"></b>
                                <Link href={ url }>
                                    <span>{ shortName }</span>
                                </Link>
                            </li>
                        )
                    })
                }
                <hr id="nav-underline" style={{height: "2px", width: "50px", border: "none", position: "absolute", bottom: "-3px"}} />
            </ul>
        </NavLayout>
    )
}

export default Nav