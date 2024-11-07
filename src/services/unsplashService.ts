/**
 * Unsplash Service
 * Dedicated service for handling API interactions with Unsplash
 * Created by Juergen Pona
 */

import { Photo } from "@/app/types/photo";

const API_URL = "https://api.unsplash.com";

export const fetchRecentPhotos = async (
  page = 1,
  perPage = 20
): Promise<Photo[]> => {
  const response = await fetch(
    `${API_URL}/photos?page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
      },
      cache: "no-store", // For the sake of fresh data
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching photos");
  }

  const data: Photo[] = await response.json();
  return data;
};
