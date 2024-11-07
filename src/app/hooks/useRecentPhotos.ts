/**
 * Recent Photos Custom Hook
 * Manages data fetching and state
 * Created by Juergen Pona
 */

import { fetchRecentPhotos } from "@/app/services/unsplashService";
import { Photo } from "@/app/types/photo";
import { useEffect, useState } from "react";

export const useRecentPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const data: Photo[] = await fetchRecentPhotos();
        setPhotos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getPhotos();
  }, []);

  return { photos, loading, error };
};
