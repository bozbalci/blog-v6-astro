import type {NavLink} from "@types/ui";

const navMenu1: NavLink[] = [
    {href: '/about', text: 'About'},
    {href: '/gallery', text: 'Photos'},
    {href: '/music-collection', text: 'Music Collection'},
    {href: '/colophon', text: 'Colophon'},
    // {href: '/feed', text: 'RSS'},
];

const navMenu2: NavLink[] = [
    {href: 'https://github.com/bozbalci', text: 'GitHub', rel: 'nofollow'},
    {href: 'https://bsky.app/profile/bozbalci.me', text: 'Bluesky', rel: 'nofollow'},
    {href: 'https://linkedin.com/in/bozbalci/', text: 'LinkedIn', rel: 'nofollow'},
    {href: '/contact', text: 'Contact'},
]

export default {navMenu1, navMenu2};