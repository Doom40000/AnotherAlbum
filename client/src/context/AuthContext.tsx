import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "../utils/supabase";
import type { User } from "@supabase/supabase-js";
import {
  AuthContextProps,
  AuthProviderProps,
  Album as AlbumType,
} from "../../types";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [favAlbums, setFavAlbums] = useState<AlbumType[]>([]);

  useEffect(() => {
    const initializeSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
    };

    initializeSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const createUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error && data.user) {
      setUser(data.user);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const addAlbum = async (album: AlbumType) => {
    const { data, error } = await supabase.from("userfavoritealbums").insert({
      user_id: user?.id,
      artist: album.artist,
      album_name: album.albumName,
      cover: album.cover,
    });
    if (error) {
      console.error("Error fetching images:", error);
    }
  };

  const fetchSavedAlbums = async () => {
    if (user) {
      const { data, error } = await supabase
        .from("userfavoritealbums")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setFavAlbums(data);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        signIn,
        signOut,
        user,
        addAlbum,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
