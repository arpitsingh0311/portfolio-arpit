import React from "react";

const Education = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="group bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <h3 className="text-2xl text-center font-semibold text-indigo-400 group-hover:text-indigo-300 transition mb-6 py-3">
              Graduation <br />
              (Bachelor of Technology)
            </h3>
            <div className="space-y-3 text-gray-300 group-hover:text-white transition">
              <p>
                <span className="font-semibold">College:</span> National
                Institute of Technology (NIT), Srinagar
              </p>
              <p>
                <span className="font-semibold">Branch:</span> Computer Science
                and Engineering
              </p>
              <p>
                <span className="font-semibold">Batch:</span> 2023 – 2027
              </p>
              <p>
                <span className="font-semibold">CGPA:</span> 8.67 (till 3
                <sup>rd</sup> semester)
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <h3 className="text-2xl text-center font-semibold text-indigo-400 group-hover:text-indigo-300 transition mb-6 py-3">
              Senior Secondary <br />
              (Class 12<sup>th</sup>)
            </h3>
            <div className="space-y-3 text-gray-300 group-hover:text-white transition">
              <p>
                <span className="font-semibold">School:</span> Avadh Collegiate,
                Lucknow
              </p>
              <p>
                <span className="font-semibold">Stream:</span> PCM
              </p>
              <p>
                <span className="font-semibold">Batch:</span> 2021 – 2023
              </p>
              <p>
                <span className="font-semibold">Percentage:</span> 95.2%
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <h3 className="text-2xl text-center font-semibold text-indigo-400 group-hover:text-indigo-300 transition mb-6 py-3">
              Secondary <br />
              (Class 10<sup>th</sup>)
            </h3>
            <div className="space-y-3 text-gray-300 group-hover:text-white transition">
              <p>
                <span className="font-semibold">School:</span> Avadh Collegiate,
                Lucknow
              </p>
              <p>
                <span className="font-semibold">Stream:</span> Common
              </p>
              <p>
                <span className="font-semibold">Batch:</span> 2019 – 2021
              </p>
              <p>
                <span className="font-semibold">Percentage:</span> 94.8%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
