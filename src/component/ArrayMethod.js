import React from "react";

export default function ArrayMethod() {
  const data = [
    {
      firstName: "Sara",
      lastName: "Miller",
    },
    {
      firstName: "Michael",
      lastName: "Taylor",
    },
    {
      firstName: "David",
      lastName: "Williams",
    },
    {
      firstName: "Sam",
      lastName: "Johnson",
    },
    {
      firstName: "John",
      lastName: "Miller",
    },
    {
      firstName: "Sam",
      lastName: "Miller",
    },
    {
      firstName: "Sara",
      lastName: "Jones",
    },
    {
      firstName: "Michelle",
      lastName: "Wilson",
    },
  ];

  const length = data.length;
  // index method----------
  const last = data[length - 1];
  // console.log(last);
  //for loop method ----------
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      console.log(data[i]);
    }
  }
  // console.log(length);
  // console.log(last);

  // With slice methood it will return new array with  last element of the original array----
  const newArray = data.slice(length - 1);

  // console.log(newArray, "newArray");
  const newArray1 = data.slice(-1);
  // console.log(newArray1, "newArra1y");
  // splice method mutate original array --------
  
  const newSplice = data.splice(length - 1);
  // console.log(newSplice, "newSplice");
  // find the 4th element
  const splice4th = data.splice(4, length - 1);
  // console.log(data.length);
  // console.log(length);
  const splicelast = data.splice(data.length - 1);
//   console.log(splicelast, );

  return (
    <>
      <h3>
        Open console to find out ArrayMethods. and Navigate to
        component/ArrayMethod.
      </h3>
    </>
  );
}
