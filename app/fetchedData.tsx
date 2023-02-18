
import { MongoClient } from "mongodb";
// Replace the uri string with your connection string.
import Image from "next/image";
const uri = "mongodb+srv://deadlyunicorn:QSNRXAKMIHyzMxmW@testingcluster01.spy4wzn.mongodb.net/?retryWrites=true&w=majority";

  
const client = new MongoClient(uri);





interface listData{
  fetchedData:any[]
}

const listData:listData ={
  fetchedData:[]
};


const getGenres = async () => {
  try{
    await client.connect()
    .then(()=>{console.log(`Sucessfully connected`)})
    await client.db('deadly_testing').collection('newCollection').aggregate([{$match:{age:{$gt:20}}},{$project:{name:1,_id:0,age:1}}])
    .forEach(element=>{listData.fetchedData.push(element)})
  }
  catch (error){
    console.error(`Failed because of ${error}`)
  }
  finally{await client.close()}
}
const jsxArray:any[]=[]

getGenres().then(()=>{
  {listData.fetchedData.forEach(
    (element,index)=>{
      jsxArray.push(<li key={index} className="list-inside">{JSON.stringify(element)}</li>)
    }
    )
  }
})





export default function FetchedData(){

      return(
        <>
        <div className="max-w-sm flex flex-col h-fit border overflow-hidden text-center">
          <span>Found:</span>
        <div></div>
          <br/>
          <br/>
          <div className="pl-2">
            <ol className="list-decimal" >
              {jsxArray}              

            </ol>
          </div>
        </div>
        </>
        )
  
}