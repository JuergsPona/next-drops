export interface Photo {
  id: string;
  color: string;
  description: string;
  urls: Urls;
}

export interface Urls {
  thumb: string;
  small: string;
  regular: string;
  full: string;
  raw: string;
}
