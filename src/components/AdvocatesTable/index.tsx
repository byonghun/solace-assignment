import Highlight from "@/components/HighLight";
import { TAdvocate } from "@/types/advocates";

interface AdvocatesTableProps {
  advocates: TAdvocate[];
  searchQuery: string;
}

const tableHeaderStyle =
  "px-6 py-3 border-b border-gray-200 font-bold min-w-[150px]";

const AdvocatesTable = ({ advocates, searchQuery }: AdvocatesTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow min-h-[100px]">
      {advocates.length === 0 && (
        <div className="h-[100px] flex items-center justify-center font-semibold">
          No advocates found.
        </div>
      )}
      {advocates.length > 0 && (
        <table className="w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className={tableHeaderStyle}>First Name</th>
              <th className={tableHeaderStyle}>Last Name</th>
              <th className={tableHeaderStyle}>City</th>
              <th className={tableHeaderStyle}>Degree</th>
              <th className={`${tableHeaderStyle} min-w-[250px]`}>
                Specialties
              </th>
              <th className={`${tableHeaderStyle} min-w-[50px]`}>
                Years of Experience
              </th>
              <th className={`${tableHeaderStyle} min-w-[200px]`}>
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {advocates.map((advocate, index) => {
              const key = `${index}:${advocate.phoneNumber}`;

              return (
                <tr
                  key={key}
                  className="hover:bg-gray-50 transition-colors duration-150 h-[50px]"
                >
                  <td className="pl-6">
                    <Highlight
                      text={advocate.firstName}
                      searchQuery={searchQuery}
                    />
                  </td>
                  <td className="pl-6">
                    <Highlight
                      text={advocate.lastName}
                      searchQuery={searchQuery}
                    />
                  </td>
                  <td className="pl-6">
                    <Highlight text={advocate.city} searchQuery={searchQuery} />
                  </td>
                  <td className="pl-6">
                    <Highlight
                      text={advocate.degree}
                      searchQuery={searchQuery}
                    />
                  </td>
                  <td className="pl-6">
                    {advocate.specialties.map((specialty, index) => (
                      <div key={`${index}:${specialty}`}>
                        <Highlight text={specialty} searchQuery={searchQuery} />
                      </div>
                    ))}
                  </td>
                  <td className="pl-6">
                    <Highlight
                      text={advocate.yearsOfExperience.toString()}
                      searchQuery={searchQuery}
                    />
                  </td>
                  <td className="pl-6">
                    <Highlight
                      text={advocate.phoneNumber.toString()}
                      searchQuery={searchQuery}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdvocatesTable;
