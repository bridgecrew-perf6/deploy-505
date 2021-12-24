 
     export const increment = (id)=>{
      return{
          type:"Increment",
          payload:id
      }
  }

  export const decrement = (id)=>{
    return{
        type:"Decrement",
        payload:id
    }
}

  export const total = ()=>{
    return{
        type:"Total",
       
    }
}
   