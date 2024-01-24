import React from 'react'
import Theme from '../theme/Theme'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="header__wrap">
                <div className="container">
                    <h1 className="logo">AMBITIOUS</h1>
                    <nav className='header__nav'>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/'>Blog</Link></li>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Login</Link></li>
                            <li><Link href='/'>Sign In</Link></li>
                        </ul>
                    </nav>
                    <div className="header__mobile">
                        <span></span>
                    </div>
                    <Theme />
                </div>
            </div>
        </header>
    )
}
