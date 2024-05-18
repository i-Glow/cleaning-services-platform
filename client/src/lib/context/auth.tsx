import {
  createContext,
  useState,
  useContext,
  useEffect,
  SetStateAction,
} from "react";
// import { refreshToken } from "../../api/auth/client";

type Context = {
  user?: User;
  setUser: React.Dispatch<SetStateAction<User | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<Context>({
  user: undefined,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any): any => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        // const res = await refreshToken();
        // setUser({ token: res.data.accessToken });
        setUser({
          firstname: "Hakim",
          lastname: "Azizi",
          email: "azizih@gmail.com",
          role: "w",
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getUser();
  }, []);

  const value: Context = {
    user,
    setUser,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
