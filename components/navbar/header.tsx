import CustomLink from './custom-links'
import style from './styles.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <CustomLink href="/" className={style.active}>GabrielHDZ</CustomLink>{' '}
            <nav className={style.nav}>

                <CustomLink href="/project" prefetch className={style.active}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="white" className="bi bi-code-slash" viewBox="0 -2 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                    <span className={style.span}> Proyectos</span>
                </CustomLink>
                <CustomLink href="/contact" prefetch className={style.active}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="white" className="bi bi-person-video2" viewBox="0 -2 16 16">
                        <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" />
                    </svg>
                    <span className={style.span}> Contacto</span>
                </CustomLink>
                <CustomLink href="/profile" prefetch className={style.active}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="white" className="bi bi-person" viewBox="0 -2 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <span className={style.span}> Sobre mi</span>
                </CustomLink>
            </nav>
        </header>
    )
}
