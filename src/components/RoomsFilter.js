import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext)
  const {
    handleChange, type, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, capacity
  } = context
  
  //Unique Room Filtering
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) =>{
    return <option value={item} key={index}>{item}</option>
  })

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select 
              name="type" 
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}  
            >{types}
            </select>
        </div>
        {/* end select type */}
        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select 
              name="capacity" 
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}  
            >{people}
            </select>
        </div>
        {/* end select guest */}
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">
            Room Price ${price}
          </label>
          <input 
            type="range" 
            name="price" 
            min={minPrice} 
            max={maxPrice} 
            id="price" 
            value={price} 
            onChange={handleChange} 
            classname="form-control"
          />
        </div>
        {/* end price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">
            Room Size
          </label>
          <input 
            type="number" 
            name="minSize" 
            min={minPrice}  
            id="size" 
            value={minSize} 
            onChange={handleChange} 
            classname="size-input"
          />
          <input 
            type="number" 
            name="maxSize" 
            max={maxSize}  
            id="size" 
            value={maxSize} 
            onChange={handleChange} 
            classname="size-input"
          />
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="breakfast" 
              id="breakfast" 
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="pets" 
              id="pets" 
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  )
}
