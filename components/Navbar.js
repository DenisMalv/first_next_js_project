import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.scss"

const navigation = [
    { id:1, title:"Home", path:'/'},
    { id:2, title:"Posts", path:'/posts'},
    { id:3, title:"Contacts", path:'/contacts'},
]

const Navbar = ()=>{
    const {pathname} = useRouter()
    return (
        <nav className={styles.nav}>
            <div className={styles.logo }>
                <Image src="/pngwing.com.png" width={60} height={60} alt="Logo" />
            </div>
            <ul className={`${styles.links} flex`}>
                {navigation.map(({id,title,path})=>
                    <li key={id}><Link href={path} className={pathname === path ? styles.active : null}>{title}</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar