import {
  createContext,
  useState,
  useContext,
  useEffect,
  SetStateAction,
} from "react";

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
        const res = localStorage.getItem("user");
        if (!res) return setLoading(false);

        setUser(JSON.parse(res));

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
