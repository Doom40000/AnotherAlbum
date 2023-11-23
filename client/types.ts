import React from "react";
import type { SupabaseClient, User } from "@supabase/supabase-js";

export interface Album {
  id: number;
  artist: string;
  albumName: string;
  cover: string;
  isFavourite: boolean;
}

export interface AuthContextProps {
  createUser: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null;
  addAlbum: (album: Album) => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
