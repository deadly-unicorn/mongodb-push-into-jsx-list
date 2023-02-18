const { MongoClient } = require("mongodb");
const { list } = require("postcss");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://deadlyunicorn:QSNRXAKMIHyzMxmW@testingcluster01.spy4wzn.mongodb.net/?retryWrites=true&w=majority";

  
const client = new MongoClient(uri);



const listData={
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

getGenres().then(()=>{listData.fetchedData.forEach((element)=>{console.log(element)})})

/*
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
// */