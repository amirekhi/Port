"use client";

import React, { useState } from 'react';
import Languages from '@/components/Languages';
import { PTechs } from '@/data';
import Pagin from '@/components/Pagin';

const Page = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  const startIndex = (page - 1) * itemsPerPage;
  const selectedTechs = PTechs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {selectedTechs.map((tech, index) => (
        <Languages key={index} obj={tech} />
      ))}

      <Pagin
        page={page}
        setPage={setPage}
        totalItems={PTechs.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default Page;
