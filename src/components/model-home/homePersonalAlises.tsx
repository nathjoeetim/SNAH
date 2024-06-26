type propertiesAlises = {
  link: String;
  text: String;
};

export type PersonalHomeAlises = {
  uniqueID: String | Number;
  header: String;
  properties: propertiesAlises[];
};

export const AccountType: PersonalHomeAlises[] = [
  {
    header: "Bank Account",
    uniqueID: "BA1",
    properties: [
      {
        link: "#",
        text: "Saving Account",
      },
      {
        link: "#",
        text: "Salary Account",
      },
      {
        link: "#",
        text: "Current Account",
      },
      {
        link: "#",
        text: "Private Account",
      },
      {
        link: "#",
        text: "Domiciliary Account",
      },
    ],
  },
  {
    header: "Cards",
    uniqueID: "CA1",
    properties: [
      {
        link: "#",
        text: "Virtual Card",
      },
      {
        link: "#",
        text: "Debit Card",
      },
      {
        link: "#",
        text: "Credit Card",
      },
      {
        link: "#",
        text: "Prepaid Card",
      },
    ],
  },
  {
    header: "Electronic Banking",
    uniqueID: "EB1",
    properties: [
      {
        link: "#",
        text: "Zenith Direct",
      },
      {
        link: "#",
        text: "Internet Banking",
      },
      {
        link: "#",
        text: "Mobile App",
      },
      {
        link: "#",
        text: "POS",
      },
    ],
  },
];

export const SmeAlises: PersonalHomeAlises[] = [
  {
    uniqueID: "sme1",
    header: "Bank Accounts",
    properties: [
      {
        text: "SME grow my buiness",
        link: "#",
      },
      {
        text: "Partnership Accounts",
        link: "#",
      },
      {
        text: "Clubs, Societies",
        link: "#",
      },
      {
        text: "SME grow my buiness",
        link: "#",
      },
    ],
  },
  {
    uniqueID: "sme1",
    header: "Business Service",
    properties: [
      {
        text: "E-service",
        link: "#",
      },
      {
        text: "Import Letter of Credit (LC)",
        link: "#",
      },
      {
        text: "Export Transactions",
        link: "#",
      },
      {
        text: "Loans",
        link: "#",
      },
    ],
  },
  {
    header: "Electronic Banking",
    uniqueID: "EB1",
    properties: [
      {
        link: "#",
        text: "Zenith Direct",
      },
      {
        link: "#",
        text: "E-Business Solutions",
      },
      {
        link: "#",
        text: "Banking Mobile App",
      },
      {
        link: "#",
        text: "Scan To Pay",
      },
    ],
  },
];

export const CorporateAlises: PersonalHomeAlises[] = [
  {
    uniqueID: "cor01",
    header: "Bank Accounts",
    properties: [
      {
        link: "#",
        text: "LLC Accounts",
      },
      {
        link: "#",
        text: "Enterprise Accounts",
      },
      {
        link: "#",
        text: "NGOs",
      },
      {
        link: "#",
        text: "Trust Funds",
      },
    ],
  },
  {
    uniqueID: "cor02",
    header: "Loan & Investment",
    properties: [
      {
        link: "#",
        text: "Loans",
      },
    ],
  },
  {
    uniqueID: "cor01",
    header: "Card Solutions",
    properties: [
      {
        link: "#",
        text: "LLC Accounts",
      },
      {
        link: "#",
        text: "Enterprise Accounts",
      },
      {
        link: "#",
        text: "NGOs",
      },
      {
        link: "#",
        text: "Trust Funds",
      },
    ],
  },
];

export const AboutUsAlises: PersonalHomeAlises[] = [
  {
    header: "Corporate Governance",
    uniqueID: "cg1",
    properties: [
      {
        link: "#",
        text: "About Us",
      },
      {
        link: "#",
        text: "Board of Director",
      },
      {
        link: "#",
        text: "Management Team",
      },
    ],
  },
  {
    header: "Business Focus",
    uniqueID: "cg1",
    properties: [
      {
        link: "#",
        text: "Technology of Tomorrow",
      },
      {
        link: "#",
        text: "Accuracy",
      },
      {
        link: "#",
        text: "Connection",
      },
      {
        link: "#",
        text: "Caring",
      },
    ],
  },
];
