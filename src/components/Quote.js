import React from 'react'

export default function Quote(props) {
    const { title,quote ,author} = props.quoteData
  return (
    <React.Fragment>
        <div className="quote-title text-capitalize text-center pb-2"><h2>{title}</h2></div>
        <h3 className="main-quote">"{quote}."</h3>
       <div id="author"> <h5>--{author}</h5></div>
      
    </React.Fragment>
  )
}
