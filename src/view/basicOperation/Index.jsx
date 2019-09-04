import React from 'react';

import Spinach from './Spinach'
import Clone from './Clone'
import Calculator from './Calculator'
import Filedset from 'components/Fieldset'
export default function () {

   return (
      <Filedset title={ <h2>基本操作</h2> }>
         <Spinach
         >
            <Clone slot='radius'/>
         </Spinach>
         <Calculator/>
      </Filedset>
   )

}