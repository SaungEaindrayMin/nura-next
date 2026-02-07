import { useQuery } from "@tanstack/react-query";
import apiClient from "./client";

export const useMovies = (limit = 10) => {
  return useQuery({
    queryKey: ["movies", limit],
    queryFn: async () => {
      const response = await apiClient.get("/movie/popular", {
        params: { language: "en-US", page: 1 },
      });
      return response.results.slice(0, limit);
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const response = await apiClient.get("/genre/movie/list", {
        params: { language: "en-US" },
      });
      return response.genres;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};
