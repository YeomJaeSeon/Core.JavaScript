enum PhoneType {
  HOME = 'home',
  OFFICE = 'office',
  STUDIO = 'studio',
}
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export { PhoneType, Contact, PhoneNumberDictionary };
