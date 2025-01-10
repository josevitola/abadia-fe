export type Text = {
  id: string;
  title: string;
  origLanguageId: string;
  dcr: string;
  authors: Human[];
};

export type Human = {
  id: string;
  lastName: string;
  firstName: string;
  name: string;
  country1Id: string;
  country2Id: string;
  birthyear: string;
  deathyear: string;
  pseudonym: string;
  dcr: string;
};

export type Book = {
  id: string;
  title: string;
  npages: number;
  dcr: string;
  year: number;
  printedIn: string;
  isCompilation: boolean;
  editors: Human[];
  authors: Human[];
  publishedId?: string;
  isbn10?: number;
  isbn13?: number;
};
