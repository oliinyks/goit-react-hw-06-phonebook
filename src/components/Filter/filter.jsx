import React from 'react';
import { getStatusFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import css from './filter.module.css';

export default function Filter() {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  const nameFilterId = nanoid();

  const changeFilter = e => {
    const event = e.currentTarget.value;
    dispatch(setStatusFilter(event));
  };

  return (
    <>
      <label className={css.label} htmlFor={nameFilterId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        id={nameFilterId}
        onChange={changeFilter}
      />
    </>
  );
}
