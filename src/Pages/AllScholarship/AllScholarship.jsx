import useAllScholarship from "../../Hooks/useAllScholarship";
import ScholarshipCard from "./ScholarshipCard";


const AllScholarship = () => {
    const [scholarship] = useAllScholarship();
  return (
    <div className="min-h-screen ">
      <h1 className="text-4xl text-center  pt-10 font-bold">All Scholarship: {scholarship.length} </h1>
      <div className="grid mx-4 py-10 md:mx-0 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
            scholarship.map(item=><ScholarshipCard key={item._id}item={item} >
                
            </ScholarshipCard> )
        }
      </div>
    </div>
  );
};

export default AllScholarship;
