import React from 'react';

const SpaceContainer = ({ toastList }) => {
  console.log('space container');
  return (
    <div>
      {toastList?.map((list, index) => {
        return <div key={list.id}>{index}</div>;
      })}
    </div>
  );
};

export default SpaceContainer;
