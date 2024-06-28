import React from "react";

const DocsPage = ({ params }: { params: { id: string | null } }) => {
  console.log(params);
  return <div>docs</div>;
};

export default DocsPage;
