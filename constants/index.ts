import {
  Code,
  Github,
  ImageIcon,
  Linkedin,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  GalleryVertical,
} from 'lucide-react'

export const MAX_FREE_COUNTS = 10 as const

export const TESTIMONIALS = [
  {
    name: 'Tomaž Hribar',
    image: '/users/james-barr.png',
    title: 'Specialist za marketing',
    description:
      'Ta aplikacija je sprememba igre! Naložil sem fotografijo svoje dnevne sobe in v nekaj sekundah mi je ponudila več možnosti oblikovanja. Umetna inteligenca je popolnoma razumela moj slog in poskrbela, da je soba delovala sveže in moderno brez kakršnih koli težav. Priporočam!',
  },
  {
    name: 'Eva Koren',
    image: '/users/brock-wegner.png',
    title: 'Študent',
    description:
      'To orodje mi je naravnost všeč! Nisem dobera v notranjem oblikovanju, toda ta aplikacija mi je to tako olajšala. Pravkar sem naložila sliko svoje spalnice in umetna inteligenca je predlagala osupljive modele, ki se jih sama nikoli ne bi spomnila. Neverjetni rezultati!',
  },
  {
    name: 'Miha Zupan',
    image: '/users/samuel-raita.png',
    title: 'Podjetnik',
    description:
      'Generator oblikovanja AI me je navdušil! V nekaj minutah sem si lahko ogledal različne sloge pohištva za svoje novo stanovanje. Je izjemno prijazen uporabniku in daje rezultate na profesionalni ravni.',
  },
  {
    name: 'Špela Vidmar',
    image: '/users/evan-wise.png',
    title: 'Grafični oblikovalec',
    description: 'Ta aplikacija mi je prihranila toliko časa in denarja. Nisem bila prepričana, kako preoblikovati svoj prostor, vendar mi je umetna inteligenca dala fantastične ideje, ki so popolnoma ustrezale mojemu okusu. Postopek je potekal gladko, rezultati pa neverjetni!',
  },
] as const

export const TOOLS = [
  // {
  //   label: 'Conversation',
  //   icon: MessageSquare,
  //   color: 'text-violet-500',
  //   bgColor: 'bg-violet-500/10',
  //   href: '/conversation',
  // },
  // {
  //   label: 'Music Generation',
  //   icon: Music,
  //   color: 'text-emerald-500',
  //   bgColor: 'bg-violet-500/10',
  //   href: '/music',
  // },
  {
    label: 'Sobni Generator',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
  // {
  //   label: 'Pomoč',
  //   icon: VideoIcon,
  //   color: 'text-orange-700',
  //   bgColor: 'bg-orange-700/10',
  //   href: '/video',
  // },
  {
    label: 'Kontakt',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
  },
] as const

export const ROUTES = [
  {
    label: 'Začetna stran',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  ...TOOLS,
  {
    label: 'Nastavitve',
    icon: Settings,
    href: '/settings',
    color: null,
  },
] as const

export const FOOTER_LINKS = [
  // {
  //   name: 'Project',
  //   icon: GalleryVertical,
  //   link: 'https://redtomato0129.com/portfolio/jarvis-ai',
  // },
  // {
  //   name: 'Linkedin',
  //   icon: Linkedin,
  //   link: 'https://linkedin.com/in/redtomato0129',
  // },
  // {
  //   name: 'Github',
  //   icon: Github,
  //   link: 'https://github.com/redtomato0129/jarvis-ai',
  // },
]
