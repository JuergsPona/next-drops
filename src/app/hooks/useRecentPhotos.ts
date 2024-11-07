/**
 * Recent Photos Custom Hook
 * Manages data fetching and state
 * Created by Juergen Pona
 */

"use client";

import { fetchRecentPhotos } from "@/services/unsplashService";
import { useEffect, useState } from "react";
import { Photo } from "../types/photo";

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
