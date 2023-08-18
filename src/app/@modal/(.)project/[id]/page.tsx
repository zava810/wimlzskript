import React from "react";
import { getDataFromSanity } from "../../../../../sanity/sanity-utils";
import ProjectModal from "../../../../components/ProjectModal";

async function getData(params) {
  const data = await getDataFromSanity('Projects', true, params)
  return data[0];
}

export default async function ProjectModalPage({ params: { id } }: { params: { id: string } }) { 
  const data = await getData(id);
  return (
    <>
      <ProjectModal data={data} />
    </>
  );
}