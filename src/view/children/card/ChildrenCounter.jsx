import React, { Children } from 'react';


export default function ( props ) {

   return <p>{ Children.count(props.children) }</p>

}

