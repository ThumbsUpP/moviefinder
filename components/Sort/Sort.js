import './Sort.scss';
import React, { useContext, useState } from 'react';
import { StoreContext } from '@/contexts/StoreContext';
import { sortResult } from '@/store/actions';
import { SORT_BY } from '@/constants.js';
import DropDownArrow from '@/public/dropdownarrow.svg';
import cn from 'classnames';

const { DATE, ORGINAL_TITLE } = SORT_BY;

const Sort = () => {
  const { dispatch } = useContext(StoreContext);
  const [selectHidden, setSelectHidden] = useState(true);
  const [selectedSort, setSelectSort] = useState('Ordre alphabétique');

  const handleSort = pos => {
    let action = pos === 'top' ? ORGINAL_TITLE : DATE;
    let sortName = pos === 'top' ? 'Ordre alphabétique' : 'Date';
    dispatch(sortResult(action));
    setSelectHidden(true);
    setSelectSort(sortName);
  };

  return (
    <div className="sort">
      Trier par :
      <div className="sort__select">
        <DropDownArrow className="sort__select__arrow" />
        {selectHidden ? (
          <button
            className="sort__select__button"
            onClick={() => setSelectHidden(!selectHidden)}
          >
            {selectedSort}
          </button>
        ) : (
          <>
            <button
              className={cn('sort__select__button sort__select__button--top', {
                hidden: selectHidden,
              })}
              onClick={() => handleSort('top')}
            >
              Ordre alphabétique
            </button>
            <button
              className={cn(
                'sort__select__button sort__select__button--bottom',
                {
                  hidden: selectHidden,
                }
              )}
              onClick={() => handleSort('bottom')}
            >
              Date
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sort;
