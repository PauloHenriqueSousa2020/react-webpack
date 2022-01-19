import React, { useEffect, useState } from "react";

import JsonService from "../../services/JsonService/JsonService";

const Layout = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    JsonService.findAll().then((res: any) => {
      setData(res.data);

    }).finally(() => { })
      .catch((error: any) =>
        console.log(error)
      );
  }, []);

  return (
    <ul>
      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}

      {data.map((data: any) =>
        <li>{data.title}</li>
      )}
    </ul>

  )
};

export default Layout;