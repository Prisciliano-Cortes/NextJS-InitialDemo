import { ActiveLink } from './ActiveLink';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav>
            {
                menuItems.map( ({text, href}, id) => (
                    <ActiveLink key={id} text={text} href={href} />
                ))
            }
        </nav>
    )
}
