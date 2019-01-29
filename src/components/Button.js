import React from 'react'

export default function Button(props) {
  return (
    <React.Fragment>
        <a href="https://twitter.com" target="_blank" className="btn btn-primary  mr-3 text-center" id="tweet-quote" rel="noopener noreferrer" ><i class="fa fa-twitter p-1" ></i> tweeet</a>
        <button className="btn btn-warning" onClick={props.random} id="new-quote">Random quote</button>
    </React.Fragment>
  )
}
