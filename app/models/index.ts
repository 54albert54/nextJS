import { string } from "prop-types";



export interface TProducts {
  name:       string;
  id:         string;
  sku:        string;
  price:      number;
  image:      string;
  attributes: TAttributes;
}

export interface TAttributes {
  description: string;
  shape:       string;
  hardiness:   string;
  taste:       string;
}


