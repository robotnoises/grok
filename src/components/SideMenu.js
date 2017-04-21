import React from 'react';
import { pure, branch, renderNothing } from 'recompose';
import * as check from './../utils/check';

/**
 * hideIfNoData()
 * 
 * todo: description
 * 
 * @param {bool} hasNoData 
 * 
 * todo: replace renderNothing with component
 */
const hideIfNoData = hasNoData => branch(hasNoData, renderNothing); 

/**
 * enhance()
 * 
 * todo: description
 */
const renderIfData = hideIfNoData(props => check.isEmptyObject(props));

/**
 * sideMenuComponent()
 * 
 * todo: description
 */
const sideMenuComponent = renderIfData(props => 
  <div className="fl w-100 w-30-ns pa2">
    <div className="bg-white pv5">
      <p>Left-hand menu</p>
    </div>
  </div>
);

export default pure(sideMenuComponent);
