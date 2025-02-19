

const FAQ = () => {
    return (
      <section className="max-w-6xl mx-auto  my-10 space-y-4 ">
        <div className="">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
             Frequently Asked Questions
          </h1>
        </div>
        {/* Question 1 */}
        <div className="bg-base-100 border border-base-300 collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            Who is eligible to apply for scholarships on UniAid?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            Each scholarship has specific eligibility criteria, such as academic
            performance, financial need, or extracurricular achievements. Check
            the eligibility requirements on each scholarship’s details page.
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-base-100 border border-base-300 collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            What documents are required for a scholarship application?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            Required documents vary but often include academic transcripts,
            proof of financial need, identification, recommendation letters, and
            a personal statement. Check each scholarship's details page for
            specific requirements.
          </div>
        </div>

        {/* Question 3 */}
        <div className="bg-base-100 border border-base-300 collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            When is the deadline to apply for scholarships?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            Each scholarship has a different deadline, which is displayed on the
            scholarship details page. Be sure to submit your application before
            the specified deadline.
          </div>
        </div>

        {/* Question 4 */}
        <div className="bg-base-100 border border-base-300 collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            How are scholarship recipients selected?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            Selection is based on academic merit, financial need,
            extracurricular activities, and the quality of the application. Some
            scholarships may also require an interview or additional evaluation.
          </div>
        </div>

        {/* Question 5 */}
        <div className="bg-base-100 border border-base-300 collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            How will I receive the scholarship funds if I am selected?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#412ad5ce] peer-checked:text-secondary-content">
            The scholarship provider determines the disbursement method, which
            can include direct payment to your university, bank transfer, or
            monthly stipends for education-related expenses.
          </div>
        </div>
      </section>
    );
};

export default FAQ;