Command line with mongoDB.

* show dbs --> use "name repo" --> show collections --> db."name collections".insert("content need add") --> db."name collections".find().pretty()

** db."name collections".update(
    {Json object}, // if check with data
    {$set:{Json object need change or need add}},
    {multi:true} 
)

    EX:   db.com.update({"name":"Serven"},{$set:{"nati":"USA"}},{multi:false})
    Note: cmd: "unset" --> same remove. 
//-----------------------------------------------------------------------------------------------------------

** db."name collections".update(
    {Json object}, // if check with data
    {$set:{Json object need change or need add}},
    { 
        multi:true,  // change all value and if = false -> change value first
        upsert:flase  // no find -> no change
        upsert:true  // no find --> automation add
    } 
)  

    EX: db.com.update({"name":"Serven"},{$set:{"nati":"USA"}},{multi:false,upsert:false})
//-----------------------------------------------------------------------------------------------------------

** rename
    db.com.update({"name":"Serven"},{$rename:{"name if":"name need change"}},{multi:false})

    EX: db.com.update({"name":"Serven"},{$rename:{"Serven":"CAD"}},{multi:false})
//-----------------------------------------------------------------------------------------------------------

** remove
    db.com.remove(
        {Json object if},
        {justOne:false}  // false --> remove all, true --> remove just one.
    )

    EX: db.com.remove({"name":"Serven"},{justOne:true})
//-----------------------------------------------------------------------------------------------------------

** export and import
    1. export collections
        mongoexport -d <name database> -c <name collection> -o <name .Json>
    
    2. export database
        mongodump -d <name database> -o <path folder>

    3. import collection 
        mongoimport -d <name database> -c <name collection> --file <name folder>
    
    4. import database
        mongoimport -d <name database> --file <name folder>