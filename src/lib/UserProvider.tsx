'use client'
import { IUser } from "@/models/user";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUser } from ".";

export interface IExtendedIUser extends IUser {
  exp: number;
  iat: number;
}

// import { IUser } from "../types";
// import { getCurrentUser } from "../services/AuthService";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: IExtendedIUser | null;
  isLoading: boolean;
  setUser: (user: IExtendedIUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IExtendedIUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log({user})

  const handleUser = async () => {   
    try {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null); // Handle errors gracefully
    } finally {
      setIsLoading(false); // Stop loading after fetching
    }
  };

  useEffect(() => {
    if (isLoading) {
      handleUser();
    }  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;
