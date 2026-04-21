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
          { label: 'Freezone Company Formation', href: '/services/business-setup/freezone' },
          { label: 'Offshore Company Formation', href: '/services/business-setup/offshore' },
          { label: 'Mainland Company Formation', href: '/services/business-setup/mainland' },
        ],
      },
      {
        label: 'Bookkeeping & Audit',
        href: '/services/bookkeeping',
        children: [
          { label: 'Basic Bookkeeping and MIS', href: '/services/bookkeeping/mis' },
          { label: 'Outsourced Accounting', href: '/services/bookkeeping/outsourced' },
          { label: 'Statutory Audit', href: '/services/bookkeeping/statutory' },
          { label: 'Internal Audit', href: '/services/bookkeeping/internal' },
          { label: 'Stock Audit', href: '/services/bookkeeping/stock' },
          { label: 'Due Diligence Audit', href: '/services/bookkeeping/due-diligence' },
          { label: 'Temporary and Long-Term Accounting Staffing Solutions', href: '/services/bookkeeping/staffing' },
          { label: 'Updating Backlog Accounting', href: '/services/bookkeeping/backlog' },
        ],
      },
      {
        label: 'VAT Advisory',
        href: '/services/vat',
        children: [
          { label: 'VAT Registration', href: '/services/vat/registration' },
          { label: 'VAT Deregistration', href: '/services/vat/deregistration' },
          { label: 'VAT Accounting', href: '/services/vat/accounting' },
          { label: 'VAT Return Filling', href: '/services/vat/return' },
          { label: 'VAT Audit', href: '/services/vat/audit' },
          { label: 'VAT Health Check', href: '/services/vat/health-check' },
        ],
      },
      {
        label: 'Corporate Tax',
        href: '/services/corporate-tax',
        children: [
          { label: 'Corporate Tax Registration', href: '/services/corporate-tax/registration' },
          { label: 'Corporate Tax Return Filling', href: '/services/corporate-tax/return' },
          { label: 'Corporate Tax Impact Assessment', href: '/services/corporate-tax/impact' },
          { label: 'TAX Planning', href: '/services/corporate-tax/planning' },
        ],
      },
      {
        label: 'Compliance Services',
        href: '/services/compliance',
        children: [
          { label: 'ESR Services', href: '/services/compliance/esr' },
          { label: 'UBO Services', href: '/services/compliance/ubo' },
          { label: 'AML Compliance Services', href: '/services/compliance/aml' },
          { label: 'ERP Implementation/Automation', href: '/services/compliance/erp' },
        ],
      },
      {
        label: 'Advisory Services',
        href: '/services/advisory',
        children: [
          { label: 'Business Feasibility Study', href: '/services/advisory/feasibility' },
          { label: 'Pitch Deck Preparation', href: '/services/advisory/pitch-deck' },
          { label: 'Business Valuation', href: '/services/advisory/valuation' },
          { label: 'Due Diligence Report', href: '/services/advisory/due-diligence' },
          { label: 'Strategic Advisory for Growth and Expansion', href: '/services/advisory/strategic' },
        ],
      },
      {
        label: 'CFO Services',
        href: '/services/cfo',
        children: [
          { label: 'Outsource CFO Services', href: '/services/cfo/outsource' },
          { label: 'Budgeting and Forecasting', href: '/services/cfo/budgeting' },
          { label: 'Cost Control and Profit Maximization Strategy', href: '/services/cfo/strategy' },
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
      { label: 'Blog', href: '/resources/blog' },
      { label: "FAQ's", href: '/resources/faqs' },
      { label: 'Service Insights', href: '/resources/insights' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];
