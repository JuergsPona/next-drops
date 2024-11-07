export interface Photo {
  id: string;
  color: string | '#000000';
  description: string;
  width: number;
  height: number;
  urls: Urls;
}

export interface Urls {
  thumb: string;
  small: string;
  regular: string;
  full: string;
  raw: string;
}
