export interface ITraining {
  id: number;
  code: string;
  name: string;
  hidden: boolean;
  startDate?: string;
  price?: number;
  description?: string;
  starRating?: number;
  format?: string;
  logoUrl?: string;
  onlineUrl?: string;
}