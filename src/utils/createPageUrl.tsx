// utils/createPageUrl.ts

export const createPageUrl = (page: string): string => {
  switch (page) {
    case 'Home':
      return '/';
    case 'Services':
      return '/services';
    case 'About':
      return '/about';
    case 'Contact':
      return '/contact';
    default:
      return '/'; // fallback to home to avoid undefined
  }
};
