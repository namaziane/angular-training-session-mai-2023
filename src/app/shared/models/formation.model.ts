export interface ITraining {
  id: number;
  code: string;
  name: string;
  startDate: string;
  price?: number;
  description?: string;
  starRating?: number;
  format?: string;
  logoUrl?: string;
  onlineUrl?: string;
}