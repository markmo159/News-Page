import React from 'react';
import MainResultSection from './MainResultSection';
import RestResults from './RestResults';

const ResultsSection = ({data}) => {
  return (
    <div>
      <MainResultSection data={data} />
      <RestResults data={data} />
    </div>
  );
}

export default ResultsSection;