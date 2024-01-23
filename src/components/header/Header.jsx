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
                    {/* <div className="header__left">
                        <h1 className="logo">
                            CODEWA
                        </h1>
                    </div>
                    <div className="header__center">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Notice</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">About us</a></li>
                        </ul>
                    </div>
                    <div className='header__mobile'>
                        <span></span>
                    </div>
                    <div className="header__right">
                        <a href="/" className="login">LogIn</a>
                        <a href="/" className="join">Sign up</a>
                    </div> */}
                    <Theme />
                </div>
            </div>
        </header>
    )
}
