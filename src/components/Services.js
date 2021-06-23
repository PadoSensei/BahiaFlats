import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
  state={
    services:[
      {
        icon: <FaBeer/>,
        title:"Free Beer",
        info:"You get a free beer!"
      },
      {
        icon: <FaHiking/>,
        title:"Free Hike",
        info:"You get a free hike!"
      },
      {
        icon: <FaShuttleVan/>,
        title:"Free Shuttlevan",
        info:"You get a free bus to the beach everyday!"
      },
      {
        icon: <FaCocktail/>,
        title:"Free Cocktail",
        info:"You get a free cocktail on arrival!"
      },
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="Services"/>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          }

          )}
        </div>
      </section>
    )
  }
}
