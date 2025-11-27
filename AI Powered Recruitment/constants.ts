import { Job, Application, UserRole, User } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Alex Developer',
  email: 'alex@example.com',
  role: UserRole.SEEKER, // Default role, can be toggled
  avatarUrl: 'https://picsum.photos/100/100'
};

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior React Engineer',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    salary: '$140k - $180k',
    postedAt: '2 days ago',
    description: 'We are looking for an experienced React developer to lead our frontend team.',
    requirements: ['React 18+', 'TypeScript', 'Tailwind CSS', '5+ years experience']
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'Creative Studio',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$110k - $150k',
    postedAt: '4 hours ago',
    description: 'Join our award-winning design team to create beautiful user experiences.',
    requirements: ['Figma', 'UI/UX principles', 'Prototyping', 'Portfolio required']
  },
  {
    id: '3',
    title: 'Backend Engineer (Node.js)',
    company: 'Serverless Inc.',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$80/hr',
    postedAt: '1 week ago',
    description: 'Help us build scalable microservices using Node.js and AWS.',
    requirements: ['Node.js', 'AWS Lambda', 'DynamoDB', 'API Design']
  },
  {
    id: '4',
    title: 'Marketing Manager',
    company: 'Growth Rocket',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$90k - $120k',
    postedAt: '3 days ago',
    description: 'Lead our growth initiatives and manage digital marketing campaigns.',
    requirements: ['SEO/SEM', 'Google Analytics', 'Content Strategy', 'Team Leadership']
  }
];

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'a1',
    jobId: '2',
    jobTitle: 'Product Designer',
    company: 'Creative Studio',
    status: 'Interview',
    appliedAt: '2023-10-15'
  },
  {
    id: 'a2',
    jobId: '3',
    jobTitle: 'Backend Engineer',
    company: 'Serverless Inc.',
    status: 'Applied',
    appliedAt: '2023-10-20'
  }
];
