import React from 'react'

// tells next how many pages to render at build time 
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    const paths = data.map(ninja=>{
        return{
            params: {id: ninja.id.toString()}
        }

    })
    return{
        // array of objects to build and a fallback
        paths,
        fallback: false
    }

}
// context object is built in and allows us to know which object is currently being built

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    // get object that matches this id to save a api call



    const data = await res.json();
    return{
        props: {ninja: data}
    }

}


const Details = ({ninja}) => {
  return (
    <div>
    <h1>{ ninja.name }</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
  )
}

export default Details
