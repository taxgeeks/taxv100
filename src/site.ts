// Firm details used across the site. Edit here, not in individual pages.
// TODO: replace every placeholder below with the firm's real details.
export const site = {
  name: 'TaxGeeks',
  tagline: 'Tax preparation, planning and bookkeeping for individuals and small businesses.',
  phone: '(000) 000-0000',
  email: 'info@taxgeeks.com',
  address: 'Street address, City, State ZIP',
  hours: 'Mon–Fri, 9am–6pm',
  // The firm's separate secure client portal. All document uploads go there.
  portalUrl: 'https://portal.example.com',
  // Online booking link (Calendly, the portal's scheduler, etc.).
  bookingUrl: 'https://portal.example.com/book',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    title: 'Individual tax returns',
    description: 'Federal and state returns for W-2 employees, freelancers, investors and retirees.',
  },
  {
    title: 'Business tax returns',
    description: 'Returns for sole proprietors, partnerships, S corporations and C corporations.',
  },
  {
    title: 'Tax planning',
    description: 'Year-round planning so there are no surprises when filing season comes.',
  },
  {
    title: 'Bookkeeping',
    description: 'Monthly books kept clean and ready for tax time.',
  },
  {
    title: 'Payroll',
    description: 'Payroll processing and payroll tax filings for small businesses.',
  },
  {
    title: 'Business formation',
    description: 'Help choosing and setting up the right entity for a new business.',
  },
  {
    title: 'IRS and state notices',
    description: 'We review the letter, explain what it means and respond on your behalf.',
  },
];
