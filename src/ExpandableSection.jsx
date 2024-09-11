import React, { useState } from 'react';

function ExpandableSection() {
  
  const [isExpandedFirst, setIsExpandedFirst] = useState(false);
  const [isExpandedSecond, setIsExpandedSecond] = useState(false);

  
  const toggleFirstParagraph = () => {
    setIsExpandedFirst(!isExpandedFirst);
  };

  const toggleSecondParagraph = () => {
    setIsExpandedSecond(!isExpandedSecond);
  };

  return (
    <section className="grid grid-cols-1 text-white lg:grid-cols-2 bg-gray-700 mt-12 xl:gap-12">
      
      <div className="mt-10 pb-24 xl:ml-72">
        <h2 className="text-2xl font-bold ml-4">
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
        </h2>
        <p className="mt-5 ml-4">
          Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare,
          diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et 
          {isExpandedFirst && (
            <span>
              facilisis justo, in volutpat magna. Nulla facilisi. In in gravida turpis. Maecenas gravida semper lacus,
              vel efficitur dolor feugiat nec. Curabitur pretium tortor vel nibh condimentum facilisis.
            </span>
          )}
        </p>
        <button
          onClick={toggleFirstParagraph}
          className="ml-4 mt-5 border-b-2 focus:outline-none"
        >
          {isExpandedFirst ? 'Zwiń' : 'Rozwiń'}
        </button>
      </div>

      
      <div className="mt-10 pb-24 xl:mr-72">
        <h2 className="text-2xl font-bold ml-4">
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
        </h2>
        <p className="mt-5 ml-4">
          Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare,
          diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et 
          {isExpandedSecond && (
            <span>
              facilisis justo, in volutpat magna. Nulla facilisi. In in gravida turpis. Maecenas gravida semper lacus,
              vel efficitur dolor feugiat nec. Curabitur pretium tortor vel nibh condimentum facilisis.
            </span>
          )}
        </p>
        <button
          onClick={toggleSecondParagraph}
          className="ml-4 mt-5 border-b-2 "
        >
          {isExpandedSecond ? 'Zwiń' : 'Rozwiń'}
        </button>
      </div>
    </section>
  );
}

export default ExpandableSection;
