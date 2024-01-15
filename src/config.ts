/**
 * 
 * Site Configuration
 * 
 */


/**
 * Site Info
 */

export const SITE_URL = 'http://'

export const SITE_BASE_PATH = '/'

export const SITE_FULL_NAME = 'Elite Canadian Homestay'

export const SITE_SHORT_NAME = 'Elite Canadian Homestay'

export const LOGO_NAME = SITE_SHORT_NAME

export const PHONE_NUMBER = '604-617-1200'

export const EMAIL_ADDRESS = 'lkelitehomestay@gmail.com'

export const LOCATION = 'Langley, BC'

export const ADDRESS = '#45 5670 208 Street Langley, BC, Canada. V3A 8G4'

export const HEADER_LOGO_PATH = '/img/logo.svg'

export const HEADER_LOGO_DIMENSIONS = { width : 28, height : 28 }

export const HERO_IMG_PATH = '/img/hero.webp'

export const HERO_IMG_ALT_TEXT = 'Hero image alt text'

export const HERO_IMG_DIMENSIONS = { width : 200, height : 100 }

export const FAVICON_PATH = '/meta-img/favicon.svg'

export const OPENGRAPH_PATH = '/meta-img/og.png'




/**
 * Site Pages
 */

export type PageGroup = 'header' | 'footer' | 'services' | 'about'

export interface Page {
    title : string,
    path  : string,
    group : PageGroup[],
    dropdown? : PageGroup
}



export const PAGES : Page[] = [
    {
        title : 'Home',
        path  : '/',
        group : ['header', 'footer'],
    },
    {
        title : 'Programs',
        path  : '/programs',
        group : ['header', 'footer'],
    },
    {
        title : 'Students',
        path  : '/students',
        group : ['header', 'footer'],
    },
    {
        title : 'Host Families',
        path  : '/host-families',
        group : ['header', 'footer'],
    },
    {
        title : 'About',
        path  : '/about',
        group : ['header', 'footer'],
    },
    {
        title : 'Contact',
        path  : '/contact',
        group : ['header', 'footer'],
    },
    {
        title : 'Register',
        path  : '/register',
        group : ['header', 'footer'],
    },
]





export const CTAPath = '/register'





export interface Contactlink {
    title : string,
    icon? : string,
    path?  : string
}

export const CONTACT_LINKS: Contactlink[] = [
    {
        title : PHONE_NUMBER,
        icon  : 'phone_iphone',
        path  : 'tel:' + PHONE_NUMBER
    },
    {
        title : EMAIL_ADDRESS,
        icon  : 'email',
        path  : 'mailto:' + EMAIL_ADDRESS
    },
    {
        title : LOCATION,
        icon  : 'place',
    },
]

