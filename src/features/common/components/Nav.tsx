import navMenus from "@common/utils/navMenus"
import { NextPage } from "next"
import Link from "next/link"
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

    return (
        <NavLayout>
            <h3>
                { navMenus[selectedIndex]?.title ?? 'No Menu Selected' }
            </h3>
            <ul>
                {
                    navMenus.map((menu, index, array) => {
                        const { shortName, url } = menu
                        return (
                            <li key={ index } className={ selects[index] }>
                                <b className="left-curve"></b>
                                <b className="right-curve"></b>
                                <Link href={ url }>
                                    <span>{ shortName }</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </NavLayout>
    )
}

export default Nav