export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    href: '/company',
    children: [
      { label: 'About Us', href: '/company/about' },
      { label: 'WHY US ?', href: '/company/why-us' },
      { label: 'Corporate Social Responsibility', href: '/company/csr' },
      { label: 'Join Us', href: '/company/join-us' },
      { label: 'Company Profile', href: '/company/profile' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Business Setup Services',
        href: '/services/business-setup',
        children: [
          { label: 'Mainland Company Formation', href: '/services/business-setup/mainland' },
          { label: 'Freezone Company Formation', href: '/services/business-setup/freezone' },
          { label: 'Offshore Company Formation', href: '/services/business-setup/offshore' },
          { label: 'Professional/Trading License', href: '/services/business-setup/license' },
        ],
      },
      {
        label: 'Bookkeeping & Audit',
        href: '/services/bookkeeping',
        children: [
          { label: 'Statutory Audit', href: '/services/bookkeeping/statutory' },
          { label: 'Internal Audit', href: '/services/bookkeeping/internal' },
          { label: 'Bookkeeping & Accounting', href: '/services/bookkeeping/accounting' },
          { label: 'Backlog Accounting', href: '/services/bookkeeping/backlog' },
          { label: 'Inventory Audit', href: '/services/bookkeeping/inventory' },
        ],
      },
      {
        label: 'VAT Advisory',
        href: '/services/vat',
        children: [
          { label: 'VAT Registration', href: '/services/vat/registration' },
          { label: 'VAT Return Filing', href: '/services/vat/return' },
          { label: 'VAT Compliance', href: '/services/vat/compliance' },
          { label: 'VAT Audit & Health Check', href: '/services/vat/audit' },
        ],
      },
      {
        label: 'Corporate Tax',
        href: '/services/corporate-tax',
        children: [
          { label: 'Corporate Tax Registration', href: '/services/corporate-tax/registration' },
          { label: 'Tax Impact Assessment', href: '/services/corporate-tax/impact' },
          { label: 'Tax Planning & Compliance', href: '/services/corporate-tax/planning' },
        ],
      },
      {
        label: 'Compliance Services',
        href: '/services/compliance',
        children: [
          { label: 'ESR Services', href: '/services/compliance/esr' },
          { label: 'UBO Services', href: '/services/compliance/ubo' },
          { label: 'AML Compliance', href: '/services/compliance/aml' },
        ],
      },
      {
        label: 'Advisory Services',
        href: '/services/advisory',
        children: [
          { label: 'Strategic Advisory', href: '/services/advisory/strategic' },
          { label: 'Business Feasibility Study', href: '/services/advisory/feasibility' },
          { label: 'Business Valuation', href: '/services/advisory/valuation' },
        ],
      },
      {
        label: 'CFO Services',
        href: '/services/cfo',
        children: [
          { label: 'Outsourced CFO Services', href: '/services/cfo/outsourced' },
          { label: 'Budgeting & Forecasting', href: '/services/cfo/budgeting' },
          { label: 'Financial Reporting', href: '/services/cfo/reporting' },
        ],
      },
      {
        label: 'UAE Residency',
        href: '/services/residency',
        children: [
          { label: 'Golden Visa Assistance', href: '/services/residency/golden-visa' },
          { label: 'Equivalency Certificate', href: '/services/residency/equivalency' },
          { label: 'Visa Processing Services', href: '/services/residency/visa' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blogs', href: '/resources/blogs' },
      { label: "FAQ's", href: '/resources/faqs' },
      { label: 'Service Insights', href: '/resources/insights' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];
