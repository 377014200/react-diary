import React from 'react';

import Subsidiary from './Subsidiary'
import Filedset from 'components/Fieldset'


export default function () {

   return (
      <Filedset title={ (<h2>ReactDOM.portal <i> in portal</i></h2>)}>
         <Subsidiary />
      </Filedset>
   )

}