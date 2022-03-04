import { setHrOffset } from "@common/utils/nav-function"
import navMenus from "@common/utils/navMenus"
import { NextPage } from "next"
import Link from "next/link"
import { useEffect } from "react"
import NavLayout from "styles/divs/NavLayout"

export interface NavProps {
    menuIndex: number;
}

const Nav: NextPage<NavProps> = (props) => {
    const selectedIndex = props.menuIndex ?? -1
    const selects = [...new Array(navMenus.length)].fill('')
    
    if(selectedIndex >= 0) {
        selects[selectedIndex] = ' selected '
    }

    useEffect(()=>{
        console.log('DOMContentLoaded')
        setHrOffset(selectedIndex, selectedIndex)
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
                                    setHrOffset(selectedIndex, index)
                                }}
                                onMouseLeave={(event) => {
                                    setHrOffset(selectedIndex, selectedIndex)
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