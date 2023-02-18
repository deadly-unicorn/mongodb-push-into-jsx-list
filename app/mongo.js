const { data } = require("autoprefixer");
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://deadlyunicorn:QSNRXAKMIHyzMxmW@testingcluster01.spy4wzn.mongodb.net/?retryWrites=true&w=majority";

  
const client = new MongoClient(uri);


/*
async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//run().catch(console.dir);
const dataFetched={
  info: "hello"
}

let tempData;
/*

const databaseConnect = async () => {
      await client.connect()
      .then(()=>{
        console.log(`Sucessfully connected`)
        return client.db('sample_mflix').collection('movies').findOne({title:'Back to the Future'}) 
      })
      .then(data=>{
        tempData=(data.poster)
        console.log(tempData)
      })
    .catch((error)=>{console.error(`Failed because of ${error}`)})
    .finally(()=>{client.close()})
    
}

databaseConnect();
*/


/*
const getGenres = async () => {
  try{
    await client.connect()
    .then(()=>{console.log(`Sucessfully connected`)})
    .then(()=>{return client.db('sample_mflix').collection('movies').distinct("genres")})
    .then(data=>{tempData=(JSON.stringify(data));console.log(tempData)})
    
  }
  catch (error){
    console.error(`Failed because of ${error}`)
  }
  finally{client.close()}
}

getGenres();
*/
/*

const getGenres = async () => {
  try{
    await client.connect()
    .then(()=>{console.log(`Sucessfully connected`)})
    .then(()=>{return client.db('sample_mflix').collection('movies').distinct("genres")})
    .then(data=>{tempData=(data);console.log(tempData[1])});
    
  }
  catch (error){
    console.error(`Failed because of ${error}`)
  }
  finally{client.close()}
}

//getGenres();
*/

const dataBaseReturn=[];
const webShow = async () =>{
  try{
    await client.connect()
      .then ((console.log(`Successfully connected.`)))
    await client.db('sample_mflix').collection('movies').aggregate([{$match:{rated:'PASSED',genres:{$elemMatch:{$eq:"Drama"}}}},{$project:{title:1,_id:0}},{$limit:10}])
      .forEach(dbReturn=>{dataBaseReturn.push(dbReturn)})
  }
  catch (error){console.log(error)}
  finally{
    client.close()
  }

}

webShow();