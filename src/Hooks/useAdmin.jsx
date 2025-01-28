import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axios=useAxios();
   const { data: isAdmin, isPending: isAdminLoading } = useQuery({
     queryKey: [user?.email, "isAdmin"],
     queryFn: async () => {
       const res = await axios.get(`user/admin/${user.email}`);
       return res.data?.admin;
     },
   });
   return [isAdmin, isAdminLoading];
};

export default useAdmin;
