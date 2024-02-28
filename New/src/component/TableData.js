import { useState, useEffect } from "react";
import axios from "axios";

export function TableData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      )
      .then((response) => {
        setData(response.data.appointments);
      });
  }, []);

  if (!data) return null;

  // console.log(data.appointments,"data")
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-4">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-gray-400">
              Today's Appointment List
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Patients
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Doctor
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Injury
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((element,index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap font-bold ">
                              {element.patient_name}
                            </p>
                            <p className="py-1 text-gray-600 whitespace-no-wrap text-xs font-light">
                              {element.mobile_number}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-5 h-5">
                            <img
                              src="https://img.icons8.com/material-two-tone/24/calendar--v1.png"
                              alt="calendar--v1"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {element.appointment_date}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-5 h-5">
                            <img
                              src="https://img.icons8.com/windows/20/clock--v1.png"
                              alt="clock--v1"
                            />{" "}
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {element.appointment_time}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-5 h-5">
                            <img
                              src="https://img.icons8.com/ios-filled/50/40C057/rating-circled.png"
                              alt="rating-circled"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap ">
                              {element.doctor}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-gray-200 opacity-50 rounded-lg "
                          ></span>
                          <span className="relative">{element.injury}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-2xl">
                        :
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
