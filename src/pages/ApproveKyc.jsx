import React from "react";

const ApproveKyc = () => {
  const docs = [
    {
      id: 1,
      name: "Atuzie Rex",
      img: "https://thenationonlineng.net/wp-content/uploads/2019/12/national-ID-card.jpg",
      type: "Driver's license",
    },
    {
      id: 2,
      name: "Amarachi Princess",
      img: "https://media.premiumtimesng.com/wp-content/files/2015/05/21.jpg",
      type: "NIN",
    },
    {
      id: 3,
      name: "Johnson Johnson",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V6YEPF7ol2ctL_GZctON1OMnlmtNKbIti2StvvXuSZtEJ1Bmy6ZJxDTdR8BcOwwjMWE&usqp=CAU",
      type: "Voters card",
    },
    {
      id: 4,
      name: "Peter Obi",
      img: "https://www.nairaland.com/attachments/11923778_3_jpeg182845aceb39c9e413e28fd549058cf8",
      type: "Voters card",
    },
    {
      id: 5,
      name: "Abubakar Yusuf",
      img: " https://www.thecable.ng/wp-content/uploads/2020/08/national-id-cards-app-e1597530550704-1280x720.jpg",
      type: "NIN",
    },
  ];
  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Approve Documents
      </h1>

      <div className=" grid  grid-cols-4 gap-8">
        {docs.map((doc) => {
          return (
            <div className=" bg-white shadow-lg  rounded" key={doc.id}>
              <img
                className=" rounded-t w-full h-[200px] "
                src={doc.img}
                alt="kyc"
              />

              <div className=" p-4">
                <div className=" flex items-center gap-3">
                  <p className=" font-medium uppercase">Name:</p>
                  <p className=" text-gray-800">{doc.name}</p>
                </div>

                <div className=" flex items-center gap-3">
                  <p className=" font-medium uppercase">ID type:</p>
                  <p className=" text-gray-800">{doc.type}</p>
                </div>
                <div className=" mt-6 flex gap-2 ">
                  <button className=" text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded text-xs lg:text-sm px-4 lg:px-8">
                    Accept
                  </button>
                  <button className="text-white bg-red-600   py-2 lg:py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApproveKyc;
