import { Account } from './data/account.model';

export const ACCOUNTS: Account[] = [
  { id: "1234",
    address:
    { id: "1111",
      city: "Arlington",
      country: "US",
      postalCode: "76010",
      stateProvince: "Texas",
      street: "80 Mesquite"
    },
    name: 'Smith Family',
    payments:
    [
      { id: "2222",
        cardExpirationDate: new Date(2024, 3, 1),
        cardName: "John Smith",
        cardNumber: "1234-5678-9012"
      },
      { id: "2224",
        cardExpirationDate: new Date(2024, 2, 1),
        cardName: "Jane Smith",
        cardNumber: "1234-5678-9014"
      },
    ]
    ,
    profiles:
    [
      {
        id: "1",
        email: "jasmi@email.com",
        name:
        {
          id: "1772",
          family: "Smith",
          given: "Jane"
        },
        phone: "123-456-7890"
      },
      {
        id: "2",
        email: "josmi@email.com",
        name:
        {
          id: "1773",
          family: "Smith",
          given: "John"
        },
        phone: "123-456-6666"
      }
    ]
  }
];
