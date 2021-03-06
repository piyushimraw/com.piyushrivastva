interface IExperiments {
  title: string;
  description: string;
  link: string;
  tags: string[];
  date: string; //TODO: convert to date time
  location: string;
}

export const experiments: IExperiments[] = [
  {
    title: 'Simplreact',
    description:
      'A Simple version of react written in typescript where, I made to learn internals of react fiber and hooks.',
    link: 'https://github.com/piyushimrwa/Simplreact',
    tags: ['React Fiber', 'React Hooks', 'JavaScript'],
    date: 'Apr, 2020',
    location: 'github',
  },
  {
    title: 'Collabcoin',
    description:
      'Ethereum based crowd sourcing platform, experimenting with ethereum, solidity and  ',
    link: 'https://collabcoin-piyushimraw.vercel.app/',
    tags: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Next.js'],
    date: 'Jun, 2020',
    location: 'github',
  },
];
