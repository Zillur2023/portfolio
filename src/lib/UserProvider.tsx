'use client'
import { IUser } from "@/models/user";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUser } from ".";

// import { IUser } from "../types";
// import { getCurrentUser } from "../services/AuthService";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: any | null;
  isLoading: boolean;
  setUser: (user: any | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const fetchedUser = await getUser();

    if(fetchedUser) {
      setUser(fetchedUser);
      setIsLoading(false);
    }
    
  };

  useEffect(() => {
    if(isLoading) {
      handleUser();
    }
  }, [isLoading]);

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
