import React from "react";

const Weather: React.FC<any> = ({ data }) => {
  console.log(data);
  React.useEffect(() => {
    // const { list } = data;

    // list?.filter((item: any) => {
    //   if (item.dt_txt.includes("15:00:00")) {
    //     console.log(item.weather);
    //   }
    // });
    console.log(data);
  }, [data]);

  return (
    <div>
      {data.map((item: any) => {
        return <p>{item.dt}</p>;
      })}
    </div>
  );
};

export { Weather };
