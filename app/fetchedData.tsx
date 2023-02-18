
import { MongoClient } from "mongodb";
// Replace the uri string with your connection string.
import Image from "next/image";
const uri = "mongodb+srv://deadlyunicorn:QSNRXAKMIHyzMxmW@testingcluster01.spy4wzn.mongodb.net/?retryWrites=true&w=majority";

  
const client = new MongoClient(uri);



let tempData;
const listData:any[]=[];

const getGenres = async () => {
  try{
    await client.connect()
    .then(()=>{console.log(`Sucessfully connected`)})
    .then(()=>{return client.db('sample_mflix').collection('movies').distinct("genres")})
    .then(data=>{
      tempData=(data);
      tempData.forEach(element=>{listData.push(<li>{JSON.stringify(element)}</li>)});

    })
    
  }
  catch (error){
    console.error(`Failed because of ${error}`)
  }
  finally{client.close()}
}

getGenres();




export default function FetchedData(){

      return(
        <>
        <div className="max-w-sm flex flex-col h-fit border overflow-hidden">
          <span>genre list</span>
        <div></div>
          <br/>
          <br/>
          <div className="pl-2">
            <ul className="list-disc" >
              <li>hey</li>
              {listData}

            </ul>
          </div>
        </div>
        </>
        )
  
}