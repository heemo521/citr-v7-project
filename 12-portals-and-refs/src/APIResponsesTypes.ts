export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Location {
  city: string;
  state: string;
}
export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  location: Location;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  hasNext: boolean;
  pets: Pet[];
}
