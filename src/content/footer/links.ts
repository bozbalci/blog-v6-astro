type NavMenuItem = {
    href: string;
    text: string;
    rel?: string | null;
};

const navMenu1: NavMenuItem[] = [
    {href: '/about', text: 'About'},
    // {href: '/gallery', text: 'Photos'},
    {href: '/colophon', text: 'Colophon'},
    // {href: '/feed', text: 'RSS'},
];

const navMenu2: NavMenuItem[] = [
    {href: 'https://github.com/bozbalci', text: 'GitHub', rel: 'nofollow'},
    {href: 'https://bsky.app/profile/bozbalci.me', text: 'Bluesky', rel: 'nofollow'},
    {href: 'https://linkedin.com/in/bozbalci/', text: 'LinkedIn', rel: 'nofollow'},
    {href: '/contact', text: 'Contact'},
]

export default {navMenu1, navMenu2};