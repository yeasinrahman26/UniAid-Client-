import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useAllScholarship = () => {
    const { user } = useContext(AuthContext)
    const axios = useAxios();
    const { refetch, data: scholarship = [] } = useQuery({
      queryKey: ["scholarship", user?.email],
      queryFn: async () => {
        const res = await axios.get('allScholarship');
        return res.data;
      },
    });
    return [scholarship, refetch];
};

export default useAllScholarship;