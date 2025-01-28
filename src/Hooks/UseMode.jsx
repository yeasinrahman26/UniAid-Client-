import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const UseMode = () => {
   const { user } = useContext(AuthContext);
   const axios = useAxios();
   const { data: isMod, isPending: isModLoading } = useQuery({
     queryKey: [user?.email, "isMod"],
     queryFn: async () => {
       const res = await axios.get(`user/mod/${user.email}`);
       return res.data?.mod;
     },
   });
   return [isMod, isModLoading];
};

export default UseMode;