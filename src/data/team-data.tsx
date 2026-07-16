import { ITeamDT } from '@/types/team-d-t';
import { Dribble, Facebook, Instagram, X } from '@/components/svg';

export const teamDataOne: ITeamDT[] = [
  {
    id: 1,
    name: 'Earnestine Lucero',
    designation: 'CEO & Founder',
    image: 'https://ik.imagekit.io/mikbqwyy0/p2.jfif',
    phone: '(01) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '90' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '82' },
    ],
  },
  {
    id: 2,
    name: 'Francis Roman',
    designation: 'Foreman',
    image: 'https://ik.imagekit.io/mikbqwyy0/p1.jfif',
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '80' },
      { title: 'Development', value: '85' },
      { title: 'Finance', value: '92' },
    ],
  },
  {
    id: 3,
    name: 'Isco Alarcon',
    designation: 'Manager',
    image: 'https://ik.imagekit.io/mikbqwyy0/824c2711-75b1-4647-adae-4be0411ddd5c.jfif',
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '88' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '83' },
    ],
  },
  {
    id: 4,
    name: 'Kali Ryan',
    designation: 'Warehouse Supervisor',
    image: 'https://ik.imagekit.io/mikbqwyy0/p2.jfif',
    phone: '(91) 870 47 5767',
    email: 'togetoinfo@gmail.com',
    address: 'Hudson, Wisconsin(WI), 54016',
    socials: [
      { platform: <Facebook />, link: 'https://facebook.com' },
      { platform: <X />, link: 'https://x.com' },
      { platform: <Dribble />, link: 'https://dribbble.com/' },
      {
        platform: <Instagram />,
        link: 'https://www.instagram.com/',
      },
    ],
    skills: [
      { title: 'Consulting', value: '78' },
      { title: 'Development', value: '85' },
      { title: 'Finance', value: '59' },
    ],
  }
];

export const teamData: ITeamDT[] = [...teamDataOne];
